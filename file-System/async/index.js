const fs = require('fs');

// Asynchronous file read
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error.message);
    } else {
        console.log('File content:', data);

        // Asynchronous file write
        const contentToWrite = data;

        fs.writeFile('duplicateData.txt', contentToWrite, 'utf-8', (error) => {
            if (error) {
                console.error('Error writing file:', error.message);
            } else {
                console.log('File written successfully.');
            }
        });
    }
});