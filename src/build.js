const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const repoName = require('git-repo-name');
const username = require('git-username');
// const buildPdf = require('./utils/pdf.js');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';
const templatesDir = srcDir + '/templates';

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Register helpers
handlebars.registerHelper('markdown', markdownHelper);

// Get all HTML files in templates directory
const templateFiles = fs.readdirSync(templatesDir)
  .filter(file => path.extname(file) === '.html');

// Process each template file
templateFiles.forEach(templateFile => {
  console.log(`Processing template: ${templateFile}`);
  
  // Read and compile template
  const source = fs.readFileSync(path.join(templatesDir, templateFile), 'utf-8');
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