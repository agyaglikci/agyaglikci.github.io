# Metadata Files

This directory contains metadata files used by the build script to generate HTML pages from templates.

## How it Works

The build script (`src/build.js`) automatically loads the appropriate metadata file for each template:

### Naming Convention

- **Default metadata**: `metadata.js` - Used when no template-specific file exists
- **Template-specific metadata**: `metadata-<template-name>.js`

### Examples

| Template File | Metadata File Used | Description |
|--------------|-------------------|-------------|
| `index.html` | `metadata.js` | No specific file exists, uses default |
| `s4l.html` | `metadata-s4l.js` | Template-specific metadata file |
| `about.html` | `metadata-about.js` | Would use this if it existed |

## Creating Template-Specific Metadata

To create metadata for a new template:

1. Create a new file: `metadata-<template-name>.js`
   - For `index.html` → create `metadata-index.js`
   - For `projects.html` → create `metadata-projects.js`

2. Export an object with your data:
   ```javascript
   module.exports = {
     name: 'Your Name',
     title: 'Your Title',
     // ... add your specific data
   };
   ```

3. The build script will automatically detect and use it

## Benefits

- **Separation of concerns**: Each template has its own data
- **Maintainability**: Easy to update data for specific pages
- **Flexibility**: Templates can share common data or have unique fields
- **Fallback**: If no specific metadata exists, uses the default

## Migration

If you want to keep using the same metadata for all templates, simply don't create template-specific files. The system will continue to use `metadata.js` as before.
