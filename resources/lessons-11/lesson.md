# Урок 11 — Sass, npm и Parcel

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
[План занятия](lesson-plan.md) · [Задачи](tasks.md) · [Домашнее задание](homework.md)


**Полезные ссылки:** [Sass — Documentation](https://sass-lang.com/documentation/) · [npm — Docs](https://docs.npmjs.com/) · [Parcel — Getting started](https://parceljs.org/getting-started/webapp/)

---

## Навигация

| § | Тема | На уроке |
| --- | --- | --- |
| [1](#1-введение-в-npm-и-nodejs) | npm и Node.js | ✅ 10 мин |
| [2](#2-введение-в-sass) | Sass | ✅ 10 мин |
| [3](#3-переменные-и-вложенность) | Переменные и вложенность | ✅ 7 мин |
| [4](#4-сборщик-parcel) | Сборщик Parcel | ✅ 5 мин |
| [5](#5-итог-урока) | Итог и ДЗ | ✅ 5 мин |

---

## 1. Введение в npm и Node.js

### Зачем фронтенд-разработчику Node.js

Когда проект растёт, появляются задачи: компилировать Sass, объединять файлы, оптимизировать код, устанавливать библиотеки. Для этого нужны **инструменты сборки** — они работают через **Node.js**.

### Node.js и npm

| Инструмент | Назначение |
| ---------- | ---------- |
| **Node.js** | Среда выполнения JavaScript вне браузера (в терминале) |
| **npm** | Менеджер пакетов: устанавливает библиотеки, управляет зависимостями |

Проверка установки:

```bash
node --version
# v20.x.x

npm --version
# 10.x.x
```

Устанавливается с [nodejs.org](https://nodejs.org/) (версия LTS).

### Инициализация проекта

```bash
mkdir my-project
cd my-project
npm init -y
```

Флаг `-y` — принять значения по умолчанию. Создаётся **`package.json`** — «паспорт» проекта.

### Структура package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  "devDependencies": {
    "parcel": "^2.x.x"
  }
}
```

| Поле | Назначение |
| ---- | ---------- |
| `name` | Имя проекта |
| `version` | Версия |
| `scripts` | Команды для `npm run` |
| `dependencies` | Пакеты для продакшена |
| `devDependencies` | Пакеты только для разработки (сборщики, линтеры) |

### Установка пакетов

```bash
npm install --save-dev parcel
```

После установки появляется **`node_modules/`** — все пакеты. Папку **не коммитят** в Git. Добавь в `.gitignore`: `node_modules/`, `dist/`, `.parcel-cache/`.

---

## 2. Введение в Sass

### Что такое CSS-препроцессор

**CSS-препроцессор** расширяет возможности CSS. Ты пишешь **Sass** (`.scss`), сборщик **компилирует** в обычный CSS.

### Зачем нужен Sass

| Возможность | CSS | Sass |
| ----------- | --- | ---- |
| Переменные | `var(--color)` | `$color: #2563eb;` |
| Вложенность | Каждый селектор отдельно | `.header { .logo { } }` |
| Импорты | `@import` (медленный) | `@import 'file'` (partials) |
| Функции | Ограниченные | `darken()`, `lighten()` и др. |

### Синтаксис SCSS

```scss
// Комментарий в Sass

$primary-color: #2563eb;

.button {
  background-color: $primary-color;
  padding: 12px 24px;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

### Подключение в HTML

```html
<link rel="stylesheet" href="styles.scss" />
```

Parcel автоматически компилирует Sass при запуске dev-сервера.

---

## 3. Переменные и вложенность

### Переменные

Объявляются через **`$`**:

```scss
$primary-color: #2563eb;
$text-color: #1f2937;
$font-family: 'Segoe UI', sans-serif;
$spacing: 16px;
$border-radius: 8px;
```

Использование:

```scss
body {
  color: $text-color;
  font-family: $font-family;
}

.card {
  padding: $spacing;
  border-radius: $border-radius;
  border: 1px solid lighten($text-color, 60%);
}
```

**Преимущество:** изменил цвет в одном месте — обновился везде.

### Вложенность селекторов

В CSS — каждый селектор отдельно. В Sass — вложенность:

```scss
.header {
  background-color: $primary-color;
  padding: 16px;

  &__logo {
    font-weight: bold;
  }

  &__nav {
    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
```

### Символ `&` (амперсанд)

**`&`** — ссылка на **родительский селектор**:

```scss
.btn {
  background: $primary-color;

  &:hover {
    background: darken($primary-color, 10%);
  }

  &--large {
    padding: 16px 32px;
  }

  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
```

Используется для псевдоклассов (`&:hover`), БЭМ-модификаторов (`&--active`) и составных селекторов (`&.is-open`).

### Partials (частичные файлы)

```
styles/
├── _variables.scss
├── _base.scss
├── _header.scss
├── _cards.scss
└── main.scss
```

- Файлы partials начинаются с **`_`**
- В `main.scss` — импорты:

```scss
@import 'variables';
@import 'base';
@import 'header';
@import 'cards';
```

> В `@import` не указывай `_` и расширение `.scss`.

---

## 4. Сборщик Parcel

**Parcel** — сборщик с нулевой конфигурацией: компилирует Sass → CSS, объединяет файлы, минифицирует и запускает dev-сервер.

### Установка и скрипты

```bash
npm install --save-dev parcel
```

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

### Запуск

```bash
npm start
# или
npx parcel index.html
```

Parcel откроет страницу (`http://localhost:1234`) и перекомпилирует при сохранении.

### Продакшен-сборка

```bash
npm run build
# или
npx parcel build index.html
```

Создаётся **`dist/`** с оптимизированными файлами для деплоя.

### Структура проекта

```
sass-project/
├── index.html
├── package.json
├── package-lock.json
├── styles.scss
├── .gitignore
├── node_modules/       ← не коммитить
├── dist/               ← не коммитить
└── .parcel-cache/      ← не коммитить
```

### Частые ошибки

| Проблема | Решение |
| -------- | ------- |
| `npm: command not found` | Установить Node.js с [nodejs.org](https://nodejs.org/) |
| Стили не применяются | Подключить `.scss` в HTML |
| `node_modules` в Git | Добавить в `.gitignore` |
| Ошибка в Sass | Проверить `$` у переменных, закрытые скобки |
| Parcel не запускается | `npx parcel index.html` из корня проекта |

---

## 5. Итог урока

### Что мы узнали

1. **Node.js и npm** — среда и менеджер пакетов для инструментов разработки
2. **package.json** — описание проекта и зависимостей
3. **Sass** — переменные (`$`) и вложенность селекторов
4. **Parcel** — сборщик: dev-сервер и продакшен-сборка
5. **Partials** — разбиение стилей на файлы через `@import`

### Вопросы для самопроверки

1. Что делает команда `npm init -y`?
2. Зачем нужен файл `package.json`?
3. Как объявить переменную в Sass?
4. Что означает `&` во вложенном селекторе?
5. Как запустить dev-сервер Parcel?
6. Что создаёт команда `npm run build`?
7. Почему `node_modules/` не коммитят в Git?

### Домашнее задание

Выполни задание **«Миграция на Sass»** → [homework.md](homework.md)

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| Node.js | Среда выполнения JavaScript вне браузера |
| npm | Менеджер пакетов для Node.js |
| package.json | Файл с метаданными и зависимостями проекта |
| node_modules | Папка с установленными пакетами |
| devDependencies | Зависимости только для разработки |
| Sass / SCSS | CSS-препроцессор, синтаксис похож на CSS |
| Препроцессор | Инструмент, обрабатывающий код до использования |
| Sass-переменная | `$name: value` — переиспользуемое значение |
| Вложенность / `&` | Дочерние селекторы внутри родителя; `&` — ссылка на родителя |
| Partial / `@import` | Частичный файл `_name.scss`, подключается в главный |
| Parcel | Сборщик проектов с нулевой конфигурацией |
| Dev-сервер / `dist/` | Локальный сервер для разработки / папка продакшен-сборки |
| `npx` | Запуск пакета без глобальной установки |
| package-lock.json | Фиксация точных версий зависимостей |
