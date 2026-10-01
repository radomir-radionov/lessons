import type { FileTab, Lesson } from "../types";

export const LESSONS: Lesson[] = [
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

export const FILE_TABS: FileTab[] = [
  { file: "lesson.md", label: "Урок" },
  { file: "lesson-plan.md", label: "План" },
  { file: "tasks.md", label: "Задачи" },
  { file: "homework.md", label: "ДЗ" },
];
