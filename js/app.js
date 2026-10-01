const LESSONS = [
  { id: 1, folder: "lessons-1", title: "Знакомство с HTML" },
  { id: 2, folder: "lessons-2", title: "Знакомство с CSS" },
  { id: 3, folder: "lessons-3", title: "Практика HTML & CSS" },
  { id: 4, folder: "lessons-4", title: "Введение в Git" },
  { id: 5, folder: "lessons-5", title: "Модель Flexbox" },
  { id: 6, folder: "lessons-6", title: "Состояния и позиционирование" },
  { id: 7, folder: "lessons-7", title: "Продвинутая работа с CSS" },
  { id: 8, folder: "lessons-8", title: "Работа с формами" },
  { id: 9, folder: "lessons-9", title: "Адаптивная и резиновая вёрстка" },
  { id: 10, folder: "lessons-10", title: "Mobile-first вёрстка" },
  { id: 11, folder: "lessons-11", title: "Sass, npm и Parcel" },
  { id: 12, folder: "lessons-12", title: "CSS Grid Layout" },
  { id: 13, folder: "lessons-13", title: "Анимация элементов" },
  { id: 14, folder: "lessons-14", title: "CSS-фреймворки" },
  { id: 15, folder: "lessons-15", title: "Финальный проект (часть 1)" },
  { id: 16, folder: "lessons-16", title: "Финальный проект (часть 2)" },
];

const FILES = [
  { file: "lesson.md", label: "Урок" },
  { file: "lesson-plan.md", label: "План" },
  { file: "tasks.md", label: "Задачи" },
  { file: "homework.md", label: "ДЗ" },
];

const lessonNav = document.getElementById("lesson-nav");
const fileTabs = document.getElementById("file-tabs");
const lessonTitle = document.getElementById("lesson-title");
const markdownContent = document.getElementById("markdown-content");

let currentLesson = null;
let currentFile = "lesson.md";

marked.setOptions({
  gfm: true,
  breaks: false,
});

function getLessonFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const lessonId = Number(params.get("lesson"));
  const file = params.get("file") || "lesson.md";
  const lesson = LESSONS.find((item) => item.id === lessonId) || LESSONS[0];
  const validFile = FILES.some((item) => item.file === file) ? file : "lesson.md";
  return { lesson, file: validFile };
}

function updateUrl(lesson, file) {
  const params = new URLSearchParams();
  params.set("lesson", String(lesson.id));
  params.set("file", file);
  const pathname = window.location.pathname.split("?")[0];
  window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
}

function renderLessonNav() {
  lessonNav.innerHTML = LESSONS.map((lesson) => {
    const isActive = currentLesson?.id === lesson.id;
    return `
      <button
        type="button"
        class="lesson-link${isActive ? " lesson-link--active" : ""}"
        data-lesson-id="${lesson.id}"
      >
        <span class="lesson-link__num">Урок ${lesson.id}</span>
        ${lesson.title}
      </button>
    `;
  }).join("");

  lessonNav.querySelectorAll(".lesson-link").forEach((button) => {
    button.addEventListener("click", () => {
      const lesson = LESSONS.find(
        (item) => item.id === Number(button.dataset.lessonId),
      );
      if (lesson) {
        selectLesson(lesson, currentFile);
      }
    });
  });
}

function renderFileTabs() {
  if (!currentLesson) {
    fileTabs.innerHTML = "";
    return;
  }

  fileTabs.innerHTML = FILES.map((item) => {
    const isActive = currentFile === item.file;
    return `
      <button
        type="button"
        class="tab${isActive ? " tab--active" : ""}"
        data-file="${item.file}"
      >
        ${item.label}
      </button>
    `;
  }).join("");

  fileTabs.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      selectLesson(currentLesson, button.dataset.file);
    });
  });
}

function loadMarkdown(lesson, file) {
  const markdown = window.LESSONS_DATA?.[lesson.folder]?.[file];

  if (!markdown) {
    markdownContent.innerHTML = `
      <p class="error">Файл не найден: ${file}</p>
      <p class="error">Запустите <code>node scripts/build.mjs</code> и обновите страницу.</p>
    `;
    return;
  }

  markdownContent.innerHTML = marked.parse(markdown);
  bindInternalLinks(lesson);
}

function bindInternalLinks(lesson) {
  markdownContent.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#")) {
      return;
    }

    const fileName = href.split("#")[0];
    const knownFile = FILES.find((item) => item.file === fileName);
    if (knownFile) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        selectLesson(lesson, knownFile.file);
      });
    }
  });
}

function selectLesson(lesson, file) {
  currentLesson = lesson;
  currentFile = file;
  lessonTitle.textContent = `Урок ${lesson.id}: ${lesson.title}`;
  document.title = `Урок ${lesson.id} — ${lesson.title}`;
  updateUrl(lesson, file);
  renderLessonNav();
  renderFileTabs();
  loadMarkdown(lesson, file);
}

function init() {
  if (!window.LESSONS_DATA) {
    markdownContent.innerHTML = `
      <p class="error">Данные уроков не загружены.</p>
      <p class="error">Запустите <code>node scripts/build.mjs</code> перед открытием сайта.</p>
    `;
    return;
  }

  const { lesson, file } = getLessonFromUrl();
  selectLesson(lesson, file);
}

init();
