// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation?"
    },
    {
        type: "input",
        name: "why",
        message: "Why did you build this project?"
    },
    {
        type: "input",
        name: "problem",
        message: "What problem does it solve?"
    },
    {
        type: "input",
        name: "learn",
        message: "What did you learn?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:"
    },
    // {
    //     type: "input",
    //     name: "screenshots",
    //     message: "Copy and paste screenshots seperated by a comma (example1.png, example2.jpeg, etc...):"
    // },
    // {
    //     type: "input",
    //     name: "collaboratorNum",
    //     message: "How many collaborrators helped on this project?"
    // },
    {
        type: "input",
        name: "collaborators",
        message: "List your collaborator names seperated by a comma:"
    },
    {
        type: "list",
        name: "license",
        message: "What licnese would you like for this project?",
        choices: ["MIT License", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense", "No License"]
    },
    {
        type: "input",
        name: "features",
        message: "List your project features here:"
    },
    {
        type: "input",
        name: "contribute",
        message: "How can developers contribute to your project?"
    },
];

async function init() {
    let answers = await inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    var parsedData = JSON.stringify(answers);
    console.log(par);
    writeToFile("README.md", parsedData);
    })
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), ))
}

// TODO: Create a function to initialize app
// Function call to initialize app
init();