import type { FileTab, LessonFile } from "../types";

type FileTabsProps = {
  tabs: FileTab[];
  activeFile: LessonFile;
  onSelect: (file: LessonFile) => void;
};

export function FileTabs({ tabs, activeFile, onSelect }: FileTabsProps) {
  return (
    <nav className="tabs" aria-label="Материалы урока">
      {tabs.map((tab) => {
        const isActive = tab.file === activeFile;
        return (
          <button
            key={tab.file}
            type="button"
            className={`tab${isActive ? " tab--active" : ""}`}
            onClick={() => onSelect(tab.file)}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
