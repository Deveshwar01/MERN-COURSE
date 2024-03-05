// fileSystemModule.js

const fs = require('fs').promises;

// Function 1: List Files
async function listFiles(directoryPath) {
    try {
        const files = await fs.readdir(directoryPath);
        console.log('List of files:', files);
    } catch (error) {
        console.error('Error listing files:', error.message);
    }
}

// Function 2: Create Directory
async function createDirectory(directoryName) {
    try {
        await fs.mkdir(directoryName);
        console.log('Directory created successfully:', directoryName);
    } catch (error) {
        console.error('Error creating directory:', error.message);
    }
}

// Function 3: Read File Content
async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log('File content:', content);
    } catch (error) {
        console.error('Error reading file content:', error.message);
    }
}

// Function 4: Write to File
async function writeToFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content, 'utf-8');
        console.log('Content written to file:', filePath);
    } catch (error) {
        console.error('Error writing to file:', error.message);
    }
}

module.exports = { listFiles, createDirectory, readFileContent, writeToFile };
