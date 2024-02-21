// index.js

const fileSystemModule = require('./fileSystemModule');

// Demonstrate the usage of each function
fileSystemModule.listFiles('./some-directory'); // Provide an existing directory path
fileSystemModule.createDirectory('new-directory');
fileSystemModule.readFileContent('./some-file.txt'); // Provide an existing file path
fileSystemModule.writeToFile('./new-file.txt', 'Hello, Node.js!');
