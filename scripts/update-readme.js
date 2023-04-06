import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const readmePath = path.join(__dirname, '..', 'README.md');

(async () => {
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
  const readmeContent = await fs.readFile(readmePath, 'utf-8');

  const packagesTableRegex =
    /\| Package \| Description \| Version \|\r?\n\|:--------\|:------------\|:------------\|\r?\n(\| \[.*?\]\(.*?\) \| .*? \| \[!\[npm\]\(.*?\)]\(.*?\) \|\r?\n)+/;

  const packagesLines = [];
  for (const [packageName, packageVersion] of Object.entries(
    packageJson.dependencies
  )) {
    const packageInfo = {
      name: packageName,
      version: packageVersion,
      url: `https://www.npmjs.com/package/${packageName}`,
      versionBadgeUrl: `https://img.shields.io/npm/v/${packageName}`,
    };

    packagesLines.push(
      `| [${packageInfo.name}](${packageInfo.url}) | The package description | [![npm](${packageInfo.versionBadgeUrl})](${packageInfo.url}) |`
    );
  }

  const newPackagesTable = `
| Package | Description | Version |
|:--------|:------------|:------------|
${packagesLines.join('\n')}
`;

  const updatedReadmeContent = readmeContent.replace(
    packagesTableRegex,
    newPackagesTable.trim()
  );

  await fs.writeFile(readmePath, updatedReadmeContent, 'utf-8');
})();
