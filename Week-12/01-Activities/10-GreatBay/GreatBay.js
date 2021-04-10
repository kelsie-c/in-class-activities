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
  database: 'greatBayDB',
});

const initializeApp = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which would you like to do?',
            choices: ['POST', 'BID', 'EXIT'],
            name: 'initPrompt'
        }
    ])
    .then(({initPrompt}) => {
        if (initPrompt === 'POST') {
            postItem();
        } else if (initPrompt === 'BID') {
            bidItem();
        } else {
            return;
        }
    })
}

const postItem = () => {
    console.log('Inserting a new item...\n');
    const query = connection.query(
    'INSERT INTO listings SET ?',
    {
      title: 'Life By The Drop',
      artist: 'Stevie Ray Vaughn',
      genre: 'Rock',
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} items inserted!\n`);
      // Call updateProduct AFTER the INSERT completes
      initializeApp();
    }
  );
}

const bidItem = () => {
    console.log('Inserting a new item...\n');
    const query = connection.query(
        console.log('Selecting all listings...\n');
        connection.query('SELECT * FROM listings', (err, res) => {
          if (err) throw err;
          // Log all results of the SELECT statement
          let listings
          console.log(res);
          connection.end();
        }); 
    }
}

funtion getListings() {

}