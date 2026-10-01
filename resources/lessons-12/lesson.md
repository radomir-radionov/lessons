# Урок 12 — CSS Grid Layout

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
[План занятия](lesson-plan.md) · [Задачи](tasks.md) · [Домашнее задание](homework.md)


**Полезные ссылки:** [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) · [CSS-Tricks — A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

## Навигация

| § | Тема | На уроке |
| --- | --- | --- |
| [1](#1-введение-в-css-grid) | Введение в CSS Grid | ✅ 8 мин |
| [2](#2-grid-template-columns-и-rows) | Колонки и строки | ✅ 10 мин |
| [3](#3-линии-сетки-и-grid-area) | Линии и grid-area | ✅ 7 мин |
| [4](#4-css-grid-vs-flexbox) | Grid vs Flexbox | ✅ 7 мин |
| [5](#5-итог-урока) | Итог и ДЗ | ✅ 5 мин |

---

## 1. Введение в CSS Grid

### Что такое CSS Grid

**CSS Grid Layout** — система вёрстки для **двумерных сеток**: строк и колонок одновременно. Структуру задаёшь на контейнере, дочерние элементы размещаются в ячейках.

**Flexbox** управляет элементами в **одном направлении** (ряд или колонка). Grid — **обоими направлениями** сразу.

### Аналогия

| Инструмент | Аналогия |
| ---------- | -------- |
| **Flexbox** | Книги на одной полке (в ряд или в столбик) |
| **Grid** | Книжный шкаф с полками и секциями (строки + колонки) |

### Базовый пример

```html
<div class="grid">
  <div class="grid__item">1</div>
  <div class="grid__item">2</div>
  <div class="grid__item">3</div>
  <div class="grid__item">4</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```

Результат: 4 элемента в сетке 2×2.

### Терминология

| Термин | Что это |
| ------ | ------- |
| **Grid-контейнер** | Родитель с `display: grid` |
| **Grid-элемент** | Прямой потомок контейнера |
| **Grid-линия** | Разделитель между строками/колонками |
| **Grid-ячейка** | Пересечение строки и колонки |
| **Grid-область** | Прямоугольник из нескольких ячеек |

---

## 2. grid-template-columns и rows

### Задание колонок

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
}
```

Три колонки: фиксированная 200px и две гибкие.

### Единица `fr` (fraction)

**`fr`** — доля свободного пространства:

```css
.grid {
  grid-template-columns: 1fr 1fr 1fr; /* три равные колонки */
}
```

`fr` удобнее процентов: не нужно считать `33.333%`, и `fr` учитывает `gap`.

### Функция `repeat()`

```css
grid-template-columns: repeat(3, 1fr);
/* то же, что: 1fr 1fr 1fr */

grid-template-columns: repeat(4, 100px);
/* четыре колонки по 100px */
```

### Задание строк

```css
.grid {
  grid-template-rows: auto 1fr auto;
}
```

- `auto` — высота по содержимому
- `1fr` — занимает оставшееся пространство

### Свойство `gap`

```css
.grid {
  gap: 16px;           /* одинаковый отступ */
  gap: 16px 24px;      /* строки 16px, колонки 24px */
  row-gap: 16px;
  column-gap: 24px;
}
```

### Пример: сетка карточек

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 16px;
}
```

6 карточек автоматически выстроятся в 2 ряда по 3.

---

## 3. Линии сетки и grid-area

### Нумерация линий

Grid-линии нумеруются с **1** (не с 0):

```
Линии колонок:  1    2    3    4
               | 1  | 2  | 3  |
Линии строк:   1 ---+----+----+
               2 ---+----+----+
               3 ---+----+----+
```

### Размещение по линиям

```css
.item {
  grid-column: 1 / 3;  /* от линии 1 до 3 (2 колонки) */
  grid-row: 1 / 2;
}

.item-wide {
  grid-column: span 2; /* занять 2 колонки */
}
```

### grid-template-areas

Именованные области для макетов страниц:

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

```html
<div class="layout">
  <header class="header">Шапка</header>
  <aside class="sidebar">Меню</aside>
  <main class="content">Контент</main>
  <footer class="footer">Подвал</footer>
</div>
```

Повторяющееся имя (`header header`) — область занимает несколько колонок.

### Вложенные сетки

Grid-элемент может сам быть grid-контейнером:

```css
.main {
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
```

Внешняя сетка — макет страницы. Внутренняя — сетка виджетов.

---

## 4. CSS Grid vs Flexbox

### Когда что использовать

| Задача | Инструмент | Почему |
| ------ | ---------- | ------ |
| Макет страницы (header, sidebar, content, footer) | **Grid** | Двумерная сетка, области |
| Сетка карточек 3×2 | **Grid** | Строки и колонки одновременно |
| Навигация в шапке (логотип + меню) | **Flexbox** | Элементы в один ряд |
| Выравнивание кнопки по центру | **Flexbox** | Одномерное выравнивание |
| Равная высота карточек в ряду | **Grid** | Ячейки одной строки выравниваются |
| Распределение пространства в ряду | **Flexbox** | `justify-content`, `flex: 1` |

### Комбинирование

```css
/* Grid — макет страницы */
.layout {
  display: grid;
  grid-template-areas: "header header" "sidebar main" "footer footer";
  grid-template-columns: 200px 1fr;
}

/* Flexbox — навигация внутри шапки */
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid — карточки внутри main */
.widgets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

### Правило выбора

1. **Одномерная** раскладка (ряд или колонка) → **Flexbox**
2. **Двумерная** раскладка (строки + колонки) → **Grid**
3. Не уверен → начни с Flexbox; если нужны и строки, и колонки — Grid

### Сравнительная таблица

| Свойство | Flexbox | Grid |
| -------- | ------- | ---- |
| Измерения | 1D (ряд или колонка) | 2D (строки + колонки) |
| Контроль | Элементы управляют собой | Контейнер задаёт сетку |
| Выравнивание | `justify-content`, `align-items` | `gap`, `grid-template-*` |
| Области | Нет | `grid-template-areas` |
| Лучше для | Навигация, кнопки, центрирование | Макеты страниц, карточные сетки |

### Частые ошибки

| Проблема | Решение |
| -------- | ------- |
| Сетка не появляется | `display: grid` на родителе, не на детях |
| Колонки не равные | `1fr 1fr 1fr`, не `%` |
| Элемент не занимает 2 колонки | `grid-column: span 2` или `1 / 3` |
| `grid-area` не работает | Проверить `grid-template-areas` на контейнере |
| Конфликт с Flexbox | Grid для сетки, Flex для внутреннего выравнивания |

---

## 5. Итог урока

### Что мы узнали

1. **CSS Grid** — двумерная сетка для макетов страниц и карточек
2. **`grid-template-columns/rows`** — задание структуры сетки
3. **`fr` и `gap`** — гибкие колонки и отступы
4. **`grid-template-areas`** — именованные области для макетов
5. **Grid vs Flexbox** — Grid для сеток, Flex для выравнивания в ряду

### Вопросы для самопроверки

1. Чем Grid отличается от Flexbox?
2. Что означает `1fr`?
3. Как создать 3 равные колонки?
4. Что делает `grid-column: span 2`?
5. Как задать макет header/sidebar/content/footer через `grid-template-areas`?
6. Когда использовать Grid, а когда Flexbox?
7. Можно ли вкладывать Grid в Grid?

### Домашнее задание

Выполни задание **«Дашборд на Grid»** → [homework.md](homework.md)

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| CSS Grid Layout | Модуль CSS для двумерных сеток |
| Grid-контейнер | Элемент с `display: grid` |
| Grid-элемент | Прямой потомок grid-контейнера |
| Grid-линия | Разделитель между строками/колонками (нумерация с 1) |
| Grid-ячейка | Пересечение строки и колонки |
| Grid-область | Прямоугольник из нескольких ячеек |
| `grid-template-columns` | Задание колонок сетки |
| `grid-template-rows` | Задание строк сетки |
| `fr` | Доля свободного пространства в Grid |
| `repeat()` | Сокращённая запись повторяющихся значений |
| `gap` | Отступ между ячейками сетки |
| `grid-column` | Размещение элемента по колонкам |
| `grid-row` | Размещение элемента по строкам |
| `span` | Занять N ячеек (`grid-column: span 2`) |
| `grid-template-areas` | Именованные области сетки |
| `grid-area` | Назначение элемента в область |
| Вложенная сетка | Grid внутри grid-элемента |
| Flexbox | Одномерная раскладка (ряд или колонка) |
| Одномерная раскладка | Элементы в одном направлении (Flex) |
| Двумерная раскладка | Элементы по строкам и колонкам (Grid) |
| `display: grid` | Включение grid-раскладки на контейнере |
