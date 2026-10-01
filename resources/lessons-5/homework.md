# Домашнее задание — Урок 5

**Задание:** «Flex-галерея»  
**Время:** ~30–45 минут  
**Файлы:** `index.html` + `style.css` (можно в папке `flex-gallery/`)

---

## Описание

Создай страницу-галерею изображений с использованием Flexbox. Галерея должна выглядеть аккуратно, элементы выровнены, а при уменьшении окна карточки переносятся на новую строку.

---

## Требования

Страница должна содержать:

1. **Шапка** — логотип слева, навигация справа (flex, `space-between`)
2. **Заголовок секции** — `<h2>Галерея</h2>` с отступами
3. **Flex-галерея** — контейнер `.gallery` с минимум **8 карточками** `.gallery__item`
4. **Карточка** — изображение (`<img>`) + подпись (`<figcaption>` или `<p>`)
5. **Flex-настройки галереи:**
   - `display: flex`
   - `flex-wrap: wrap`
   - `gap: 16px` (или больше)
   - `justify-content: center` (карточки по центру ряда)
6. **Размер карточек** — `flex: 1 1 200px` (растут, сжимаются, базовая ширина 200px)
7. **Изображения** — `width: 100%`, `height: 180px`, `object-fit: cover` (кратко: картинка заполняет блок без искажений)
8. **Подвал** — копирайт, выровненный по центру (можно через flex на `footer`)

---

## Пример структуры

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flex-галерея</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="header">
      <nav class="nav">
        <a class="nav__logo" href="#">PhotoGallery</a>
        <ul class="nav__links">
          <li><a href="#">Главная</a></li>
          <li><a href="#">Галерея</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <h2 class="main__title">Галерея</h2>
      <div class="gallery">
        <figure class="gallery__item">
          <img src="https://placehold.co/300x200" alt="Фото 1" />
          <figcaption>Горный пейзаж</figcaption>
        </figure>
        <!-- ещё 7 карточек -->
      </div>
    </main>

    <footer class="footer">
      <p>© 2026 Моя галерея</p>
    </footer>
  </body>
</html>
```

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 24px;
}

.gallery__item {
  flex: 1 1 200px;
  max-width: 280px;
  margin: 0;
}

.gallery__item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}
```

---

## Критерии оценки

| Критерий | Балл |
| --- | --- |
| Валидная HTML-структура, подключён `style.css` | обязательно |
| Шапка сверстана на Flexbox (`display: flex`) | обязательно |
| Галерея содержит минимум 8 карточек | обязательно |
| Использованы `flex-wrap`, `gap`, `justify-content` | обязательно |
| Карточки переносятся на новую строку при узком окне | обязательно |
| У всех изображений есть `alt` | обязательно |
| Код читаемый (отступы, БЭМ-имена классов) | обязательно |

---

## Бонус (по желанию)

1. **Hover-эффект** — при наведении карточка слегка увеличивается (`transform: scale(1.03)`) — тема урока 6–7
2. **Фильтр-ряд** — над галереей добавь ряд кнопок-фильтров в flex-контейнере с `gap`
3. **Git** — закоммить проект: `git add .` → `git commit -m "Добавлена flex-галерея"` → `git push`

---

## Как сдать

1. Открой страницу в браузере и проверь перенос карточек (сожми окно)
2. Убедись, что все картинки загружаются
3. Покажи результат на следующем занятии или отправь папку преподавателю

---

## Частые ошибки — проверь себя

- [ ] `display: flex` на контейнере `.gallery`, а не на каждой карточке
- [ ] `flex-wrap: wrap` — без него карточки сжимаются, а не переносятся
- [ ] `gap` вместо margin на каждой карточке — чище и проще
- [ ] У `<img>` указан `alt`
- [ ] Путь к `style.css` правильный в `<link href="style.css">`
