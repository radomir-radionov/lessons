# Практические задачи — Урок 7

**Время на занятии:** 32–55 мин (~23 минуты)  
**Проект:** папка `advanced-css/` с файлами `index.html` и `style.css`  
**Порядок:** задачи идут по нарастающей сложности

---

## Задача 1 — «Hero с фоновым изображением» (6 мин)

### Задание

Создай hero-секцию с фоновой картинкой:

1. Создай папку `advanced-css` с `index.html` и `style.css`
2. Добавь `<section class="hero">` с заголовком и подзаголовком
3. Задай фоновое изображение через `background-image: url(...)`
4. Настрой: `background-size: cover`, `background-position: center`, `background-repeat: no-repeat`
5. Задай высоту `400px`, выровняй текст по центру (flex из урока 5)
6. Сделай текст белым и читаемым (можно добавить `text-shadow`)

### Критерии выполнения

- [ ] Hero-секция с фоновым изображением (не `<img>`)
- [ ] `background-size: cover` и `background-position: center`
- [ ] Задана высота секции
- [ ] Текст по центру (flex или `text-align: center`)
- [ ] Текст читаем на фоне картинки

### Подсказка

```css
.hero {
  height: 400px;
  background-image: url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
```

---

## Задача 2 — «Аватар с object-fit» (4 мин)

### Задание

Создай круглый аватар:

1. Добавь блок `<div class="profile">` с `<img class="profile__avatar">`
2. Задай аватару фиксированные размеры: `width: 120px; height: 120px`
3. Примени `object-fit: cover` — картинка заполняет круг без искажений
4. Сделай аватар круглым: `border-radius: 50%`
5. Добавь имя пользователя под аватаром

### Критерии выполнения

- [ ] Аватар 120×120 пикселей
- [ ] `object-fit: cover` применён
- [ ] Аватар круглый (`border-radius: 50%`)
- [ ] Картинка не искажена (не растянута)
- [ ] У `<img>` есть `alt`

### Подсказка

```css
.profile__avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
}
```

---

## Задача 3 — «Иконка с transform» (4 мин)

### Задание

Создай иконку с эффектом при наведении:

1. Добавь кнопку или ссылку `<a class="icon-btn" href="#">+</a>`
2. Сделай кнопку круглой (фиксированные размеры, `border-radius: 50%`)
3. При `:hover` поверни иконку на 90°: `transform: rotate(90deg)`
4. Добавь `transition: transform 0.3s` для плавности (кратко — полная тема на уроке 13)

### Критерии выполнения

- [ ] Круглая кнопка-иконка
- [ ] При `:hover` применяется `transform: rotate(90deg)`
- [ ] Есть `transition` для плавного поворота
- [ ] `:focus` с видимой обводкой (из урока 6)

### Подсказка

```css
.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #4a90d9;
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: transform 0.3s;
}

.icon-btn:hover {
  transform: rotate(90deg);
}
```

---

## Задача 4 — «Ширина через calc()» (4 мин)

### Задание

Создай макет с боковой панелью и контентом:

1. Добавь `<div class="layout">` с `.sidebar` (ширина `200px`) и `.content`
2. Контент должен занимать оставшуюся ширину: `width: calc(100% - 200px)`
3. У `.layout` задай `display: flex` или оба блока `display: inline-block` / float (flex предпочтительнее)
4. Добавь `gap: 20px` и пересчитай: `calc(100% - 200px - 20px)` или используй flex без calc

> Цель задачи — именно применить `calc()`, даже если flex решает проще.

### Критерии выполнения

- [ ] Sidebar фиксированной ширины 200px
- [ ] Content использует `calc()` для ширины
- [ ] Оба блока на одной строке
- [ ] `calc()` написан с пробелами: `calc(100% - 220px)`

### Подсказка

```css
.layout {
  display: flex;
  gap: 20px;
}

.sidebar {
  width: 200px;
  flex-shrink: 0;
  background-color: #f0f0f0;
  padding: 16px;
}

.content {
  width: calc(100% - 220px);
  padding: 16px;
}
```

---

## Задача 5 — «Многослойный фон» (5 мин)

### Задание

Создай баннер с градиентным оверлеем поверх картинки:

1. Добавь `<section class="banner">` с текстом
2. Задай два фона через запятую:
   - Верхний слой: полупрозрачный градиент `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))`
   - Нижний слой: фоновое изображение
3. Настрой `background-size: cover` для обоих слоёв
4. Текст белый, по центру

### Критерии выполнения

- [ ] Использованы два фона (градиент + картинка)
- [ ] Градиент затемняет картинку (оверлей)
- [ ] `background-size: cover`
- [ ] Текст читаем и отцентрирован
- [ ] Высота баннера задана (например, `300px`)

### Подсказка

```css
.banner {
  height: 300px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
```

---

## Итог практики

После выполнения всех задач у тебя должна быть страница с:

- Hero-секцией с фоновым изображением
- Круглым аватаром с `object-fit`
- Иконкой с `transform` при hover
- Макетом с `calc()`
- Баннером с многослойным фоном

Покажи результат преподавателю перед окончанием урока.
