const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'firstName',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            choices: ['HTML', 'CSS', 'Javascript'],
            name: 'languages',
        },
        {
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            choices: ['Email', 'Phone', 'Text'],
            name: 'commMethod',
        },
    ])
    .then((answers) => 
        fs.writeFile('./answers.json', JSON.stringify(answers), (error) => { if (error) console.log('Oh no!', error) })
    )

    .catch(error => {
        if(error.isTtyError) {

        } else {
            console.error(error);
        }
    });    
    
