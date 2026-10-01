import type { Lesson } from "../types";

type SidebarProps = {
  lessons: Lesson[];
  activeLessonId: number;
  onSelect: (lesson: Lesson) => void;
};

export function Sidebar({ lessons, activeLessonId, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <h1 className="sidebar__title">Уроки</h1>
        <p className="sidebar__subtitle">HTML, CSS, Git</p>
      </header>
      <nav className="sidebar__nav" aria-label="Список уроков">
        {lessons.map((lesson) => {
          const isActive = lesson.id === activeLessonId;
          return (
            <button
              key={lesson.id}
              type="button"
              className={`lesson-link${isActive ? " lesson-link--active" : ""}`}
              onClick={() => onSelect(lesson)}
            >
              <span className="lesson-link__num">Урок {lesson.id}</span>
              {lesson.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
