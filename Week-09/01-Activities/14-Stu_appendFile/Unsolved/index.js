// TODO: What are we importing?
// file system module
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile(
  // name of file to be appended
  'log.txt', 

  // template literal location of argument?
  `${process.argv[2]}\n`, 

  // callback function
  (err) =>
  // TODO: Describe how this ternary operator works
  // if there is an error, console log it. Otherwise log "Commit logged!"
  err ? console.error(err) : console.log('Commit logged!')
);