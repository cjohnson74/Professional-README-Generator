// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](#license)";
      break;
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](#license)";
      break;
    case "BSD 3-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](#license)";
      break;
    case "BSD 2-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](#license)";
      break;
    case "Eclipse Public License 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](#license)";
      break;
    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](#license)";
      break;
    case "GNU GPL v2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](#license)";
      break;
    case "GNU AGPL v3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](#license)";
      break;
    case "GNU LGPL v3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](#license)";
      break;
    case "GNU FDL v1.3":
      return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](#license)";
      break;
    case "IBM Public License Version 1.0":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](#license)";
      break;
    case "ISC License (ISC)":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](#license)";
      break;
    case "The MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)";
      break;
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](#license)";
      break;
    case "Attribution License (BY)":
      return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](#license)";
      break;
    case "Open Database License (ODbL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](#license)";
      break;
    case "Public Domain Dedication and License (PDDL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](#license)";
      break;
    case "The Perl License":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](#license)";
      break;
    case "The Artistic License 2.0":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](#license)";
      break;
    case "SIL Open Font License 1.1":
      return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](#license)";
      break;
    case "No License":
      return "";
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0 License":
      return "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD 3-Clause License":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSD 2-Clause License":
      return "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "Eclipse Public License 1.0":
      return "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU GPL v3":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "GNU GPL v2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GNU AGPL v3":
      return "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU LGPL v3":
      return "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "GNU FDL v1.3":
      return "https://www.gnu.org/licenses/fdl-1.3";
      break;
    case "IBM Public License Version 1.0":
      return "https://opensource.org/licenses/IPL-1.0";
      break;
    case "ISC License (ISC)":
      return "https://opensource.org/licenses/ISC";
      break;
    case "The MIT License":
      return "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Attribution License (BY)":
      return "https://opendatacommons.org/licenses/by/";
      break;
    case "Open Database License (ODbL)":
      return "https://opendatacommons.org/licenses/odbl/";
      break;
    case "Public Domain Dedication and License (PDDL)":
      return "https://opendatacommons.org/licenses/pddl/";
      break;
    case "The Perl License":
      return "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "The Artistic License 2.0":
      return "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "SIL Open Font License 1.1":
      return "https://opensource.org/licenses/OFL-1.1";
      break;
    case "No License":
      return "";
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  return `## License
  License Information: ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  - Motivation to make this project: ${data.motivation}
  - Why this project built: ${data.why}
  - The problem(s) this project solves: ${data.problem}
  - What I learned: ${data.learn}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Constributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  Send any questions to my Github or Email below. \n
  Github: https://github.com/${data.github} \n
  Email: ${data.email}`;
}

module.exports = generateMarkdown;
