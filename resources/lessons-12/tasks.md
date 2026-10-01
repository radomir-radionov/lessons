# Практические задачи — Урок 12

**Время на занятии:** 32–55 мин (~23 минуты)  
**Папка:** `grid-layout/`  
**Файлы:** `index.html`, `style.css`  
**Порядок:** задачи идут по нарастающей сложности

---

## Задача 1 — «Первая сетка» (5 мин)

### Задание

Создай папку `grid-layout/` с `index.html` и `style.css`.

1. Контейнер `.grid` с 6 элементами `.grid__item`
2. CSS:
   ```css
   .grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 16px;
   }
   ```
3. Каждый элемент — цветной блок с номером (1–6)

### Критерии выполнения

- [ ] `display: grid` на контейнере
- [ ] 3 колонки равной ширины (`1fr`)
- [ ] `gap: 16px` между элементами
- [ ] 6 элементов выстраиваются в 2 ряда по 3

### Подсказка

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.grid__item {
  background-color: #e0e7ff;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
}
```

---

## Задача 2 — «Элемент на 2 колонки» (5 мин)

### Задание

В сетке из задачи 1 сделай так, чтобы **первый элемент** занимал 2 колонки:

1. Добавь классу первого элемента: `grid-column: span 2`
2. Или: `grid-column: 1 / 3`

### Критерии выполнения

- [ ] Первый элемент шире остальных (2 колонки)
- [ ] Остальные элементы перестроились автоматически
- [ ] Сетка не сломалась

### Подсказка

```css
.grid__item--wide {
  grid-column: span 2;
}
```

```html
<div class="grid__item grid__item--wide">1</div>
```

---

## Задача 3 — «Макет страницы» (5 мин)

### Задание

Создай макет **header / sidebar / content / footer** через `grid-template-areas`:

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  gap: 0;
  min-height: 100vh;
}
```

HTML:

```html
<div class="layout">
  <header class="header">Шапка</header>
  <aside class="sidebar">Боковая панель</aside>
  <main class="content">Контент</main>
  <footer class="footer">Подвал</footer>
</div>
```

Каждому блоку — `grid-area` с соответствующим именем.

### Критерии выполнения

- [ ] 4 зоны: header, sidebar, content, footer
- [ ] Header и footer на всю ширину
- [ ] Sidebar слева (200px), content справа
- [ ] `min-height: 100vh` у layout

### Подсказка

```css
.header  { grid-area: header; background: #2563eb; color: white; padding: 16px; }
.sidebar { grid-area: sidebar; background: #f3f4f6; padding: 16px; }
.content { grid-area: content; padding: 16px; }
.footer  { grid-area: footer; background: #1f2937; color: white; padding: 16px; }
```

---

## Задача 4 — «Сетка карточек 3×2» (5 мин)

### Задание

В секции `.content` (или отдельной секции) создай сетку из **6 карточек** (3 колонки × 2 ряда):

1. `.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }`
2. Каждая карточка: заголовок `h3`, текст `p`
3. Карточки одинаковой высоты в ряду (Grid выравнивает автоматически)

### Критерии выполнения

- [ ] 6 карточек в сетке 3×2
- [ ] Равные колонки через `1fr`
- [ ] `gap: 24px`
- [ ] Карточки с заголовком и текстом

### Подсказка

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
}
```

---

## Задача 5 — «Адаптивная сетка» (5 мин)

### Задание

Добавь media query: на экранах < 768px сетка карточек становится **1 колонкой**, а макет страницы — **без sidebar** (только header, content, footer):

```css
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }

  .sidebar {
    display: none;
  }

  .cards {
    grid-template-columns: 1fr;
  }
}
```

### Критерии выполнения

- [ ] На десктопе — полный макет с sidebar
- [ ] На мобильном — sidebar скрыт, карточки в 1 колонку
- [ ] Media query `@media (max-width: 768px)`
- [ ] Проверено в DevTools

### Подсказка

Используй mobile-first или desktop-first — как удобнее. Главное — корректное переключение раскладки.

---

## Итог практики

После выполнения всех задач у тебя должна получиться страница с:

- Grid-сеткой 3×3 с широким элементом
- Макетом header / sidebar / content / footer
- Сеткой карточек 3×2
- Адаптивным переключением на мобильном

Покажи результат преподавателю в DevTools на 1200px и 375px.
