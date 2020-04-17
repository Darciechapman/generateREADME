var inquirer = require("inquirer");
var fs = require('fs').promises;

inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "username:"
        },
        {
            type: "input",
            name: "repoName",
            message: "Name of project repo:"
        },
        {
            type: "input",
            name: "readmeName",
            message: "Project title:"
        },
        {
            type: "input",
            name: "description",
            message: "Project description:"
        },
        {
            type: "input",
            name: "installStepNo",
            message: "How many steps are there for installation?"
        },
        {
            type: "input",
            name: "usage",
            message: "Examples of usage:"
        },
        {
            type: "input",
            name: "credit",
            message: "contributors:"
        },
        {
            type: "input",
            name: "creditLink",
            message: "Link to their github or website:"
        },
        {
            type: "input",
            name: "license",
            message: "License used:"
        },
    ])
    .then(({username, repoName, readmeName, description, installation, usage, credit, creditLink, license}) => {
        const readmeMD = `
username: ${username}
repo name: ${repoName}
## ${readmeName}

## Description

${description}

## Installation Steps

${installation}

## Usage

${usage}

## Contribution

${credit} (${creditLink})

## Lincese

${license}

## Badge

![badmath](https://img.shields.io/github/repo-size/${username}/${repoName})


        `;

        return fs.writeFile('readme.md', readmeMD);
    })
    .then(() => {
        console.log("file written")
    })
    .catch(error => {
        if(error.isTyError) {

        } else {
            console.error(error)
        }
    });