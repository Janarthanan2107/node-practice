const fs = require('fs');

// Synchronous file read
try {
    const data = fs.readFileSync('data.txt', { encoding: 'utf-8' }, { flag: "a" });
    console.log('File content:', data);
    // Synchronous file write
    try {
        fs.writeFileSync('duplicateData.txt', `Duplicate data from data.txt: \n` + data, 'utf-8');
        console.log('File written successfully.');
    } catch (error) {
        console.error('Error writing file:', error.message);
    }
} catch (error) {
    console.error('Error reading file:', error.message);
}
