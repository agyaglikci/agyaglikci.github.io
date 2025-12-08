const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');
const markdownHelper = require('./utils/helpers/markdown');
const defaultMetadata = require('./metadata/metadata');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const repoName = require('git-repo-name');
const username = require('git-username');
// const buildPdf = require('./utils/pdf.js');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';
const templatesDir = srcDir + '/templates';
const metadataDir = srcDir + '/metadata';

// Helper function to load metadata for a specific file (template or partial)
function getMetadataForFile(fileName) {
  const baseName = path.basename(fileName, '.html');
  const specificMetadataPath = path.join(metadataDir, `metadata-${baseName}.js`);
  
  // Check if file-specific metadata exists
  if (fs.existsSync(specificMetadataPath)) {
    // Clear the require cache to ensure fresh data
    delete require.cache[require.resolve(specificMetadataPath)];
    return require(specificMetadataPath);
  }
  
  return null;
}

// Helper function to detect which partials are used in a template
function getUsedPartials(templateContent) {
  // Match Handlebars partial syntax: {{> partialName }} or {{>partialName}}
  const partialRegex = /\{\{>\s*(\w+)\s*\}\}/g;
  const matches = [];
  let match;
  
  while ((match = partialRegex.exec(templateContent)) !== null) {
    matches.push(match[1]);
  }
  
  return [...new Set(matches)]; // Remove duplicates
}

// Configuration for templates that need specific metadata files
// Use this when a template needs metadata but doesn't use the corresponding partial
const templateMetadataConfig = {
  'bibtex.html': ['publications'],  // bibtex.html needs publications metadata
  // Add more mappings as needed: 'template.html': ['partial1', 'partial2']
};

// Helper function to load metadata for a template and its partials
function getMetadataForTemplate(templateFile, templateContent) {
  const templateBaseName = path.basename(templateFile, '.html');
  
  // Start with default metadata
  let mergedMetadata = { ...defaultMetadata };
  
  // Get template-specific metadata
  const templateMetadata = getMetadataForFile(templateFile);
  if (templateMetadata) {
    console.log(`  Using metadata file: metadata-${templateBaseName}.js`);
    mergedMetadata = { ...mergedMetadata, ...templateMetadata };
  } else {
    console.log(`  Using default metadata file: metadata.js`);
  }
  
  // Detect and merge partial metadata from template content
  const usedPartials = getUsedPartials(templateContent);
  usedPartials.forEach(partialName => {
    const partialMetadata = getMetadataForFile(`${partialName}.html`);
    if (partialMetadata) {
      console.log(`  Merging metadata from: metadata-${partialName}.js`);
      mergedMetadata = { ...mergedMetadata, ...partialMetadata };
    }
  });
  
  // Also merge metadata from templateMetadataConfig if specified
  if (templateMetadataConfig[templateFile]) {
    templateMetadataConfig[templateFile].forEach(partialName => {
      const partialMetadata = getMetadataForFile(`${partialName}.html`);
      if (partialMetadata) {
        console.log(`  Merging metadata from: metadata-${partialName}.js (configured)`);
        mergedMetadata = { ...mergedMetadata, ...partialMetadata };
      }
    });
  }
  
  return mergedMetadata;
}

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Register helpers
handlebars.registerHelper('markdown', markdownHelper);

// Register comparison helper for conditionals
handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

// Register logical OR helper
handlebars.registerHelper('or', function() {
  // Get all arguments except the last one (which is the Handlebars options object)
  const args = Array.prototype.slice.call(arguments, 0, -1);
  return args.some(arg => !!arg);
});

// Get all HTML files in templates directory
const allTemplateFiles = fs.readdirSync(templatesDir)
  .filter(file => path.extname(file) === '.html');

// Separate partials from main templates
// Strategy:
// 1. Files starting with underscore (_) are partials
// 2. Files explicitly listed in partialsConfig are partials
// 3. Everything else is a main template
const partialsConfig = ['publications.html', 's4l-header.html', 'theses.html']; // Add more partial names here as needed

const partialFiles = allTemplateFiles.filter(file => 
  file.startsWith('_') || partialsConfig.includes(file)
);
const templateFiles = allTemplateFiles.filter(file => !partialFiles.includes(file));

// Register partials
partialFiles.forEach(partialFile => {
  const partialPath = path.join(templatesDir, partialFile);
  const partialName = path.basename(partialFile, '.html').replace(/^_/, ''); // Remove leading underscore if present
  const partialContent = fs.readFileSync(partialPath, 'utf-8');
  handlebars.registerPartial(partialName, partialContent);
  console.log(`Registered partial: ${partialName}`);
});

// Process each template file
templateFiles.forEach(templateFile => {
  console.log(`Processing template: ${templateFile}`);
  
  // Read template content
  const source = fs.readFileSync(path.join(templatesDir, templateFile), 'utf-8');
  
  // Load template-specific metadata and merge with partial metadata
  const templateData = getMetadataForTemplate(templateFile, source);
  
  // Compile template
  const template = handlebars.compile(source);
  
  // Generate output filename (same as template filename)
  const outputFileName = templateFile;
  
  // Compile template with data
  const html = template({
    ...templateData,
    baseUrl: `https://${username()}.github.io/${repoName.sync()}`,
    // pdfFileName: `${getSlug(templateData.name)}.${getSlug(templateData.title)}.pdf`,
    updated: dayjs().format('MMMM D, YYYY'),
  });

  // Write compiled HTML to output directory
  fs.writeFileSync(path.join(outputDir, outputFileName), html);
  
  console.log(`Generated: ${outputFileName}`);
});

// Build PDF for index.html if it exists
// const indexPath = path.join(outputDir, 'index.html');
// if (fs.existsSync(indexPath)) {
//   const pdfFileName = `${getSlug(templateData.name)}.${getSlug(templateData.title)}.pdf`;
//   buildPdf(indexPath, `${outputDir}/${pdfFileName}`);
// }

console.log('Build completed!');