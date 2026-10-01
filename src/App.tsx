import { useEffect, useMemo, useState } from "react";
import lessonsData from "./data/lessons-data.json";
import { FILE_TABS, LESSONS } from "./data/lessons";
import { FileTabs } from "./components/FileTabs";
import { MarkdownContent } from "./components/MarkdownContent";
import { Sidebar } from "./components/Sidebar";
import type { Lesson, LessonFile, LessonsData } from "./types";

const data = lessonsData as LessonsData;

function getInitialState(): { lesson: Lesson; file: LessonFile } {
  const params = new URLSearchParams(window.location.search);
  const lessonId = Number(params.get("lesson"));
  const file = params.get("file") as LessonFile | null;
  const lesson = LESSONS.find((item) => item.id === lessonId) ?? LESSONS[0];
  const validFile = FILE_TABS.some((tab) => tab.file === file)
    ? file!
    : "lesson.md";

  return { lesson, file: validFile };
}

export default function App() {
  const initial = useMemo(() => getInitialState(), []);
  const [lesson, setLesson] = useState<Lesson>(initial.lesson);
  const [file, setFile] = useState<LessonFile>(initial.file);

  const markdown = data[lesson.folder]?.[file];

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("lesson", String(lesson.id));
    params.set("file", file);
    const pathname = window.location.pathname.split("?")[0];
    window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
    document.title = `Урок ${lesson.id} — ${lesson.title}`;
  }, [lesson, file]);

  function selectLesson(nextLesson: Lesson, nextFile: LessonFile = file) {
    setLesson(nextLesson);
    setFile(nextFile);
  }

  return (
    <div className="app">
      <Sidebar
        lessons={LESSONS}
        activeLessonId={lesson.id}
        onSelect={(nextLesson) => selectLesson(nextLesson)}
      />

      <main className="content">
        <header className="content__header">
          <h2 className="content__title">
            Урок {lesson.id}: {lesson.title}
          </h2>
          <FileTabs
            tabs={FILE_TABS}
            activeFile={file}
            onSelect={(nextFile) => selectLesson(lesson, nextFile)}
          />
        </header>

        {markdown ? (
          <MarkdownContent
            markdown={markdown}
            file={file}
            onFileLinkClick={(nextFile) => selectLesson(lesson, nextFile)}
          />
        ) : (
          <article className="markdown">
            <p className="error">Файл не найден: {file}</p>
          </article>
        )}
      </main>
    </div>
  );
}
