# Урок 16 — Финальный проект (часть 2)

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**Формат:** проектное занятие  
**План занятия:** [lesson-plan.md](lesson-plan.md) · **Задачи:** [tasks.md](tasks.md) · **Сдача проекта:** [homework.md](homework.md)

> Это **справочник** и **чеклист финальной сдачи**. На уроке — layout, адаптив, форма, анимации и полировка. [homework.md](homework.md) — не обычное ДЗ, а форма сдачи проекта.

**Полезные ссылки:** [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) · [MDN — Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) · [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries)

---

## Навигация

| §                                          | Тема                 | На уроке  |
| ------------------------------------------ | -------------------- | --------- |
| [1](#1-требования-второго-этапа)           | Требования этапа 2   | ✅ 8 мин  |
| [2](#2-flexbox-и-grid-в-проекте)           | Flex и Grid          | ✅ 12 мин |
| [3](#3-адаптивная-вёрстка)                 | Адаптив              | ✅ 10 мин |
| [4](#4-итог-урока)                         | Итог и сдача         | ✅ 2 мин  |

---

## 1. Требования второго этапа

Финальная доработка лендинга из [части 1](lesson-plan.md). К концу занятия проект должен соответствовать **всем** критериям.

### Обязательные требования

| # | Требование | Где применить |
| - | ---------- | ------------- |
| 1 | **Flexbox** минимум в 2 местах | Header (logo + nav), Hero (текст + изображение) |
| 2 | **CSS Grid** минимум в 1 месте | Секция преимуществ (3 колонки) |
| 3 | **Адаптивность** | `@media` — мобильный (≤768px) и десктоп |
| 4 | **Форма** | Стилизованные поля, `:focus`, кнопка |
| 5 | **Анимации** | Минимум 2: hover + transition или keyframes |
| 6 | **Git** | Финальный коммит, проект на GitHub |
| 7 | **Полировка** | Единый стиль, читаемость, нет «сломанной» вёрстки |

### Чеклист готовности

| Пункт | ☐ |
| ----- | - |
| Header: flex, nav стекается на мобильном | |
| Hero: flex, столбик на мобильном | |
| Features: grid 3 колонки → 1 на мобильном | |
| Gallery: сетка или flex-wrap | |
| Form: стилизованные input, textarea, button с `:focus` | |
| Анимация 1: hover на CTA или карточках | |
| Анимация 2: fade-in, пульсация или keyframes | |
| `@media (max-width: 768px)` | |
| `git push` — проект на GitHub | |
| README актуален | |

### Ключевые понятия

| Термин | Определение |
| ------ | ----------- |
| **Mobile-first** | Стили сначала для мобильного, затем `min-width` для больших экранов |
| **Desktop-first** | Базовые стили для десктопа, `max-width` для мобильного |
| **Полировка** | Финальные улучшения: отступы, тени, hover, проверка на экранах |
| **Сдача проекта** | Ссылка на GitHub + демонстрация в браузере |

---

## 2. Flexbox и Grid в проекте

### Header на Flexbox

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }
  .nav {
    flex-direction: column;
    align-items: center;
  }
}
```

### Hero на Flexbox

```css
.hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 4rem 2rem;
}

.hero__content { flex: 1; }
.hero__image { flex: 1; max-width: 50%; }
```

### Преимущества на CSS Grid

```css
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
```

### Галерея

```css
.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.gallery__grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
```

### Форма

```css
.form__input,
.form__textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form__input:focus,
.form__textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.form__btn {
  padding: 0.75rem 2rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.2s ease;
}

.form__btn:hover {
  background-color: #4f46e5;
  transform: translateY(-2px);
}
```

### Анимации (минимум 2)

```css
/* 1 — hover на карточках */
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* 2 — fade-in hero (опционально keyframes) */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero__content {
  animation: fadeIn 0.6s ease-out;
}
```

| Свойство | Назначение |
| -------- | ---------- |
| `justify-content` / `align-items` | Выравнивание по главной / поперечной оси flex |
| `gap` | Отступ между элементами flex/grid |
| `grid-template-columns` | Определение колонок (`repeat(3, 1fr)`) |
| `object-fit: cover` | Изображение заполняет контейнер с обрезкой |
| `:focus` | Состояние элемента в фокусе (доступность форм) |

---

## 3. Адаптивная вёрстка

### Типовой брейкпоинт

```css
/* Базовые стили — десктоп */

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero__image {
    max-width: 100%;
  }
}
```

### Что проверить в DevTools

| Устройство | Ширина | Проверка |
| ---------- | ------ | -------- |
| iPhone SE | 375px | Нет горизонтального скролла, текст читаем |
| iPad | 768px | Переход раскладки |
| Desktop | 1200px+ | Контент с `max-width`, не растянут на всю ширину |

### viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Частые баги

| Проблема | Решение |
| -------- | ------- |
| Горизонтальный скролл на мобильном | Проверить фиксированные `width` в px, `overflow-x` |
| Текст слишком мелкий | Минимум 16px для body на мобильном |
| Изображения вылезают | `max-width: 100%` на `img` |

| Термин | Определение |
| ------ | ----------- |
| **Media query** | CSS-правило при определённых условиях (ширина экрана) |
| **Брейкпоинт** | Точка смены раскладки (768px и др.) |
| **max-width контейнера** | Ограничение ширины контента для читаемости |

---

## 4. Итог урока

### Финальная сдача

Пройди полный чеклист из [homework.md](homework.md) — это **форма сдачи проекта**, не обычное домашнее задание.

### Вопросы для самопроверки

1. Где в проекте использован Flexbox? Grid?
2. Как страница выглядит на ширине 375px?
3. Есть ли минимум 2 анимации?
4. Работает ли форма (валидация HTML5: `required`, `type="email"`)?
5. Ссылка на GitHub открывается и показывает актуальный код?

### Опционально после сдачи

| Тема | Описание |
| ---- | -------- |
| GitHub Pages | Бесплатный хостинг статического сайта |
| Open Graph meta | Превью при шаринге в соцсетях |
| JavaScript для формы | Отправка без перезагрузки (следующие модули) |
| Тёмная тема | `prefers-color-scheme: dark` |

Финальный проект — итог всего модуля HTML & CSS. После сдачи у тебя будет **реальная работа в портфолио**.

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| Этап 2 | Финальная доработка проекта |
| Mobile-first | Стили сначала для мобильного |
| Desktop-first | Стили сначала для десктопа |
| Media query | Условные CSS-правила по ширине экрана |
| Полировка | Финальные UX/UI-улучшения |
| object-fit | Поведение изображения в контейнере |
| :focus | Состояние элемента в фокусе |
| Сдача проекта | Передача готовой работы преподавателю |
| GitHub Pages | Хостинг статики с GitHub |
| Брейкпоинт | Точка смены раскладки |
| CTA | Призыв к действию на лендинге |
| HTML5-валидация | `required`, `type="email"` без JavaScript |
