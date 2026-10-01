import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const LESSON_FOLDERS = Array.from({ length: 16 }, (_, i) => `lessons-${i + 1}`);
const FILES = ["lesson.md", "lesson-plan.md", "tasks.md", "homework.md"];

const data = {};

for (const folder of LESSON_FOLDERS) {
  data[folder] = {};

  for (const file of FILES) {
    const path = join(ROOT, "resources", folder, file);

    try {
      data[folder][file] = readFileSync(path, "utf8");
    } catch {
      // optional file
    }
  }
}

const output = `window.LESSONS_DATA = ${JSON.stringify(data)};\n`;
writeFileSync(join(ROOT, "js", "lessons-data.js"), output, "utf8");

console.log(`Built js/lessons-data.js (${Math.round(output.length / 1024)} KB)`);
