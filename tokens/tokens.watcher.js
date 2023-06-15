const fs = require('fs');

const inputFile = 'tokens.json';
const outputFile = 'tokens.auto.json';

// Watch for changes in the input file
fs.watchFile(inputFile, (curr, prev) => {
  // Read the contents of the input file
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) throw err;

    // Process the file contents and modify as needed
    const updatedData = data.replace(/"description":/g, '"$description":')
                            .replace(/"value":/g, '"$value":')
                            .replace(/"type":/g, '"$type":');

    // Write the modified contents to the output file
    fs.writeFile(outputFile, updatedData, 'utf8', (err) => {
      if (err) throw err;
      console.log(`Successfully updated ${outputFile}`);
    });
  });
});
