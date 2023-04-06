import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const rootPath = process.cwd();
const packageJsonPath = path.join(rootPath, 'package.json');
const readmePath = fileURLToPath(new URL('../../README.md', import.meta.url));

const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
const readmeContent = await fs.readFile(readmePath, 'utf-8');

const generateTable = (title, dependencies) => {
  const packagesLines = [];
  for (const [packageName, packageVersion] of Object.entries(dependencies)) {
    const packageInfo = {
      name: packageName,
      version: packageVersion,
      url: `https://www.npmjs.com/package/${packageName}`,
      versionBadgeUrl: `https://img.shields.io/npm/v/${packageName}`,
    };

    packagesLines.push(
      `| [${packageInfo.name}](${packageInfo.url}) | [![npm](${packageInfo.versionBadgeUrl})](${packageInfo.url}) |`
    );
  }

  return `
| ${title} | Version |
|:--------|:--------|
${packagesLines.join('\n')}
`;
};

const dependenciesTable = generateTable(
  'dependencies',
  packageJson.dependencies
);
const devDependenciesTable = generateTable(
  'devDependencies',
  packageJson.devDependencies
);

const updatedReadmeContent = readmeContent
  .replace(
    /<!-- DEPENDENCIES_TABLE_START -->[\s\S]*?<!-- DEPENDENCIES_TABLE_END -->/,
    `<!-- DEPENDENCIES_TABLE_START -->\n${dependenciesTable.trim()}\n<!-- DEPENDENCIES_TABLE_END -->`
  )
  .replace(
    /<!-- DEVDEPENDENCIES_TABLE_START -->[\s\S]*?<!-- DEVDEPENDENCIES_TABLE_END -->/,
    `<!-- DEVDEPENDENCIES_TABLE_START -->\n${devDependenciesTable.trim()}\n<!-- DEVDEPENDENCIES_TABLE_END -->`
  );

await fs.writeFile(readmePath, updatedReadmeContent, 'utf-8');
