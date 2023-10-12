// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](LICENSE)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](LICENSE)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license. See the [${license}](LICENSE) file for more details.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.projectname}

## Description
${data.description}

${licenseBadge}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [How to Contribute](#howtocontribute)
5. [Tests](#tests)
6. [Questions](#questions)  

## Installation
To install the necessary dependecies, run the following command:
${data.cmddependecies}

## Usage
${data.userepo}

## License
${licenseSection}
For the full license text, please see [${licenseLink}](LICENSE).

## How to Contribute
${data.contribute}

## Tests
To run tests, run the following command:
${data.cmdtests}

## Questions
if you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
