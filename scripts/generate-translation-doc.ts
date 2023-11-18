// Importing necessary libraries and modules
import fs from "fs";
import { locales } from "../src/translations";
import { languageNames } from "./languageNames";

const TARGET_FILE = "./docs/translations.md";

/**
 * Generates the markdown for a locale.
 *
 * @param {string} locale Locale code.
 * @returns {string} Locale markdown string.
 */
function generateTranslationsMarkdown(locale: string): string {
  // Returns the markdown string for a specific locale
  return `${locale}`;
}

/**
 * Generates the content for the README file with available locales and progress.
 *
 * @returns {string} README content string.
 */
function generateReadme(): string {
  const availableLocales = Object.keys(locales);

  // Generate table rows with locale details
  let localesListTable = "";
  for (let i = 0; i < availableLocales.length; i += 1) {
    const localesSlice = availableLocales.slice(i, i + 1);
    const row = localesSlice.map(locale => generateTranslationsMarkdown(locale)).join("");
    localesListTable += `  <tr>
    <td><p align="center"><code>${row}</code></p></td>
    <td><p align="left">${languageNames[row]}</p></td>
    <td><p align="center">${Object.keys(locales[row]).length / 16 * 100}%</p></td>
  </tr>`;
  }

  // Final README content with locales and progress
  const readmeContent = `<!-- DO NOT EDIT THIS FILE DIRECTLY -->
## Available Locales
Use \`?locale=LOCALE_CODE\` parameter like so :-

\`\`\`markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&locale=id)
\`\`\`

## Locales List

<table>
  <tr>
    <td><p align="center"><b>Code</b></p></td>
    <td><p align="center"><b>Locale</b></p></td>
    <td><p align="center"><b>Progress</b></p></td>
  </tr>
  ${localesListTable}
</table>

Want to add new translations? Consider reading the [contribution guidelines](https://github.com/FajarKim/github-readme-profile/blob/master/CONTRIBUTING.md#%EF%B8%8F-translations-contribution) :D
`;

  return readmeContent;
}

// Generate the README content
const generatedReadme = generateReadme();

// Write the README content to the specified file
fs.writeFileSync(TARGET_FILE, generatedReadme);
