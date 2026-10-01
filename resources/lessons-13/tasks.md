# Практические задачи — Урок 13

**Время на занятии:** 35–55 мин (~20 минут)  
**Файл:** все задачи выполняются в одном файле `animations.html` + `css/animations.css`  
**Порядок:** задачи идут по нарастающей сложности

---

## Задача 1 — «Подготовка файлов» (3 мин)

### Задание

Создай файлы `animations.html` и `css/animations.css`:

1. Подключи CSS к HTML
2. Добавь базовые стили: `box-sizing: border-box`, шрифт sans-serif, светлый фон страницы
3. Создай три секции на странице: «Кнопка», «Badge», «Меню» — с заголовками `<h2>`

### Критерии выполнения

- [ ] Файлы `animations.html` и `css/animations.css` созданы
- [ ] CSS подключён через `<link rel="stylesheet">`
- [ ] На странице три секции с заголовками
- [ ] Страница открывается в браузере без ошибок

### Подсказка

```html
<link rel="stylesheet" href="css/animations.css" />
```

```css
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  font-family: system-ui, sans-serif;
  background-color: #f8fafc;
  padding: 2rem;
}
```

---

## Задача 2 — «Кнопка с hover-переходом» (5 мин)

### Задание

В секции «Кнопка» добавь элемент `<button class="btn">Нажми меня</button>` и стилизуй его:

1. Базовый цвет фона и белый текст
2. `transition` для `background-color` и `transform` (длительность ~0.25s)
3. При `:hover` — другой цвет фона и лёгкий подъём (`translateY(-2px)`)
4. При `:active` — кнопка возвращается на место

### Критерии выполнения

- [ ] Кнопка имеет базовые стили (padding, border-radius, cursor)
- [ ] `transition` задан на `.btn`, не только на `:hover`
- [ ] При наведении цвет плавно меняется
- [ ] При наведении кнопка слегка поднимается
- [ ] При нажатии (`:active`) эффект подъёма сбрасывается

### Подсказка

```css
.btn {
  transition: background-color 0.25s ease, transform 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
}
```

---

## Задача 3 — «Пульсирующий badge» (6 мин)

### Задание

В секции «Badge» создай элемент `<span class="badge">Новое</span>`:

1. Оформи badge: красный фон, белый текст, скругление, маленький шрифт
2. Напиши `@keyframes pulse` — масштаб от 1 до 1.1 и обратно
3. Примени анимацию: `animation: pulse 1.5s ease-in-out infinite`

### Критерии выполнения

- [ ] Badge визуально выделяется (цвет, размер, скругление)
- [ ] Создано правило `@keyframes pulse`
- [ ] Анимация применена через свойство `animation`
- [ ] Badge плавно пульсирует бесконечно

### Подсказка

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.badge {
  animation: pulse 1.5s ease-in-out infinite;
}
```

---

## Задача 4 — «Slide-in меню» (6 мин)

### Задание

В секции «Меню» создай боковую панель:

1. HTML: `<nav class="sidebar">` с 3 пунктами списка
2. Изначально панель сдвинута за левый край (`transform: translateX(-100%)`)
3. Напиши `@keyframes slideIn` — панель выезжает на место
4. Примени анимацию при загрузке: `animation: slideIn 0.5s ease-out forwards`

### Критерии выполнения

- [ ] Sidebar имеет фиксированную ширину (~200px) и фон
- [ ] Создано `@keyframes slideIn` с `translateX`
- [ ] Панель выезжает слева при загрузке страницы
- [ ] `animation-fill-mode: forwards` сохраняет конечное положение

### Подсказка

```css
.sidebar {
  width: 200px;
  background: #1e293b;
  color: white;
  padding: 1rem;
  animation: slideIn 0.5s ease-out forwards;
}
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
```

---

## Задача 5 — «Меню по клику (бонус)» (5 мин)

### Задание

Добавь кнопку «Открыть меню» и класс `.sidebar--open`:

1. По умолчанию sidebar скрыт (`translateX(-100%)`)
2. При добавлении класса `.sidebar--open` — `transition` выезжает меню
3. Кнопка переключает класс (можно вручную в DevTools или простой JS)

> Если JavaScript ещё не изучали — достаточно показать работу через DevTools: добавить/убрать класс `.sidebar--open`.

### Критерии выполнения

- [ ] Sidebar по умолчанию скрыт за экраном
- [ ] Есть класс `.sidebar--open` с `transform: translateX(0)`
- [ ] Переход плавный благодаря `transition`
- [ ] Продемонстрировано открытие меню (кнопкой или через DevTools)

### Подсказка

```css
.sidebar {
  transform: translateX(-100%);
  transition: transform 0.4s ease;
}
.sidebar--open {
  transform: translateX(0);
}
```

---

## Итог практики

После выполнения задач у тебя должна быть страница с:

- Кнопкой с плавным hover-эффектом (`transition`)
- Пульсирующим badge (`@keyframes` + `infinite`)
- Выезжающим меню (`@keyframes` или `transition` + класс)

Покажи результат преподавателю и проверь анимации в DevTools (вкладка Animations, если доступна).
