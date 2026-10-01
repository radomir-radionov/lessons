# Домашнее задание — Урок 3

**Задание:** «Мини-лендинг»  
**Время:** ~40–50 минут  
**Папка:** `mini-landing/` (новый проект, не копируй `layout-practice` целиком)

---

## Описание

Создай одностраничный **мини-лендинг** — короткий промо-сайт для вымышленного продукта, курса или услуги. Используй навыки с урока: семантическая разметка, БЭМ, внешний CSS, блоки header / main / footer.

---

## Требования

Страница должна содержать:

### 1. Шапка (`header`)

- Логотип (текст или картинка с `alt`)
- Меню из 3–4 ссылок-якорей (`#hero`, `#features`, `#contacts`)
- Классы по БЭМ: `header__logo`, `header__nav`, `header__link`

### 2. Hero-блок (первый экран)

- Крупный заголовок `<h1>` — название продукта или услуги
- Подзаголовок `<p>` — 1–2 предложения о пользе
- Кнопка-ссылка «Узнать больше» или «Записаться» — ведёт к секции преимуществ
- Фоновый цвет или лёгкий градиент (через `background-color` или `background: linear-gradient(...)`)
- Классы: блок `hero`, элементы `hero__title`, `hero__text`, `hero__button`

### 3. Секция преимуществ (`#features`)

- Заголовок секции `<h2>`
- **3 карточки** с преимуществами (как на уроке):
  - заголовок `h3`
  - описание `p`
  - опционально: иконка-заглушка `<img>` или emoji в тексте
- Классы: `features`, `features__grid`, `feature-card`, `feature-card__title`

### 4. Подвал (`footer`, `#contacts`)

- Копирайт с годом
- Минимум 2 ссылки (например, email и соцсеть)
- Контактная строка: email или телефон текстом
- Тёмный фон, контрастный текст

### 5. Общие требования

- Файлы: `index.html` + `style.css`
- Контейнер `.container` с `max-width: 1200px`
- Сброс `box-sizing` и `margin: 0` у `body`
- HTML-комментарии перед каждым крупным блоком
- Все ссылки кликабельны, у картинок есть `alt`

---

## Пример структуры

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Курс веб-разработки — Старт</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Шапка -->
    <header class="header">
      <div class="container header__inner">
        <a href="#hero" class="header__logo">WebStart</a>
        <nav class="header__nav">
          <a href="#hero" class="header__link">Главная</a>
          <a href="#features" class="header__link">Преимущества</a>
          <a href="#contacts" class="header__link">Контакты</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section class="hero" id="hero">
        <div class="container hero__inner">
          <h1 class="hero__title">Стань веб-разработчиком за 3 месяца</h1>
          <p class="hero__text">
            Практический курс с нуля: HTML, CSS, JavaScript и реальные проекты.
          </p>
          <a href="#features" class="hero__button">Узнать больше</a>
        </div>
      </section>

      <!-- Преимущества -->
      <section class="features" id="features">
        <div class="container">
          <h2 class="features__title">Почему WebStart</h2>
          <div class="features__grid">
            <article class="feature-card">
              <h3 class="feature-card__title">Практика</h3>
              <p class="feature-card__text">80% времени — код и проекты.</p>
            </article>
            <!-- ещё 2 карточки -->
          </div>
        </div>
      </section>
    </main>

    <!-- Подвал -->
    <footer class="footer" id="contacts">
      <div class="container footer__inner">
        <p class="footer__copy">© 2026 WebStart</p>
        <p class="footer__email">hello@webstart.example</p>
        <nav class="footer__nav">
          <a href="https://t.me/example" class="footer__link">Telegram</a>
        </nav>
      </div>
    </footer>
  </body>
</html>
```

---

## Критерии оценки

| Критерий | Балл |
| -------- | ---- |
| Валидная структура HTML + подключён `style.css` | обязательно |
| Есть `header`, `main`, `footer` и hero-секция | обязательно |
| Секция с 3 карточками преимуществ | обязательно |
| Классы по БЭМ (блок__элемент) | обязательно |
| Hero выделяется визуально (фон, крупный заголовок, кнопка) | обязательно |
| Единый стиль карточек (отступы, рамка, шрифты) | обязательно |
| Код читаемый (отступы, комментарии к блокам) | обязательно |

---

## Бонус (по желанию)

1. **Логотип-картинка** — добавь `logo.png` в папку `images/` и подключи в шапке
2. **Плавный скролл** — в CSS: `html { scroll-behavior: smooth; }` для якорных ссылок
3. **Активная ссылка** — класс `header__link--active` у пункта «Главная» с другим цветом
4. **Вторая секция** — блок «Отзывы» с одной цитатой в `<blockquote>`

---

## Как сдать

1. Убедись, что `index.html` открывается в браузере без ошибок
2. Пройди [чеклист ошибок](lesson.md#4-чеклист-частых-ошибок) из урока
3. Покажи результат на следующем занятии или отправь папку `mini-landing/` преподавателю

---

## Частые ошибки — проверь себя

- [ ] Hero и карточки — внутри `<main>`, а не в `<header>`
- [ ] Кнопка hero — это `<a class="hero__button">`, а не голый текст
- [ ] Якорные ссылки совпадают с `id` секций (`#features` → `id="features"`)
- [ ] Не дублируешь `h1` — на странице только один главный заголовок
- [ ] `style.css` лежит в той же папке, что и `index.html`
- [ ] Подвал не «прилип» к карточкам — есть отступы у секций
- [ ] Текст на тёмном фоне подвала достаточно контрастный
