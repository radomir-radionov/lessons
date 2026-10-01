import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
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

const outputPath = join(ROOT, "src", "data", "lessons-data.json");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JSON.stringify(data), "utf8");

console.log(
  `Built src/data/lessons-data.json (${Math.round(JSON.stringify(data).length / 1024)} KB)`,
);
