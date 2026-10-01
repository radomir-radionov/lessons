# Практические задачи — Урок 16 (Финальный проект, этап 2)

**Время на занятии:** 30–52 мин (~22 минуты)  
**Папка:** `final-project/` (продолжение с урока 15)  
**Порядок:** выполняй задачи по порядку; каждая опирается на предыдущую

---

## Задача 1 — «Header и Hero на Flexbox» (5 мин)

### Задание

1. Сделай `.header` flex-контейнером: логотип слева, навигация справа (`justify-content: space-between`)
2. Сделай `.nav` flex с `gap` между ссылками
3. Сделай `.hero` flex: текст и изображение в ряд на десктопе (`align-items: center`, `gap: 2rem`)

### Критерии выполнения

- [ ] Header использует `display: flex`
- [ ] Nav использует `display: flex` с отступами между ссылками
- [ ] Hero — flex-ряд с контентом и изображением
- [ ] Элементы выровнены аккуратно

### Подсказка

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero {
  display: flex;
  align-items: center;
  gap: 2rem;
}
```

---

## Задача 2 — «Преимущества на CSS Grid» (5 мин)

### Задание

1. Оберни карточки преимуществ в контейнер `.features__grid`
2. Задай `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `gap: 2rem`
3. Стилизуй `.feature-card`: фон, padding, border-radius, лёгкая тень

### Критерии выполнения

- [ ] Использован CSS Grid с 3 колонками
- [ ] Карточки одинаковой высоты в ряду (при необходимости `align-items: stretch`)
- [ ] Карточки визуально отделены (фон, тень или border)
- [ ] Gap между карточками задан

### Подсказка

```css
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.feature-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

---

## Задача 3 — «Адаптивная вёрстка» (5 мин)

### Задание

Добавь `@media (max-width: 768px)`:

1. Hero: `flex-direction: column`, изображение на всю ширину
2. Features grid: одна колонка (`grid-template-columns: 1fr`)
3. Header: nav под логотипом (`flex-direction: column`) или упрощённый вариант
4. Gallery: 2 или 1 колонка на мобильном

### Критерии выполнения

- [ ] Есть media query `@media (max-width: 768px)`
- [ ] Hero на мобильном — столбик, без горизонтального скролла
- [ ] Карточки преимуществ в одну колонку
- [ ] Проверено в DevTools (375px и 768px)

### Подсказка

```css
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .features__grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Задача 4 — «Стилизация формы» (4 мин)

### Задание

Стилизуй секцию `#contact`:

1. Поля `input` и `textarea`: width 100%, padding, border, border-radius
2. Состояние `:focus` — цвет рамки из `--color-primary`, лёгкая тень
3. Кнопка submit: стили как CTA, `cursor: pointer`
4. Добавь `required` и `type="email"` для валидации HTML5

### Критерии выполнения

- [ ] Поля формы стилизованы единообразно
- [ ] Есть видимый `:focus`-стиль (не только outline браузера)
- [ ] Кнопка выглядит как основная CTA
- [ ] Email-поле с `type="email"`, обязательные поля с `required`

### Подсказка

```css
.form__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}
```

---

## Задача 5 — «Анимации» (4 мин)

### Задание

Добавь минимум **2 анимации**:

1. Hover на карточках преимуществ или кнопке CTA — `transition` + `transform` / `box-shadow`
2. Вторая анимация на выбор:
   - Пульсация badge «Новинка» в hero (`@keyframes`)
   - Fade-in hero при загрузке (`@keyframes` + `animation`)

### Критерии выполнения

- [ ] Минимум 1 анимация через `transition` на `:hover`
- [ ] Минимум 1 анимация через `transition` или `@keyframes`
- [ ] Длительность анимаций 150–400 мс (для hover)
- [ ] Анимации не мешают чтению контента

### Подсказка

```css
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

---

## Задача 6 — «Полировка и Git» (4 мин)

### Задание

1. Пройдись по всем секциям: единые отступы, скругления, цвета из переменных
2. Проверь все ссылки и изображения
3. Обнови README (описание, как открыть, скриншот — опционально)
4. Финальный коммит: `git commit -m "Complete final project: layout, responsive, animations"`
5. `git push` на GitHub

### Критерии выполнения

- [ ] Нет битых изображений и пустых `href="#"` без смысла
- [ ] Единый визуальный стиль по всей странице
- [ ] README актуален
- [ ] Финальный коммит в Git
- [ ] Проект запушен на GitHub

### Подсказка

```bash
git add .
git commit -m "Complete final project: layout, responsive, animations"
git push
```

---

## Итог практики (этап 2)

После всех задач пройди **чеклист сдачи** из [homework.md](homework.md) вместе с преподавателем.

Краткий чеклист:

- [ ] Flexbox в header и hero
- [ ] Grid в преимуществах
- [ ] Адаптив @media (max-width: 768px)
- [ ] Стилизованная форма с :focus
- [ ] 2+ анимации
- [ ] GitHub — актуальный код

**Поздравляем с завершением модуля HTML & CSS!**
