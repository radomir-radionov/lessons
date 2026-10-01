# Урок 10 — Mobile-first вёрстка

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**План занятия:** [lesson-plan.md](lesson-plan.md) · **Задачи:** [tasks.md](tasks.md) · **Домашнее задание:** [homework.md](homework.md)

> Это **справочник**, а не текст для чтения вслух. На уроке проходи только разделы из [плана](lesson-plan.md#тайминг-60-минут). Остальное — для практики и домашнего задания.

**Полезные ссылки:** [MDN — Mobile-first](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) · [MDN — Using the viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

---

## Навигация

| § | Тема | На уроке |
| --- | --- | --- |
| [1](#1-подход-mobile-first) | Подход mobile-first | ✅ 10 мин |
| [2](#2-брейкпоинты) | Брейкпоинты | ✅ 8 мин |
| [3](#3-meta-viewport-подробно) | Meta viewport | ✅ 7 мин |
| [4](#4-практические-паттерны-mobile-first) | Паттерны mobile-first | ✅ 7 мин |
| [5](#5-итог-урока) | Итог и ДЗ | ✅ 5 мин |

---

## 1. Подход mobile-first

### Desktop-first vs mobile-first

**Desktop-first** — базовые стили для широкого экрана, media query с `max-width` для узкого:

```css
.columns {
  display: flex;
}

@media (max-width: 768px) {
  .columns {
    flex-direction: column;
  }
}
```

**Mobile-first** — обратная логика: база для мобильного, `min-width` добавляет сложность:

```css
.columns {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .columns {
    flex-direction: row;
  }

  .column {
    flex: 1;
  }
}
```

### Зачем mobile-first

| Преимущество | Объяснение |
| ------------ | ---------- |
| Меньше кода на мобильных | Браузер не загружает лишние стили |
| Приоритет контенту | Сначала думаем о том, что видит пользователь на телефоне |
| Проще расширять | Добавляем сложность, а не убираем |
| Статистика | Большинство пользователей заходят с мобильных |

### Аналогия

**Desktop-first** — строишь большой дом, потом сносишь комнаты для квартиры.  
**Mobile-first** — начинаешь с однокомнатной квартиры, потом достраиваешь этажи.

### Ключевые понятия

| Термин | Определение |
| ------ | ----------- |
| **Mobile-first** | Базовые стили для мобильных, расширение через `min-width` media queries |
| **Desktop-first** | Базовые стили для десктопа, упрощение через `max-width` media queries |
| **Прогрессивное улучшение** | Базовая версия работает везде, на широких экранах — улучшения |

---

## 2. Брейкпоинты

### Стандартные брейкпоинты

| Зона | Ширина | Устройства | Media query |
| ---- | ------ | ---------- | ----------- |
| Мобильный | < 768px | Телефоны | Базовые стили (без query) |
| Планшет | 768px – 1023px | Планшеты, крупные телефоны | `@media (min-width: 768px)` |
| Десктоп | ≥ 1024px | Ноутбуки, мониторы | `@media (min-width: 1024px)` |

### Три уровня раскладки

```css
/* 1. Мобильный — база */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* 2. Планшет */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 3. Десктоп */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
```

### Каскад media queries

Стили из `768px` действуют и на `1024px`, пока их не переопределят. В каждом брейкпоинте пиши **только отличия**:

```css
h1 {
  font-size: 28px; /* мобильный */
}

@media (min-width: 768px) {
  h1 {
    font-size: 36px; /* планшет + десктоп */
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 48px; /* только десктоп */
  }
}
```

> Брейкпоинты — ориентиры, не закон природы. 768px и 1024px — распространённые значения в индустрии.

---

## 3. Meta viewport подробно

### Зачем нужен viewport

Без `<meta name="viewport">` мобильный браузер считает, что страница рассчитана на ~980px, и **уменьшает** её. Текст становится мелким, элементы — крошечными.

### Стандартная запись

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Разбор атрибутов

| Параметр | Значение | Что делает |
| -------- | -------- | ---------- |
| `width=device-width` | — | Ширина viewport = ширина экрана устройства |
| `initial-scale=1.0` | 1.0 | Начальный масштаб 100%, без уменьшения |
| `maximum-scale=1.0` | 1.0 | (опционально) Запрет увеличения — **не рекомендуется** |
| `user-scalable=no` | — | (опционально) Запрет зума — **не рекомендуется** |

> Не блокируй зум — пользователи с плохим зрением должны иметь возможность увеличить текст.

### Связь viewport и CSS

| Понятие | Описание |
| ------- | -------- |
| **CSS-пиксель** | Логическая единица. На Retina 1 CSS-пиксель ≈ 2–3 физических |
| **Device pixel ratio (DPR)** | Соотношение физических пикселей к CSS-пикселям |
| **Ширина в DevTools** | 375px — это CSS-пиксели, с которыми работают media queries |

### Демонстрация проблемы

1. Создай HTML **без** meta viewport
2. Открой в DevTools (iPhone) — страница выглядит «уменьшенной»
3. Добавь meta viewport → страница в натуральную величину

---

## 4. Практические паттерны mobile-first

### Паттерн 1: колонки

```css
.cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .cards {
    flex-direction: row;
  }

  .card {
    flex: 1;
  }
}
```

### Паттерн 2: шапка

```css
.header__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
}

@media (min-width: 768px) {
  .header__inner {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

### Паттерн 3: скрытие элементов

```css
.sidebar {
  display: none;
}

@media (min-width: 1024px) {
  .sidebar {
    display: block;
  }
}
```

### Паттерн 4: контейнер с padding

```css
.container {
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
  }
}
```

### Переписывание desktop-first → mobile-first

| Desktop-first | Mobile-first |
| ------------- | ------------ |
| База = широкий экран | База = узкий экран |
| `@media (max-width: 768px)` | `@media (min-width: 768px)` |
| Убираем сложность | Добавляем сложность |
| `flex-direction: column` в query | `flex-direction: row` в query |

**Алгоритм:**

1. Стили из `max-width` query → это твоя **база**
2. Стили вне query → перенеси в `min-width` query
3. Удали старый `max-width` query

### Частые ошибки

| Проблема | Решение |
| -------- | ------- |
| Стили desktop-first остались | База = мобильный, `min-width` для расширения |
| Мелкий текст без zoom | Проверить `<meta name="viewport">` |
| Брейкпоинт не срабатывает | `min-width: 768px` срабатывает при ≥ 768 |
| Дублирование стилей | Общее в базу, в query — только отличия |

---

## 5. Итог урока

### Что мы узнали

1. **Mobile-first** — базовые стили для мобильного, расширение через `min-width`
2. **Брейкпоинты** 768px и 1024px — стандартные точки переключения
3. **Meta viewport** — обязателен для корректного отображения на телефонах
4. **Переписывание** desktop-first кода в mobile-first
5. **Один HTML-файл** — разная вёрстка через CSS

### Вопросы для самопроверки

1. Чем mobile-first отличается от desktop-first?
2. Какой media query используется в mobile-first — `min-width` или `max-width`?
3. Что делает `width=device-width` в meta viewport?
4. При какой ширине срабатывает `@media (min-width: 768px)`?
5. Зачем не блокировать зум (`user-scalable=no`)?
6. Как переписать desktop-first код в mobile-first?

### Домашнее задание

Выполни задание **«Одна секция — два экрана»** → [homework.md](homework.md)

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| Mobile-first | Базовые стили для мобильного, расширение для десктопа |
| Desktop-first | Базовые стили для десктопа, упрощение для мобильного |
| Брейкпоинт | Ширина экрана, при которой меняется раскладка |
| `min-width` | Media query: стили при ширине ≥ значения |
| `max-width` | Media query: стили при ширине ≤ значения |
| 768px | Брейкпоинт мобильный → планшет |
| 1024px | Брейкпоинт планшет → десктоп |
| Meta viewport | Тег для корректного масштаба на мобильных |
| `width=device-width` | Viewport = ширина экрана устройства |
| `initial-scale=1.0` | Начальный масштаб 100% |
| CSS-пиксель | Логическая единица ширины в веб-разработке |
| Device pixel ratio | Соотношение физических и CSS-пикселей |
| Прогрессивное улучшение | База работает везде, улучшения — на мощных устройствах |
| Каскад media queries | Стили меньших брейкпоинтов наследуются большими |
