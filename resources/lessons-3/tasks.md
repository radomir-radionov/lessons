# Практические задачи — Урок 3

**Время на занятии:** 32–55 мин (~23 минуты)  
**Папка проекта:** `layout-practice/`  
**Файлы:** `index.html` + `style.css`  
**Порядок:** задачи идут по нарастающей сложности — каждая следующая дополняет предыдущую

---

## Задача 1 — «Старт проекта» (3 мин)

### Задание

Создай папку `layout-practice` и два файла:

1. `index.html` — полный каркас HTML5 с подключённым `style.css`
2. `style.css` — базовые стили: сброс `box-sizing`, `body` с `margin: 0`, шрифт sans-serif

В `<body>` добавь пустые семантические блоки-заглушки:

```html
<header class="header"></header>
<main class="main"></main>
<footer class="footer"></footer>
```

### Критерии выполнения

- [ ] Есть папка `layout-practice` с двумя файлами
- [ ] В `<head>` подключён `<link rel="stylesheet" href="style.css">`
- [ ] Есть `header`, `main`, `footer` с классами
- [ ] В CSS задан `box-sizing: border-box` и `margin: 0` у `body`
- [ ] Страница открывается в браузере

### Подсказка

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333333;
  background-color: #f5f5f5;
}
```

---

## Задача 2 — «Шапка: логотип и меню» (5 мин)

### Задание

Заполни блок `header`:

1. Внутри — обёртка `<div class="container header__inner">`
2. **Логотип** — ссылка `<a class="header__logo">` с названием проекта (твоё имя или «MySite»)
3. **Меню** — `<nav class="header__nav">` с 3 ссылками: «Главная», «Услуги», «Контакты»
4. Стилизуй шапку: белый фон, нижняя граница, отступы

Логотип — слева, меню — справа (используй `display: flex` на `.header__inner`).

### Критерии выполнения

- [ ] Логотип — кликабельная ссылка с классом `header__logo`
- [ ] В меню минимум 3 ссылки с классом `header__link`
- [ ] Шапка визуально отделена от контента (фон или `border-bottom`)
- [ ] Логотип и меню на одной строке

### Подсказка

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.header__link {
  margin-left: 20px;
  color: #333333;
  text-decoration: none;
}
```

---

## Задача 3 — «Заголовок секции» (3 мин)

### Задание

Внутри `<main>` добавь секцию:

1. `<section class="cards" id="services">`
2. Внутри — `<div class="container">`
3. Заголовок `<h2 class="cards__title">` — «Наши услуги» (или своя тема)
4. Короткий вводный абзац `<p class="cards__lead">` — 1–2 предложения

Стилизуй: секция с вертикальными отступами, заголовок по центру.

### Критерии выполнения

- [ ] Секция внутри `main`, не внутри `header`
- [ ] Есть `h2` с классом `cards__title`
- [ ] Есть вводный абзац `cards__lead`
- [ ] У секции `.cards` задан `padding: 48px 0`

### Подсказка

```css
.cards__title {
  text-align: center;
  margin-bottom: 12px;
}

.cards__lead {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 32px;
  color: #666666;
}
```

---

## Задача 4 — «Три карточки» (7 мин)

### Задание

Под заголовком секции добавь блок `<div class="cards__grid">` с **тремя** карточками.

Каждая карточка — `<article class="card">` с:

1. Заголовком `<h3 class="card__title">`
2. Текстом `<p class="card__text">` (2–3 предложения)
3. Ссылкой `<a class="card__link">` — «Подробнее»

Темы карточек — на твой выбор (услуги, хобби, курсы). Карточки должны выглядеть **одинаково**: белый фон, рамка, скругление, отступы.

### Критерии выполнения

- [ ] Ровно 3 карточки `<article class="card">`
- [ ] В каждой карточке: заголовок, текст, ссылка
- [ ] Карточки стоят в один ряд (flex + `gap`)
- [ ] Единый стиль: `padding`, `border`, `border-radius`

### Подсказка

```css
.cards__grid {
  display: flex;
  gap: 24px;
}

.card {
  flex: 1;
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.card__title {
  margin-top: 0;
}

.card__link {
  font-weight: bold;
}
```

---

## Задача 5 — «Подвал» (3 мин)

### Задание

Заполни блок `footer`:

1. Обёртка `<div class="container footer__inner">`
2. Текст копирайта: `© 2026 [Имя]. Все права защищены.` — класс `footer__copy`
3. Две ссылки в `<nav class="footer__nav">`: «Политика конфиденциальности» и «Контакты`

Стилизуй подвал: тёмный фон, светлый текст, ссылки другого оттенка.

### Критерии выполнения

- [ ] Есть текст копирайта с текущим годом
- [ ] Минимум 2 ссылки в подвале
- [ ] Тёмный фон (`#1f2937` или похожий), читаемый текст
- [ ] Подвал визуально отделён от `main`

### Подсказка

```css
.footer {
  background-color: #1f2937;
  color: #ffffff;
  padding: 24px 0;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__link {
  color: #93c5fd;
  margin-left: 16px;
  text-decoration: none;
}
```

---

## Задача 6 — «Финальная полировка» (2 мин)

### Задание

Пройди [чеклист ошибок](lesson.md#4-чеклист-частых-ошибок) и внеси минимум **3 улучшения**:

1. Добавь `:hover` для ссылок в шапке и карточках
2. Проверь, что у всех ссылок есть осмысленный `href` (якоря `#services` или реальные URL)
3. Добавь HTML-комментарии перед `header`, `main`, `footer`
4. Проверь отступы: контент не прилипает к краям экрана

### Критерии выполнения

- [ ] Ссылки реагируют на наведение (`:hover`)
- [ ] Есть комментарии `<!-- Шапка -->` и т.п.
- [ ] Пройден чеклист из `lesson.md` — исправлена минимум 1 найденная ошибка
- [ ] Макет выглядит аккуратно целиком

### Подсказка

```css
.header__link:hover,
.card__link:hover {
  text-decoration: underline;
}
```

---

## Итог практики

После выполнения всех задач у тебя должна получиться страница с:

- Семантической структурой (`header` → `main` → `footer`)
- Шапкой с логотипом и меню
- Секцией из 3 карточек
- Оформленным подвалом
- Внешним файлом стилей и именами классов по БЭМ

Покажи результат преподавателю перед окончанием урока.
