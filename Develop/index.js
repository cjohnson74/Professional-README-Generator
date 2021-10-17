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
        type: "list",
        name: "license",
        message: "What licnese would you like for this project?",
        choices: ["Apache 2.0 License", 
                    "Boost Software License 1.0", 
                    "BSD 3-Clause License", 
                    "BSD 2-Clause License", 
                    "Eclipse Public License 1.0", 
                    "GNU GPL v3", "GNU GPL v2",
                    "GNU AGPL v3",
                    "GNU LGPL v3",
                    "GNU FDL v1.3",
                    "IBM Public License Version 1.0",
                    "ISC License (ISC)",
                    "The MIT License",
                    "Mozilla Public License 2.0",
                    "Attribution License (BY)",
                    "Open Database License (ODbL)",
                    "Public Domain Dedication and License (PDDL)",
                    "The Perl License",
                    "The Artistic License 2.0",
                    "SIL Open Font License 1.1",
                    "No License"]
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run your tests: "
    },
    {
        type: "input",
        name: "contribute",
        message: "How can developers contribute to your project?"
    }
];

async function init() {
    let answers = await inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        // var parsedData = JSON.stringify(answers);
        // console.log(par);
        var data = generateMarkdown(answers);
        JSON.stringify(data)
        writeToFile("README.md", data);
    })
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
// Function call to initialize app
init();