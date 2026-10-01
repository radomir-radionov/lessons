const EXAMPLE_STRUCTURE_HEADING = /^## Пример структуры/;

/** Hide «Пример структуры» in the browser; source homework.md files stay unchanged. */
export function stripHomeworkExampleStructure(markdown: string): string {
  const lines = markdown.split("\n");
  const result: string[] = [];
  let skipping = false;

  for (const line of lines) {
    if (EXAMPLE_STRUCTURE_HEADING.test(line)) {
      skipping = true;

      if (
        result.length >= 2 &&
        result[result.length - 1] === "" &&
        result[result.length - 2] === "---"
      ) {
        result.pop();
        result.pop();
      }

      continue;
    }

    if (skipping) {
      if (/^## /.test(line)) {
        skipping = false;
        result.push(line);
      }
      continue;
    }

    result.push(line);
  }

  return result.join("\n").replace(/\n{3,}/g, "\n\n");
}
