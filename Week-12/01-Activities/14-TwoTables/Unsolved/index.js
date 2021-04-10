const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'MistyCat2007',
    database: 'Top5000SongsDB',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });
  const runSearch = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
          'Find songs by artist',
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Find songs by artist':
            artistSearch();
            break;
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };
  const artistSearch = () => {
    inquirer
      .prompt({
        name: 'artist',
        type: 'input',
        message: 'What artist would you like to search for?',
      })
      .then((answer) => {
        const query = `SELECT id, title, releaseYear FROM topSongs LEFT JOIN topAlbums ON topAlbums.artist = topSongs.artist WHERE artist = '${answer.artist}'`;
        connection.query(query, (err, res) => {
          res.forEach(({ id, title, releaseYear }) => {
            console.log(
              `Position: ${id} || Song: ${title} || Year: ${releaseYear}`
            );
          });
          runSearch();
        });
      });
  };