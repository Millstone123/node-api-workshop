import fs from "node:fs/promises";

const packageJson = JSON.parse(
  await fs.readFile(new URL("../package.json", import.meta.url), "utf8")
);

console.log(`Health OK for ${packageJson.name}@${packageJson.version}`);
