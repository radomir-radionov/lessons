# Урок 14 — CSS-фреймворки

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**План занятия:** [lesson-plan.md](lesson-plan.md)  
**Задачи на уроке:** [tasks.md](tasks.md)  
**Домашнее задание:** [homework.md](homework.md)

---

## 1. Введение: что такое CSS-фреймворки

До сих пор мы писали CSS вручную: каждый отступ, цвет и сетка — своими правилами. Это даёт полный контроль, но на больших проектах одни и те же паттерны (кнопки, сетки, карточки) приходится писать снова и снова.

**CSS-фреймворк** — готовый набор стилей, компонентов и утилит, который ускоряет вёрстку.

### Зачем нужны фреймворки

- **Скорость** — готовые классы вместо написания CSS с нуля
- **Единообразие** — все кнопки и отступы выглядят согласованно
- **Адаптивность** — встроенная сетка и брейкпоинты
- **Документация** — тысячи примеров в интернете

### Минусы

- **Размер** — лишний CSS, если используешь 5% возможностей
- **Зависимость** — привязка к API фреймворка
- **Одинаковость** — «bootstrap-вид» сайтов без кастомизации
- **Обучение** — нужно знать систему классов

> На этом уроке мы подключаем фреймворки через **CDN** — для обучения это удобно. В реальных проектах часто используют сборку (npm + PostCSS), но принципы те же.

---

### Определения и понятия

#### CSS-фреймворк

**CSS-фреймворк** — библиотека готовых CSS-стилей и (иногда) JavaScript-компонентов для быстрой вёрстки интерфейсов.

#### CDN (Content Delivery Network)

**CDN** — сеть серверов, с которой можно подключить CSS/JS по ссылке в `<head>`, без установки на компьютер.

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
```

#### Design system

**Design system (система дизайна)** — набор правил: цвета, отступы, типографика, компоненты. Фреймворки часто включают встроенную design system.

---

## 2. Component-based и utility-first

Два главных подхода в современных CSS-фреймворках:

### Component-based (компонентный)

Готовые **именованные компоненты** с семантичными классами:

```html
<button class="btn btn-primary">Отправить</button>
<div class="card">
  <div class="card-body">Текст карточки</div>
</div>
```

**Представитель:** Bootstrap

- HTML читается как «кнопка», «карточка»
- Меньше классов на элемент, но нужно знать API компонентов
- Удобно для админок, быстрых прототипов, классических сайтов

### Utility-first (утилитарный)

Много **мелких классов**, каждый делает одну вещь:

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Отправить
</button>
```

**Представитель:** Tailwind CSS

- Гибкость: комбинируешь классы как конструктор
- HTML может стать длинным
- Удобно для кастомного дизайна и современных SPA

### Сравнение

| Критерий | Bootstrap (component) | Tailwind (utility) |
| -------- | --------------------- | ------------------ |
| Стиль классов | `.btn`, `.card`, `.row` | `.flex`, `.p-4`, `.text-center` |
| Кастомизация | Переопределение CSS или Sass | Конфиг `tailwind.config.js` |
| Размер CSS | Большой файл (можно урезать) | Маленький после purge в продакшене |
| Кривая обучения | Запомнить компоненты | Запомнить утилиты |
| JS-компоненты | Встроены (модалки, табы) | Нет (нужен Headless UI и т.д.) |

---

### Определения и понятия

#### Component-based подход

**Component-based подход** — стилизация через готовые компоненты с фиксированными именами классов (`.navbar`, `.modal`).

#### Utility-first подход

**Utility-first подход** — стилизация через набор атомарных утилитарных классов, каждый из которых задаёт одно CSS-свойство.

#### Atomic CSS

**Atomic CSS** — концепция, на которой основан Tailwind: один класс = одно правило CSS.

---

## 3. Bootstrap: основы

