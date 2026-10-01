export type LessonFile =
  | "lesson.md"
  | "lesson-plan.md"
  | "tasks.md"
  | "homework.md";

export type Lesson = {
  id: number;
  folder: string;
  title: string;
};

export type FileTab = {
  file: LessonFile;
  label: string;
};

export type LessonsData = Record<string, Partial<Record<LessonFile, string>>>;
