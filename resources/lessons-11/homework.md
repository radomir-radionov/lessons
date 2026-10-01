# Домашнее задание — Урок 11

**Задание:** «Миграция на Sass»  
**Время:** ~40–50 минут  
**Папка:** возьми CSS-проект с предыдущих уроков (лендинг, адаптивная страница) или создай `sass-migration/`

---

## Описание

Перенеси существующий CSS-проект на Sass: разбей стили на **partials** (частичные файлы), вынеси цвета и шрифты в переменные, настрой сборку через Parcel.

---

## Требования

### 1. Структура файлов

```
sass-migration/
├── index.html
├── package.json
├── styles/
│   ├── main.scss        ← главный файл (импорты)
│   ├── _variables.scss  ← переменные
│   ├── _base.scss       ← базовые стили (body, reset)
│   ├── _header.scss     ← стили шапки
│   └── _cards.scss      ← стили карточек (или другой блок)
├── .gitignore
└── node_modules/
```

### 2. Переменные (`_variables.scss`)

Минимум 5 переменных:

```scss
$primary-color: #...;
$secondary-color: #...;
$text-color: #...;
$bg-color: #...;
$font-family: ...;
$container-max-width: 1200px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
```

### 3. Partials и импорты

- Файлы partials начинаются с `_` (подчёркивание)
- В `main.scss` — только `@import` (или `@use`):
  ```scss
  @import 'variables';
  @import 'base';
  @import 'header';
  @import 'cards';
  ```
- В `index.html` подключай `styles/main.scss`

### 4. Вложенность

- В `_header.scss` — вложенные селекторы для элементов шапки
- Хотя бы один `&:hover` или `&__element` (БЭМ)

### 5. Media queries

- Перенеси media queries из CSS в соответствующие partials
- Используй переменные брейкпоинтов:
  ```scss
  @media (min-width: $breakpoint-tablet) { ... }
  ```

### 6. Сборка

- `npm start` — dev-сервер
- `npm run build` — продакшен в `dist/`
- `.gitignore`: `node_modules/`, `dist/`, `.parcel-cache/`

---

## Пример `main.scss`

```scss
@import 'variables';
@import 'base';
@import 'header';
@import 'cards';
```

## Пример `_variables.scss`

```scss
$primary-color: #2563eb;
$text-color: #1f2937;
$font-family: 'Segoe UI', sans-serif;
$container-max-width: 1200px;
$breakpoint-tablet: 768px;
```

## Пример `_header.scss`

```scss
.header {
  background-color: $primary-color;
  padding: 16px;

  &__inner {
    max-width: $container-max-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    color: white;
    font-weight: bold;
  }
}
```

---

## Критерии оценки

| Критерий | Балл |
| -------- | ---- |
| Минимум 4 partial-файла + `main.scss` | обязательно |
| 5+ переменных в `_variables.scss` | обязательно |
| Переменные используются в стилях | обязательно |
| Вложенность хотя бы в одном partial | обязательно |
| `npm start` работает | обязательно |
| `npm run build` создаёт `dist/` | обязательно |
| Визуально страница не изменилась (тот же дизайн) | обязательно |

---

## Бонус (по желанию)

1. **Файл `_mixins.scss`** — создай миксин `@mixin flex-center` (изучи самостоятельно)
2. **Тёмная тема** — добавь переменные `$dark-bg`, `$dark-text` и второй набор стилей
3. **Скрипт `clean`** — `"clean": "rm -rf dist .parcel-cache"` для очистки

---

## Как сдать

1. Убедись, что `npm start` и `npm run build` работают
2. Не коммить `node_modules/` и `dist/`
3. Отправь папку проекта (без `node_modules`) или покажи на занятии

---

## Частые ошибки — проверь себя

- [ ] Partials начинаются с `_`: `_variables.scss`, не `variables.scss`
- [ ] В `@import` не указывай `_` и расширение: `@import 'variables'`
- [ ] Переменные с `$`: `$primary-color`, не `primary-color`
- [ ] `main.scss` в папке `styles/`, путь в HTML: `styles/main.scss`
- [ ] `.gitignore` содержит `node_modules/`
- [ ] Старый `style.css` удалён или не подключён (чтобы не путаться)
