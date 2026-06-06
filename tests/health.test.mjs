import assert from "node:assert/strict";
import fs from "node:fs/promises";

const packageJson = JSON.parse(
  await fs.readFile(new URL("../package.json", import.meta.url), "utf8")
);

assert.equal(packageJson.private, true);
assert.equal(packageJson.type, "module");

console.log("health.test.mjs passed");
