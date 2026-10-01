# Практические задачи — Урок 14

**Время на занятии:** 38–55 мин (~17 минут)  
**Файлы:** `bootstrap-page.html`, `frameworks-notes.html`  
**Порядок:** задачи идут по нарастающей сложности

---

## Задача 1 — «Подключение Bootstrap» (3 мин)

### Задание

Создай файл `bootstrap-page.html`:

1. Каркас HTML5 с `meta viewport`
2. Подключи Bootstrap 5.3 CSS и JS через CDN (jsdelivr)
3. Добавь заголовок `<h1 class="text-center mt-4">Мой сайт на Bootstrap</h1>`

### Критерии выполнения

- [ ] Bootstrap CSS подключён в `<head>`
- [ ] Bootstrap JS подключён перед `</body>`
- [ ] Заголовок центрирован классом `text-center`
- [ ] Страница отображается со стилями Bootstrap (не «голый» HTML)

### Подсказка

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## Задача 2 — «Сетка из трёх колонок» (5 мин)

### Задание

Добавь секцию с тремя колонками:

1. `.container` → `.row` → три `.col-md-4`
2. В каждой колонке — заголовок и абзац текста
3. На мобильном колонки должны идти друг под другом

### Критерии выполнения

- [ ] Использованы `container`, `row`, `col-md-4`
- [ ] Три колонки с контентом
- [ ] На ширине ≥768px колонки в один ряд
- [ ] На узком экране колонки стекаются вертикально

### Подсказка

```html
<div class="container my-5">
  <div class="row">
    <div class="col-md-4">
      <h3>Колонка 1</h3>
      <p>Текст первой колонки.</p>
    </div>
    <!-- ... -->
  </div>
</div>
```

---

## Задача 3 — «Карточки в сетке» (5 мин)

### Задание

Замени текст в колонках на компоненты Bootstrap `.card`:

1. Три карточки в той же сетке
2. В каждой: `.card-body`, заголовок `.card-title`, текст `.card-text`, кнопка `.btn btn-primary`
3. Добавь отступ между карточками через `g-4` на `.row`

### Критерии выполнения

- [ ] Использован компонент `.card`
- [ ] В каждой карточке есть заголовок, текст и кнопка
- [ ] Кнопки стилизованы классом `.btn btn-primary`
- [ ] Между карточками есть отступ (`g-4` или `mb-3`)

### Подсказка

```html
<div class="row g-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Заголовок</h5>
        <p class="card-text">Описание.</p>
        <a href="#" class="btn btn-primary">Подробнее</a>
      </div>
    </div>
  </div>
</div>
```

---

## Задача 4 — «Навигация и кнопки» (4 мин)

### Задание

Добавь в начало страницы простую навигацию:

1. `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">`
2. Бренд (название сайта) и 3 ссылки
3. В hero-секции — две кнопки: `.btn btn-primary` и `.btn btn-outline-light`

### Критерии выполнения

- [ ] Есть navbar с тёмным фоном
- [ ] Минимум 3 навигационные ссылки
- [ ] Две кнопки с разными стилями Bootstrap
- [ ] Navbar отображается корректно

### Подсказка

```html
<nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Бренд</a>
    <div class="navbar-nav">
      <a class="nav-link" href="#">Главная</a>
    </div>
  </div>
</nav>
```

---

## Задача 5 — «Сравнение с Tailwind» (5 мин)

### Задание

Создай файл `frameworks-notes.html` с подключённым Tailwind CDN:

1. Повтори **одну** карточку из задачи 3, но на Tailwind-классах
2. Под карточкой напиши 3 пункта списка: что проще в Bootstrap, что — в Tailwind, что — в чистом CSS

### Критерии выполнения

- [ ] Tailwind подключён через CDN (`cdn.tailwindcss.com`)
- [ ] Карточка сверстана утилитарными классами (фон, padding, shadow, rounded)
- [ ] Есть список из 3 сравнений Bootstrap vs Tailwind vs свой CSS
- [ ] Оба файла открываются в браузере

### Подсказка

```html
<script src="https://cdn.tailwindcss.com"></script>
```

```html
<div class="bg-white rounded-lg shadow p-6 max-w-sm">
  <h3 class="text-xl font-bold mb-2">Заголовок</h3>
  <p class="text-gray-600 mb-4">Описание карточки.</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Подробнее
  </button>
</div>
```

---

## Итог практики

После выполнения задач у тебя должно быть:

- Страница `bootstrap-page.html` с navbar, сеткой и карточками Bootstrap
- Файл `frameworks-notes.html` с карточкой на Tailwind и заметками сравнения

Покажи обе страницы преподавателю и проверь адаптив в DevTools (режим мобильного устройства).
