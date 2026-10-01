import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language: string;
};

const LANGUAGE_LABELS: Record<string, string> = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  js: "JavaScript",
  typescript: "TypeScript",
  ts: "TypeScript",
  bash: "Bash",
  shell: "Shell",
  json: "JSON",
  markdown: "Markdown",
  md: "Markdown",
};

function getLanguageLabel(language: string): string {
  return LANGUAGE_LABELS[language.toLowerCase()] ?? language.toUpperCase();
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const label = getLanguageLabel(language);

  return (
    <div className="code-block">
      <div className="code-block__header">
        <div className="code-block__dots" aria-hidden="true">
          <span className="code-block__dot code-block__dot--red" />
          <span className="code-block__dot code-block__dot--yellow" />
          <span className="code-block__dot code-block__dot--green" />
        </div>
        <span className="code-block__lang">{label}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem 1.25rem",
          background: "#1e1e1e",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          borderRadius: 0,
        }}
        codeTagProps={{
          style: {
            fontFamily: '"JetBrains Mono", "Fira Code", Consolas, monospace',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
