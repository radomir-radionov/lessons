import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { stripHomeworkExampleStructure } from "../lib/homeworkMarkdown";
import type { LessonFile } from "../types";
import { CodeBlock } from "./CodeBlock";

type MarkdownContentProps = {
  markdown: string;
  file: LessonFile;
  onFileLinkClick: (file: LessonFile) => void;
};

const KNOWN_FILES: LessonFile[] = [
  "lesson.md",
  "lesson-plan.md",
  "tasks.md",
  "homework.md",
];

function isLessonFile(value: string): value is LessonFile {
  return KNOWN_FILES.includes(value as LessonFile);
}

export function MarkdownContent({
  markdown,
  file,
  onFileLinkClick,
}: MarkdownContentProps) {
  const content =
    file === "homework.md"
      ? stripHomeworkExampleStructure(markdown)
      : markdown;
  const components: Components = {
    a: ({ href, children }) => {
      if (!href || href.startsWith("http") || href.startsWith("#")) {
        return <a href={href}>{children}</a>;
      }

      const fileName = href.split("#")[0];
      if (isLessonFile(fileName)) {
        return (
          <button
            type="button"
            className="markdown-link"
            onClick={() => onFileLinkClick(fileName)}
          >
            {children}
          </button>
        );
      }

      return <a href={href}>{children}</a>;
    },
    code: ({ className, children }) => {
      const match = /language-(\w+)/.exec(className ?? "");
      const code = String(children).replace(/\n$/, "");

      if (match) {
        return <CodeBlock code={code} language={match[1]} />;
      }

      return <code className="inline-code">{children}</code>;
    },
    pre: ({ children }) => <>{children}</>,
  };

  return (
    <article className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
