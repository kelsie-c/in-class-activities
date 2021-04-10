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

// runs when user inputs node index.js
inquirer.prompt([
    {
        type: 'list',
        message: 'Which would you like to do:',
        choices: ['Search for a specific artist', 'List all artists with multiple awards', 'Search for a specific range'],
        name: 'selectedAction'
    }
])
.then( (answers) => {
    console.log(answers);
    if (answers.selectedAction === 'Search for a specific artist') {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the artist\'s name',
                name: 'artistName'
            }
        ])
        .then( ({artistName}) => {
            const queryString = `SELECT * FROM topSongs WHERE artist = '${artistName}'`; 
            console.log('Selecting all products...\n');
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log(res);
                connection.end();
                })
        })
    } else if (answers.selectedAction === 'List all artists with multiple awards') {
        
        const queryString = `SELECT artist FROM topSongs GROUP BY artist HAVING COUNT(artist) > 1;`; 
        console.log('Selecting all products...\n');
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            connection.end();
            })
        
    } else if (answers.selectedAction === 'Search for a specific range') {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the max upper bound?',
                name: 'max'
            },
            {
                type: 'input',
                message: 'What is the lower bound?',
                name: 'min'
            }
        ])
        .then( ({max, min}) => {
            const queryString = `SELECT * FROM topSongs WHERE id <= ${min} && id >= ${max}`; 
            console.log('Selecting all products...\n');
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log(res);
                connection.end();
                })
        })
    }
})  