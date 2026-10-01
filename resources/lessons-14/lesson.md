# Урок 14 — CSS-фреймворки

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**План занятия:** [lesson-plan.md](lesson-plan.md) · **Задачи:** [tasks.md](tasks.md) · **Домашнее задание:** [homework.md](homework.md)

> Это **справочник**, а не текст для чтения вслух. На уроке проходи только разделы из [плана](lesson-plan.md#тайминг-60-минут). Остальное — для практики и домашнего задания.

**Полезные ссылки:** [Bootstrap Docs](https://getbootstrap.com/docs/) · [Tailwind CSS Docs](https://tailwindcss.com/docs) · [Tailwind Play](https://play.tailwindcss.com/)

---

## Навигация

| §                                                      | Тема                 | На уроке  |
| ------------------------------------------------------ | -------------------- | --------- |
| [1](#1-введение-что-такое-css-фреймворки)              | Что такое фреймворки | ✅ 7 мин  |
| [2](#2-component-based-и-utility-first)                  | Подходы              | ✅ 8 мин  |
| [3](#3-bootstrap-основы)                               | Bootstrap            | ✅ 13 мин |
| [4](#4-tailwind-css-основы)                              | Tailwind             | ✅ 10 мин |
| [5](#5-итог-урока)                                     | Итог и ДЗ            | ✅ 5 мин  |

---

## 1. Введение: что такое CSS-фреймворки

**CSS-фреймворк** — готовый набор стилей, компонентов и утилит для быстрой вёрстки.

| Плюсы | Минусы |
| ----- | ------ |
| Скорость — готовые классы | Размер — лишний CSS при минимальном использовании |
| Единообразие дизайна | Зависимость от API фреймворка |
| Встроенная адаптивность | «Одинаковый» вид без кастомизации |
| Тысячи примеров в сети | Нужно учить систему классов |

> На уроке подключаем фреймворки через **CDN** — удобно для обучения. В продакшене часто используют сборку (npm + PostCSS).

### Ключевые понятия

| Термин | Определение |
| ------ | ----------- |
| **CSS-фреймворк** | Библиотека готовых CSS-стилей (и иногда JS-компонентов) |
| **CDN** | Подключение CSS/JS по ссылке в `<head>` без установки |
| **Design system** | Правила: цвета, отступы, типографика, компоненты |

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
```

---

## 2. Component-based и utility-first

### Component-based (Bootstrap)

Готовые **именованные компоненты**:

```html
<button class="btn btn-primary">Отправить</button>
<div class="card">
  <div class="card-body">Текст карточки</div>
</div>
```

HTML читается как «кнопка», «карточка». Удобно для админок и быстрых прототипов.

### Utility-first (Tailwind)

Много **мелких классов**, каждый — одно свойство:

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Отправить
</button>
```

Гибкий конструктор. HTML может стать длинным — удобно для кастомного дизайна.

### Сравнение

| Критерий | Bootstrap | Tailwind |
| -------- | --------- | -------- |
| Стиль классов | `.btn`, `.card`, `.row` | `.flex`, `.p-4`, `.text-center` |
| Кастомизация | Переопределение CSS / Sass | Конфиг `tailwind.config.js` |
| Размер CSS | Большой (можно урезать) | Маленький после purge |
| JS-компоненты | Встроены (модалки, табы) | Нет (нужны отдельные библиотеки) |
| Кривая обучения | Запомнить компоненты | Запомнить утилиты |

| Термин | Определение |
| ------ | ----------- |
| **Component-based** | Стилизация через готовые компоненты (`.navbar`, `.modal`) |
| **Utility-first** | Атомарные классы — один класс = одно правило |
| **Atomic CSS** | Концепция, на которой основан Tailwind |

---

## 3. Bootstrap: основы

[Bootstrap 5](https://getbootstrap.com/) — самый популярный component-based фреймворк. Без jQuery.

### Подключение через CDN

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <h1 class="text-center mt-5">Привет, Bootstrap!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

### Сетка (12 колонок)

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Колонка 1</div>
    <div class="col-md-4">Колонка 2</div>
    <div class="col-md-4">Колонка 3</div>
  </div>
</div>
```

| Класс | Назначение |
| ----- | ---------- |
| `.container` | Центрированный контейнер с отступами |
| `.container-fluid` | Контейнер на всю ширину |
| `.row` | Строка сетки |
| `.col-*` | Колонка (1–12) |
| `.col-md-6` | 6 из 12 колонок на экранах ≥768px |
| `.col-lg-4` | 4 колонки на экранах ≥992px |

### Брейкпоинты Bootstrap

| Префикс | Минимальная ширина |
| ------- | ------------------ |
| (нет) | < 576px |
| `sm` | ≥ 576px |
| `md` | ≥ 768px |
| `lg` | ≥ 992px |
| `xl` | ≥ 1200px |
| `xxl` | ≥ 1400px |

На мобильном без префикса колонки занимают 100% ширины.

### Утилиты и компоненты

```html
<p class="text-center text-muted">Центрированный серый текст</p>
<div class="d-flex justify-content-between align-items-center">Flex-ряд</div>
<button class="btn btn-primary">Кнопка</button>
<button class="btn btn-outline-secondary btn-sm">Маленькая</button>
```

**Карточка:**

```html
<div class="card" style="max-width: 300px;">
  <img src="photo.jpg" class="card-img-top" alt="Фото" />
  <div class="card-body">
    <h5 class="card-title">Заголовок</h5>
    <p class="card-text">Описание карточки.</p>
    <a href="#" class="btn btn-primary">Подробнее</a>
  </div>
</div>
```

---

## 4. Tailwind CSS: основы

[Tailwind CSS](https://tailwindcss.com/) — utility-first фреймворк.

### Подключение через CDN (для обучения)

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Demo</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-center mt-10 text-indigo-600">
      Привет, Tailwind!
    </h1>
  </body>
</html>
```

> CDN — для экспериментов. В продакшене Tailwind собирают через npm (purge неиспользуемых классов).

### Частые утилиты

| Категория | Примеры классов |
| --------- | --------------- |
| Отступы | `p-4`, `px-6`, `mt-8`, `mb-2` |
| Flexbox | `flex`, `items-center`, `justify-between`, `gap-4` |
| Grid | `grid`, `grid-cols-3`, `gap-6` |
| Типографика | `text-xl`, `font-bold`, `text-center`, `text-gray-600` |
| Цвета | `bg-blue-500`, `text-white`, `border-gray-300` |
| Размеры | `w-full`, `max-w-md`, `h-12` |
| Скругление / тени | `rounded-lg`, `shadow`, `shadow-lg` |

### Адаптивные префиксы

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">Карточка 1</div>
  <div class="bg-white p-6 rounded-lg shadow">Карточка 2</div>
  <div class="bg-white p-6 rounded-lg shadow">Карточка 3</div>
</div>
```

- Без префикса — мобильный
- `md:` — ≥ 768px
- `lg:` — ≥ 1024px

### Тот же блок: Bootstrap vs Tailwind

| Bootstrap | Tailwind |
| --------- | -------- |
| `container` → `row` → `col-md-4` | `max-w-6xl mx-auto` → `grid grid-cols-1 md:grid-cols-3` |
| `card` + `card-body` | `bg-white rounded-lg shadow p-6` |

### Когда что выбирать

| Ситуация | Рекомендация |
| -------- | ------------ |
| Быстрый прототип, админка | Bootstrap |
| Уникальный дизайн, React/Vue | Tailwind |
| Учёба «чистого» CSS | Свой CSS |
| Команда уже использует фреймворк | Тот же, что в проекте |

> **Не смешивай** Bootstrap и Tailwind на одной странице — конфликты стилей. Сравнивай на разных файлах или секциях.

Фреймворк — инструмент. **Понимание Flexbox, Grid и блочной модели** важнее запоминания всех классов.

---

## 5. Итог урока

### Что мы узнали

1. **CSS-фреймворки** ускоряют вёрстку готовыми стилями и сеткой
2. **Component-based** (Bootstrap) — классы-компоненты `.btn`, `.card`
3. **Utility-first** (Tailwind) — атомарные классы `.flex`, `.p-4`
4. Bootstrap Grid: `container` → `row` → `col-*`
5. Выбор фреймворка зависит от задачи, команды и дизайна

### Вопросы для самопроверки

1. В чём разница между component-based и utility-first?
2. Какая структура нужна для сетки Bootstrap?
3. Что означает класс `col-md-6`?
4. Как в Tailwind сделать 3 колонки только на больших экранах?
5. Почему не стоит смешивать Bootstrap и Tailwind на одной странице?

### Домашнее задание

Выполни задание **«Секция на Tailwind»** → [homework.md](homework.md)

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| CSS-фреймворк | Готовая библиотека стилей для быстрой вёрстки |
| CDN | Подключение файлов по ссылке из интернета |
| Component-based | Подход с готовыми компонентами (`.btn`, `.card`) |
| Utility-first | Подход с атомарными утилитарными классами |
| Bootstrap | Популярный component-based фреймворк |
| Tailwind CSS | Популярный utility-first фреймворк |
| Grid (Bootstrap) | 12-колоночная адаптивная сетка |
| Брейкпоинт | Ширина экрана смены раскладки |
| container / row / col | Три уровня сетки Bootstrap |
| Адаптивный префикс | `md:`, `lg:` в Tailwind для разных экранов |
| Purge | Удаление неиспользуемых классов при сборке Tailwind |
| Atomic CSS | Один класс — одно CSS-правило |
| Design system | Система правил дизайна проекта |
