// this function compares the user input from the license type and returns the appropriate license badge. if the user selected "None" from the license, no badge is displayed.
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)`;
  } else if (license === "MIT") {
    return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Boost 1.0") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license === "ISC") {
    return `![License](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } return '';
};

// this function compares the user input from the license type. if any license is selcted, the table of contents line renders. if "None" license is selected, this table of contents line is left off.
function renderLicenseLink(license) {
  if (license !== "None") {
    return `6. [License](#license)`;
  } return '';
}

// this function compares the user input from the license type. if any license is selcted, the license section renders. if "None" license is selected, this section is left off.
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This project is licensed under the ${license} license.`;
  } return '';
}

// this function renders all the data into a framework fo the markdown file. 
function generateMarkdown(data) {
  const githubLink = `https://github.com/${data.username}`;
  return `# ${data.projectname}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
To install the necessary dependencies, run the following command:
    
    ${data.cmddependencies}

## Usage
${data.userepo}

## Contributing
${data.contribute}

## Tests
To run tests, run the following command:
    
    ${data.cmdtests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](${githubLink}).

${renderLicenseSection(data.license)}
`;
};

// this exports the generateMarkdown function to the init function. 
module.exports = generateMarkdown;
