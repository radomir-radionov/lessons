# Урок 16 — Финальный проект (часть 2)

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**Формат:** проектное занятие  
**План занятия:** [lesson-plan.md](lesson-plan.md)  
**Задачи на уроке:** [tasks.md](tasks.md)  
**Сдача проекта:** [homework.md](homework.md)

---

## 1. Требования второго этапа

Этап 2 — финальная доработка лендинга из [урока 15](lessons-15/lesson.md). К концу занятия проект должен соответствовать **всем** критериям ниже.

### Обязательные требования этапа 2

| # | Требование | Где применить |
| - | ---------- | ------------- |
| 1 | **Flexbox** минимум в 2 местах | Header (logo + nav), Hero (текст + изображение) |
| 2 | **CSS Grid** минимум в 1 месте | Секция преимуществ (3 колонки) |
| 3 | **Адаптивность** | `@media` — мобильный (≤768px) и десктоп |
| 4 | **Форма** | Стилизованные поля, focus-состояния, кнопка |
| 5 | **Анимации** | Минимум 2: hover на кнопке/карточке + transition или keyframes |
| 6 | **Git** | Финальный коммит, проект на GitHub |
| 7 | **Полировка** | Единый стиль, читаемость, нет «сломанной» вёрстки |

### Чеклист готовности

```
□ Header: flex, nav на мобильном стекается или упрощается
□ Hero: flex, контент и картинка рядом на десктопе, столбик на мобильном
□ Features: grid 3 колонки → 1 на мобильном
□ Gallery: аккуратная сетка или flex-wrap
□ Form: стилизованные input, textarea, button с :focus
□ Анимация 1: hover на CTA или карточках (transition)
□ Анимация 2: badge, fade-in или пульсация (опционально keyframes)
□ Media query @media (max-width: 768px)
□ git push — проект на GitHub
□ README актуален
```

---

### Определения и понятия

#### Mobile-first

**Mobile-first** — подход, при котором сначала пишутся стили для мобильного, затем через `min-width` добавляются стили для больших экранов.

#### Desktop-first

**Desktop-first** — обратный подход: базовые стили для десктопа, `max-width` уменьшает раскладку для мобильного. На курсе чаще используем **desktop-first с `max-width`** для простоты.

#### Полировка (polish)

**Полировка** — финальные улучшения: выравнивание отступов, единые скругления, тени, hover-состояния, проверка на разных экранах.

#### Сдача проекта

**Сдача проекта** — предоставление готовой работы преподавателю: ссылка на GitHub + демонстрация в браузере.

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
```

На мобильном nav может стать колонкой:

```css
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

.hero__content {
  flex: 1;
}

.hero__image {
  flex: 1;
  max-width: 50%;
}
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

Вариант на Grid:

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

---

### Определения и понятия

#### justify-content / align-items

**`justify-content`** — выравнивание по главной оси flex. **`align-items`** — по поперечной оси.

#### gap

**`gap`** — отступ между элементами flex или grid без margin на каждом ребёнке.

#### grid-template-columns

**`grid-template-columns`** — определение колонок сетки. `repeat(3, 1fr)` — три равные колонки.

#### object-fit: cover

**`object-fit: cover`** — изображение заполняет контейнер с обрезкой, сохраняя пропорции.

---

## 3. Адаптивная вёрстка

### Типовой брейкпоинт

```css
/* Стили для мобильного — по умолчанию */

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

1. iPhone SE (375px) — всё читаемо, нет горизонтального скролла
2. iPad (768px) — переход раскладки
3. Desktop (1200px+) — контент не растягивается на всю ширину без `max-width`

### viewport

Убедись, что в `<head>` есть:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

### Определения и понятия

#### Media query

**Media query** — CSS-правило, применяемое при определённых условиях (ширина экрана, ориентация).

#### Горизонтальный скролл

**Горизонтальный скролл** на мобильном — частый баг: элемент шире экрана. Проверяй `overflow-x` и фиксированные `width` в px.

#### max-width контейнера

**Контейнер с `max-width`** — ограничивает ширину контента на больших экранах для читаемости.

---

## 4. Форма и анимации

### Стилизация формы

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

### Анимации для проекта

**Минимум 2:**

1. Hover на кнопке CTA или карточках преимуществ (`transition`)
2. Появление hero или пульсация badge (`@keyframes` — опционально)

```css
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
```

---

### Определения и понятия

#### :focus

**`:focus`** — псевдокласс элемента в фокусе (клик или Tab). Важен для доступности форм.

#### outline: none

**`outline: none`** — убирает стандартную обводку браузера. Всегда заменяй кастомным `:focus`-стилем.

#### HTML5-валидация

**HTML5-валидация** — атрибуты `required`, `type="email"` проверяют поля без JavaScript.

---

## 5. Итог урока

### Финальная сдача

По окончании урока 16 пройди полный чеклист из [homework.md](homework.md) — это **не обычное домашнее задание**, а форма сдачи проекта.

### Вопросы для самопроверки

1. Где в проекте использован Flexbox? Grid?
2. Как страница выглядит на ширине 375px?
3. Есть ли минимум 2 анимации?
4. Работает ли форма (валидация HTML5 при submit)?
5. Ссылка на GitHub открывается и показывает актуальный код?

### Поздравление

Финальный проект — итог всего модуля HTML & CSS. После сдачи у тебя будет **реальная работа в портфолио**, которую можно показать на собеседовании или в резюме.

---

### Что опционально после сдачи

| Тема | Описание |
| ---- | -------- |
| GitHub Pages | Бесплатный хостинг статического сайта |
| Open Graph meta | Превью при шаринге в соцсетях |
| JavaScript для формы | Отправка без перезагрузки (следующие модули) |
| Тёмная тема | `prefers-color-scheme: dark` |

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| Этап 2 | Финальная доработка проекта на уроке 16 |
| Mobile-first | Стили сначала для мобильного |
| Desktop-first | Стили сначала для десктопа |
| Media query | Условные CSS-правила по ширине экрана |
| Полировка | Финальные UX/UI-улучшения |
| object-fit | Поведение изображения в контейнере |
| :focus | Состояние элемента в фокусе |
| Сдача проекта | Передача готовой работы преподавателю |
| GitHub Pages | Хостинг статики с GitHub |
| Портфолио | Подборка работ для демонстрации навыков |
| Брейкпоинт | Точка смены раскладки (768px и др.) |
| CTA | Призыв к действию на лендинге |
