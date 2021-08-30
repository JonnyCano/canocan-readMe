// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('please enter a value for your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'purpose',
            message: 'What is the purpose of your project?',
            default: 'A webite'
        },
        {
            type: 'checkbox',
            name: 'languagesBuiltWith',
            message: 'What languages were used to build this website?',
            choices: ['javascript', 'html', 'css', 'web api', 'node.js']
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser();
