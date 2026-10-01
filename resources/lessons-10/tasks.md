# Практические задачи — Урок 10

**Время на занятии:** 32–55 мин (~23 минуты)  
**Папка:** `mobile-first-layout/`  
**Файлы:** `index.html`, `style.css`  
**Порядок:** задачи идут по нарастающей сложности

---

## Задача 1 — «Каркас mobile-first» (5 мин)

### Задание

Создай папку `mobile-first-layout/` с `index.html` и `style.css`.

1. В `<head>` добавь `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
2. Семантическая структура: `header`, `main` (2 секции), `footer`
3. Базовые стили для **мобильного**: одна колонка, `padding: 16px`, шрифт `16px`

### Критерии выполнения

- [ ] Meta viewport в `<head>`
- [ ] CSS подключён через `<link>`
- [ ] Базовые стили рассчитаны на узкий экран (без media queries)
- [ ] Контент читаем на ширине 375px

### Подсказка

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

```css
body {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
}

.container {
  padding: 0 16px;
}
```

---

## Задача 2 — «Карточки: столбик → ряд» (5 мин)

### Задание

В первой секции `main` добавь 3 карточки `.card`:

1. **База (мобильный):** карточки друг под другом (`display: block` или `flex-direction: column`)
2. **Планшет (≥ 768px):** `@media (min-width: 768px)` — карточки в ряд через Flexbox
3. Между карточками — `gap: 16px`

### Критерии выполнения

- [ ] На 375px — карточки в столбик
- [ ] На 768px+ — карточки в один ряд
- [ ] Использован `@media (min-width: 768px)`, не `max-width`
- [ ] Базовые стили без media query — для мобильного

### Подсказка

```css
.cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .cards {
    flex-direction: row;
  }

  .card {
    flex: 1;
  }
}
```

---

## Задача 3 — «Типографика по брейкпоинтам» (5 мин)

### Задание

Настрой размеры заголовков mobile-first:

1. **База:** `h1` — `28px`, `h2` — `22px`
2. **≥ 768px:** `h1` — `36px`, `h2` — `28px`
3. **≥ 1024px:** `h1` — `48px`, `h2` — `32px`

### Критерии выполнения

- [ ] Три уровня размеров (мобильный, планшет, десктоп)
- [ ] Два media query: `768px` и `1024px`
- [ ] Заголовки плавно растут с шириной экрана
- [ ] Проверено в DevTools на 375px, 768px, 1024px

### Подсказка

```css
h1 {
  font-size: 28px;
}

@media (min-width: 768px) {
  h1 {
    font-size: 36px;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 48px;
  }
}
```

---

## Задача 4 — «Шапка mobile-first» (5 мин)

### Задание

Сверстай `header`:

1. **Мобильный:** логотип сверху, навигация (3 ссылки) снизу, по центру
2. **≥ 768px:** логотип слева, навигация справа в одну строку
3. Используй Flexbox

### Критерии выполнения

- [ ] Базовая раскладка — вертикальная (мобильный)
- [ ] При 768px+ — горизонтальная
- [ ] Только `min-width` media queries
- [ ] Шапка не ломается на 375px

### Подсказка

```css
.header__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

@media (min-width: 768px) {
  .header__inner {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

---

## Задача 5 — «Переписать desktop-first» (5 мин)

### Задание

Возьми CSS из [урока 9](../lessons-9/tasks.md) (задача 4) с `@media (max-width: 768px)` и **перепиши** его mobile-first:

1. Базовые стили = мобильная версия (колонки в столбик)
2. `@media (min-width: 768px)` = десктопная версия (колонки в ряд)
3. Удали старые `max-width` queries

### Критерии выполнения

- [ ] Нет `@media (max-width: ...)` в файле
- [ ] База — одна колонка
- [ ] `min-width: 768px` — три колонки в ряд
- [ ] Визуальный результат совпадает с desktop-first версией

### Подсказка

**Было (desktop-first):**
```css
.columns { display: flex; }
@media (max-width: 768px) {
  .columns { flex-direction: column; }
}
```

**Стало (mobile-first):**
```css
.columns {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .columns { flex-direction: row; }
  .column { flex: 1; }
}
```

---

## Итог практики

После выполнения всех задач у тебя должна получиться страница:

- С правильным meta viewport
- Mobile-first CSS (база = мобильный)
- Брейкпоинты 768px и 1024px
- Адаптивная шапка и карточки

Проверь в DevTools: 375px → 768px → 1024px. Покажи преподавателю.
