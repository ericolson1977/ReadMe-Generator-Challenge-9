// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    const licenseSlug = license.replace(/ /g, '_');
    return `![License](https://img.shields.io/badge/License-${licenseSlug}-blue)`;
  }return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `${license}`;
  }  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
function renderLicenseSection(license) {
  if (license !== "none") {
    return `${license}`;
  }  return '';
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const licenseBadge = renderLicenseBadge(data.license);
  // const licenseLink = renderLicenseLink(data.license);
  // const licenseSection = renderLicenseSection(data.license);

  const githubLink = `https://github.com/${data.username}`;

  return `# ${data.projectname}
${licenseBadge}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribute](#contribute)
5. [Tests](#tests)
6. [Questions](#questions)  

## Installation
To install the necessary dependencies, run the following command:
${data.cmddependencies}

## Usage
${data.userepo}

## License
This project is licensed under the ${licenseSection} license.

## Contribute
${data.contribute}

## Tests
To run tests, run the following command:
${data.cmdtests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](${githubLink}).
`;
}

module.exports = generateMarkdown;
