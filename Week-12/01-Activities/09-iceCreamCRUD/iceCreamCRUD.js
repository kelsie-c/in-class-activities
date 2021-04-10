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
  database: 'playlistDB',
});

const readProducts = () => {
  console.log('Selecting all products...\n');
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

const userInput = () => {
  inquirer.prompt ([
    {
      type: 'confirm',
      message: 'Would you like to add a new song?',
      name: 'newSong',
    }
  ])
  .then(({newSong}) => {
    if (!newSong) {
      readProducts();
    } else {
      inquirer.prompt([
        {
          type: 'input',
          message: 'What is the song title?',
          name: 'songTitle',
        },
        {
          type: 'input',
          message: 'What is the artist\'s name?',
          name: 'artistName',
        },
        {
          type: 'input',
          message: 'What is the genre?',
          name: 'songGenre',
        }
      ])
      .then(({songTitle, artistName, songGenre}) => {
        console.log('Inserting a new song...\n');
        const query = connection.query(
          'INSERT INTO songs SET ?',
          {
            title: songTitle,
            artist: artistName,
            genre: songGenre,
          },
          (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} songs inserted!\n`);
            userInput();
          })
      });
    } 
  })
}
  

const deleteProduct = () => {
  console.log('Deleting all Eric Clapton...\n');
  connection.query(
    'DELETE FROM songs WHERE ?',
    {
      artist: 'Eric Clapton',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs deleted!\n`);
      // Call readProducts AFTER the DELETE completes
      userInput();
    }
  );
};

const updateProduct = () => {
  console.log('Updating all Pink Floyd quantities...\n');
  const query = connection.query(
    'UPDATE songs SET ? WHERE ?',
    [
      {
        title: 'Wish You Were Here',
      },
      {
        artist: 'Pink Floyd',
      },
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs updated!\n`);
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

const createProduct = () => {
  console.log('Inserting a new song...\n');
  const query = connection.query(
    'INSERT INTO songs SET ?',
    {
      title: 'Life By The Drop',
      artist: 'Stevie Ray Vaughn',
      genre: 'Rock',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} songs inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  createProduct();
})
