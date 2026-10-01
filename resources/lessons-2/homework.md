# Домашнее задание — Урок 2

**Задание:** «Обо мне»  
**Время:** ~30–45 минут  
**Файлы:** `index.html` + `styles.css`

---

## Описание

Создай стилизованную страницу «Обо мне» с нуля или доработай визитку с урока. На этот раз весь CSS — во внешнем файле, а классы именованы по **БЭМ**.

Это твоя первая работа, где HTML отвечает за структуру, а CSS — за оформление.

---

## Требования

### HTML

1. **Валидная структура** — `DOCTYPE`, `html`, `head`, `body`, `meta charset`, `viewport`
2. **Заголовок вкладки** — «Обо мне — [Твоё имя]»
3. **Блок `page`** — обёртка всей страницы: `<div class="page">`
4. **Блок `about`** — основной контент внутри `page`:
   - `about__header` — шапка с именем и фото
   - `about__title` — `h1` с именем
   - `about__photo` — изображение с `alt`
   - `about__section` — минимум 3 секции (Обо мне, Навыки, Контакты)
   - `about__subtitle` — `h2` в каждой секции
   - `about__text` — абзац с описанием (минимум 3 предложения)
   - `about__list` — список навыков (`ul`)
   - `about__link` — ссылки в секции контактов (минимум 2)
5. **Модификатор** — минимум один: `about__text--highlight` или `about__section--accent`
6. **Комментарии** — HTML-комментарии перед каждой секцией
7. **Разделители** — `<hr>` между секциями

### CSS (`styles.css`)

1. **Сброс box-sizing** в начале файла
2. **Google Fonts** — подключить один шрифт (Roboto, Inter, Open Sans и др.)
3. **Фон страницы** — отличный от белого (`body` или `.page`)
4. **Карточка** — блок `about` с padding, border или border-radius, ограниченной шириной
5. **Типографика** — разные размеры для `about__title` и `about__subtitle`
6. **Цвета** — согласованная палитра (минимум 3 цвета: фон, текст, акцент)
7. **Отступы** — margin/padding между секциями
8. **Фото** — скругление (`border-radius`)
9. **Ссылки** — свой цвет, без подчёркивания (или с подчёркиванием при наведении — бонус)

---

## Пример структуры

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Обо мне — Алексей Петров</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="page">
      <article class="about">
        <!-- Шапка -->
        <header class="about__header">
          <img
            class="about__photo"
            src="https://placehold.co/150x150"
            alt="Фото Алексея Петрова"
          />
          <h1 class="about__title">Алексей Петров</h1>
        </header>

        <hr />

        <!-- Секция: Обо мне -->
        <section class="about__section">
          <h2 class="about__subtitle">Обо мне</h2>
          <p class="about__text">
            Мне <span class="about__text--highlight">16 лет</span>, я учусь в
            школе и живу в Минске. Увлекаюсь программированием и мечтаю стать
            веб-разработчиком.
          </p>
        </section>

        <hr />

        <!-- Секция: Навыки -->
        <section class="about__section about__section--accent">
          <h2 class="about__subtitle">Мои навыки</h2>
          <ul class="about__list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Работа с компьютером</li>
            <li>Английский язык</li>
            <li>Быстрое обучение</li>
          </ul>
        </section>

        <hr />

        <!-- Секция: Контакты -->
        <section class="about__section">
          <h2 class="about__subtitle">Контакты</h2>
          <p class="about__text">
            <a class="about__link" href="mailto:alex@example.com">Email</a>
            ·
            <a class="about__link" href="https://t.me/username" target="_blank"
              >Telegram</a
            >
          </p>
        </section>
      </article>
    </div>
  </body>
</html>
```

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background-color: #f0f4f8;
  color: #333;
  line-height: 1.6;
}

.page {
  padding: 32px 16px;
}

.about {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

/* ... остальные стили по БЭМ ... */
```

---

## Критерии оценки

| Критерий                                              | Балл        |
| ----------------------------------------------------- | ----------- |
| Валидная HTML-структура                               | обязательно |
| CSS в отдельном файле `styles.css`                    | обязательно |
| Минимум 6 БЭМ-классов (`блок__элемент`)               | обязательно |
| Минимум 1 БЭМ-модификатор (`блок__элемент--модификатор`) | обязательно |
| Подключён шрифт Google Fonts                          | обязательно |
| Есть `box-sizing: border-box`                         | обязательно |
| Использованы `margin` и `padding`                     | обязательно |
| Согласованная цветовая палитра                        | обязательно |
| У изображения есть `alt`                              | обязательно |
| Код читаемый (отступы, пустые строки между секциями)  | обязательно |

---

## Бонус (по желанию)

1. **Ссылка «Наверх»** — внизу страницы добавь `<a class="about__link" href="#top">Наверх</a>` (у `h1` задай `id="top"`)
2. **Тёмная тема** — добавь модификатор `about--dark` и стили с тёмным фоном и светлым текстом
3. **`:hover` на ссылках** — при наведении меняй цвет или добавляй подчёркивание
4. **Две страницы** — создай `hobbies.html` со списком хобби и ссылками между страницами; общий `styles.css` для обеих

---

## Как сдать

1. Убедись, что `index.html` открывается в браузере и стили применяются
2. Проверь, что `styles.css` лежит в той же папке, что и HTML
3. Открой DevTools (F12) → вкладка Styles — убедись, что нет ошибок загрузки CSS
4. Покажи результат на следующем занятии или отправь папку с проектом преподавателю

---

## Частые ошибки — проверь себя

- [ ] В CSS класс начинается с точки: `.about__title`, а не `about__title`
- [ ] После каждого свойства стоит `;`: `color: red;`
- [ ] Путь к `styles.css` в `<link>` правильный (файл в той же папке)
- [ ] Google Fonts подключён в `<head>` **до** `styles.css`
- [ ] В `font-family` имя шрифта в кавычках: `"Inter", sans-serif`
- [ ] БЭМ: два подчёркивания для элемента (`__`), два дефиса для модификатора (`--`)
- [ ] Не используй пробелы в именах классов
- [ ] `box-sizing: border-box` добавлен в начало CSS
- [ ] Файл сохранён с расширением `.css`, а не `.txt`
