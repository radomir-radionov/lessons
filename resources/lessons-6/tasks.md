# Практические задачи — Урок 6

**Время на занятии:** 38–55 мин (~17 минут)  
**Проект:** папка `states-practice/` с файлами `index.html` и `style.css`  
**Порядок:** задачи идут по нарастающей сложности

---

## Задача 1 — «Кнопка с hover» (4 мин)

### Задание

Создай интерактивную кнопку:

1. Создай папку `states-practice` с `index.html` и `style.css`
2. Добавь кнопку `<button class="btn">Нажми меня</button>`
3. Задай базовые стили: фон, цвет текста, padding, `border: none`, `border-radius`, `cursor: pointer`
4. Добавь `:hover` — изменение фона и лёгкое увеличение тени
5. Добавь `:focus` — видимая обводка (не убирай `outline` полностью; замени на `outline: 2px solid #4a90d9`)

### Критерии выполнения

- [ ] Кнопка стилизована в обычном состоянии
- [ ] При наведении (`:hover`) меняется фон
- [ ] При фокусе (`:focus`) видна обводка
- [ ] `cursor: pointer` на кнопке

### Подсказка

```css
.btn {
  padding: 12px 24px;
  background-color: #4a90d9;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background-color: #3a7bc8;
}

.btn:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

---

## Задача 2 — «Список с nth-child» (4 мин)

### Задание

Создай стилизованный список с чередованием цветов:

1. Добавь `<ul class="list">` с 6 пунктами `<li>`
2. Задай `.list` базовые стили: убери маркеры (`list-style: none`), padding
3. Каждому `li` — padding и border-bottom
4. Чётные пункты (`:nth-child(even)`) — светло-серый фон
5. Первый пункт (`:nth-child(1)` или `:first-child`) — жирный текст (`font-weight: bold`)

### Критерии выполнения

- [ ] Список из 6 элементов
- [ ] Чётные строки выделены фоном через `:nth-child(even)`
- [ ] Первый пункт выделен жирным
- [ ] Список без стандартных маркеров

### Подсказка

```css
.list {
  list-style: none;
  padding: 0;
}

.list li {
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
}

.list li:nth-child(even) {
  background-color: #f5f5f5;
}

.list li:first-child {
  font-weight: bold;
}
```

---

## Задача 3 — «Бейдж через ::after» (4 мин)

### Задание

Добавь бейдж «NEW» к элементу меню:

1. Добавь ссылку `<a class="nav__link nav__link--new" href="#">Новинки</a>`
2. Через `::after` создай бейдж с текстом «NEW»
3. Стилизуй бейдж: маленький размер, красный фон, белый текст, скругление
4. Расположи бейдж справа от текста ссылки (`margin-left` или `position: relative` на ссылке)

### Критерии выполнения

- [ ] Бейдж создан через `::after`, а не отдельным HTML-элементом
- [ ] У псевдоэлемента есть `content: "NEW"`
- [ ] Бейдж визуально отличается (цвет, размер, скругление)
- [ ] Бейдж расположен рядом с текстом ссылки

### Подсказка

```css
.nav__link--new::after {
  content: "NEW";
  display: inline-block;
  margin-left: 8px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: bold;
  background-color: #e74c3c;
  color: white;
  border-radius: 4px;
  vertical-align: middle;
}
```

---

## Задача 4 — «Абсолютный бейдж на карточке» (3 мин)

### Задание

Создай карточку с бейджем в углу:

1. Добавь `<div class="card">` с изображением и заголовком
2. Добавь `<span class="card__badge">-30%</span>` внутри карточки
3. Задай `.card { position: relative; }`
4. Задай `.card__badge { position: absolute; top: 10px; right: 10px; }`
5. Стилизуй бейдж: фон, цвет, padding, `border-radius`

### Критерии выполнения

- [ ] Карточка имеет `position: relative`
- [ ] Бейдж имеет `position: absolute`
- [ ] Бейдж в правом верхнем углу карточки
- [ ] Бейдж не сдвигает остальной контент (вырван из потока)

### Подсказка

```css
.card {
  position: relative;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.card__badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  background-color: #e74c3c;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
}
```

---

## Задача 5 — «Модальное окно» (4 мин)

### Задание

Создай модальное окно поверх страницы:

1. Добавь блок `<div class="modal-overlay">` с внутренним `<div class="modal">`
2. Внутри модалки — заголовок, текст и кнопка «Закрыть»
3. Overlay: `position: fixed` (или `absolute` на `body` с `position: relative`), на весь экран, полупрозрачный фон
4. Modal: `position: absolute`, по центру overlay (`top: 50%; left: 50%` + отрицательные margin или flex на overlay)
5. Задай `z-index: 100` overlay и `z-index: 101` modal

> На уроке модалка может быть всегда видимой. JavaScript для открытия/закрытия — позже.

### Критерии выполнения

- [ ] Есть затемняющий overlay на весь экран
- [ ] Модальное окно поверх overlay
- [ ] Использован `z-index` для правильного наложения
- [ ] Модалка содержит заголовок и кнопку
- [ ] Overlay имеет полупрозрачный фон (`rgba(0, 0, 0, 0.5)`)

### Подсказка

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background: white;
  padding: 32px;
  border-radius: 12px;
  max-width: 400px;
  z-index: 101;
}
```

---

## Итог практики

После выполнения всех задач у тебя должна быть страница с:

- Интерактивной кнопкой (`:hover`, `:focus`)
- Списком с чередованием цветов (`:nth-child`)
- Бейджем через `::after`
- Карточкой с абсолютным бейджем
- Модальным окном с overlay

Покажи результат преподавателю перед окончанием урока.