[Bootstrap](https://getbootstrap.com/) — самый популярный CSS-фреймворк. Версия 5 — без jQuery.

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

### Сетка (Grid)

Bootstrap использует 12-колоночную сетку:

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
| `.col-md-6` | 6 колонок из 12 на экранах ≥768px |
| `.col-lg-4` | 4 колонки на экранах ≥992px |

На мобильном без префикса колонки по умолчанию занимают 100% ширины (`col-12`).

### Брейкпоинты Bootstrap

| Префикс | Минимальная ширина |
| ------- | ------------------ |
| (нет) | < 576px |
| `sm` | ≥ 576px |
| `md` | ≥ 768px |
| `lg` | ≥ 992px |
| `xl` | ≥ 1200px |
| `xxl` | ≥ 1400px |

### Полезные утилиты Bootstrap

```html
<p class="text-center text-muted">Центрированный серый текст</p>
<div class="d-flex justify-content-between align-items-center">Flex-ряд</div>
<button class="btn btn-primary">Кнопка</button>
<button class="btn btn-outline-secondary btn-sm">Маленькая</button>
```

### Карточка (card)

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

### Определения и понятия

#### Bootstrap Grid

**Bootstrap Grid** — 12-колоночная адаптивная сетка на Flexbox. Структура: `container` → `row` → `col-*`.

#### Брейкпоинт (breakpoint)

**Брейкпоинт** — ширина экрана, при которой меняется раскладка. В Bootstrap задаётся префиксами (`md`, `lg`).

#### btn (Bootstrap)

**`.btn`** — базовый класс кнопки в Bootstrap. Модификаторы: `.btn-primary`, `.btn-danger`, `.btn-outline-*`.

---

## 4. Tailwind CSS: основы

[Tailwind CSS](https://tailwindcss.com/) — utility-first фреймворк. Для обучения удобен **Tailwind Play** (онлайн-редактор) или CDN.

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

> CDN-версия подходит для экспериментов. В продакшене Tailwind собирают через npm, чтобы включить только используемые классы.

### Частые утилиты

| Категория | Примеры классов |
| --------- | --------------- |
| Отступы | `p-4`, `px-6`, `mt-8`, `mb-2` |
| Flexbox | `flex`, `items-center`, `justify-between`, `gap-4` |
| Grid | `grid`, `grid-cols-3`, `gap-6` |
| Типографика | `text-xl`, `font-bold`, `text-center`, `text-gray-600` |
| Цвета | `bg-blue-500`, `text-white`, `border-gray-300` |
| Размеры | `w-full`, `max-w-md`, `h-12` |
| Скругление | `rounded`, `rounded-lg`, `rounded-full` |
| Тени | `shadow`, `shadow-lg` |

### Адаптивные префиксы

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">Карточка 1</div>
  <div class="bg-white p-6 rounded-lg shadow">Карточка 2</div>
  <div class="bg-white p-6 rounded-lg shadow">Карточка 3</div>
</div>
```

- Без префикса — мобильный (по умолчанию)
- `md:` — ≥ 768px
- `lg:` — ≥ 1024px

### Тот же блок, что в Bootstrap

**Bootstrap:**

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card"><div class="card-body">Карточка</div></div>
    </div>
  </div>
</div>
```

**Tailwind:**

```html
<div class="max-w-6xl mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-white rounded-lg shadow p-6">Карточка</div>
  </div>
</div>
```

---

### Определения и понятия

#### Tailwind CSS

**Tailwind CSS** — utility-first CSS-фреймворк с атомарными классами для отступов, цветов, flex, grid и др.

#### Адаптивный префикс

**Адаптивный префикс** в Tailwind (`sm:`, `md:`, `lg:`) — применяет класс только на экранах указанной ширины и выше.

#### Tailwind Play

**Tailwind Play** — онлайн-песочница на [play.tailwindcss.com](https://play.tailwindcss.com/) для экспериментов без установки.

---

## 5. Когда что выбирать

| Ситуация | Рекомендация |
| -------- | ------------ |
| Быстрый прототип, админка, классический сайт | Bootstrap |
| Уникальный дизайн, современный UI, React/Vue | Tailwind |
| Учёба и понимание «чистого» CSS | Свой CSS (как в уроках 1–13) |
| Команда уже использует фреймворк | Тот же, что в проекте |
| Минимальный вес страницы | Tailwind с purge или свой CSS |

### Можно ли смешивать?

Технически да, но **не рекомендуется**: конфликты стилей, раздутый CSS. На уроке сравниваем подходы на **разных файлах** или секциях.

### Что важнее знать

Фреймворк — инструмент. **Понимание Flexbox, Grid и блочной модели** важнее запоминания всех классов. Фреймворк лишь упаковывает то, что ты уже изучил.

---

### Определения и понятия

#### Purge / content scanning

**Purge (content scanning)** — процесс удаления неиспользуемых CSS-классов при сборке Tailwind. Итоговый файл получается маленьким.

#### Конфликт стилей

**Конфликт стилей** — когда правила из разных источников (Bootstrap + свой CSS) переопределяют друг друга непредсказуемо.

---

## 6. Итог урока

### Что мы узнали сегодня

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

Выполнить задание **«Секция на Tailwind»** из файла [homework.md](homework.md).

---

### Что мы НЕ изучаем на этом уроке

| Тема | Когда |
| ---- | ----- |
| Установка Tailwind через npm и PostCSS | Упоминание |
| Кастомизация Bootstrap через Sass | Не в этом модуле |
| React-компоненты (MUI, shadcn) | Другой модуль |
| Bulma, Foundation, UIkit | Не в этом курсе |
| Полный каталог классов Bootstrap/Tailwind | Справочники на сайтах |

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
| Purge | Удаление неиспользуемых классов при сборке |
| Atomic CSS | Один класс — одно CSS-правило |
| Design system | Система правил дизайна проекта |
