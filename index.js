// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { log } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        // name: 'projectname',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        // name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['APACHE 2.0', 'MIT', 'BSD 3', 'Mozilla 2.0', 'None'],
        // name: 'license',
    },
    {
        type: 'input',
        message: 'what command should be run to install dependencies?',
        default: 'npm i',
        // name: 'cmddependencies',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        // name: 'cmdtests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        // name: 'userepo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        // name: 'contribute',
    },

];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { 
    inquirer
  .prompt(questions)
  .then((answers) => {
    const markdown = generateMarkdown(answers);
    fs.writeFile('README.md', markdown, function (error) {
        if (error) {
        console.log(error);
        } else {
        console.log('Generating README...');
        }
    })
    });
}

// Function call to initialize app
init();
