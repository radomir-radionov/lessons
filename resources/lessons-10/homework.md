# Домашнее задание — Урок 10

**Задание:** «Одна секция — два экрана»  
**Время:** ~35–45 минут  
**Папка:** `responsive-section/` (новый проект)

---

## Описание

Создай **одну HTML-страницу** с секцией, которая выглядит по-разному на мобильном и десктопе — без отдельных файлов, только CSS и media queries. Подход — **mobile-first**.

---

## Требования

### 1. Meta viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 2. Секция «О нас» (или «Команда»)

Одна секция с классом `.about` (или `.team`), внутри:

- Заголовок `h2`
- Текст-описание (2–3 абзаца)
- Блок с **3 карточками** участников/преимуществ

### 3. Mobile-first раскладка

| Экран | Ширина | Раскладка |
| ----- | ------ | --------- |
| Мобильный | < 768px | Карточки в столбик, текст на всю ширину |
| Планшет | ≥ 768px | Карточки в 2 колонки (2+1 или 2 в ряд) |
| Десктоп | ≥ 1024px | Карточки в 3 колонки в ряд, текст и карточки могут быть в две колонки (текст слева, карточки справа) |

### 4. Media queries

- Только `@media (min-width: ...)` — mobile-first
- Минимум 2 брейкпоинта: `768px` и `1024px`
- Базовые стили без media query — для мобильного

### 5. Типографика

- `h2` на мобильном: 24px, на десктопе (1024px+): 36px
- Основной текст: 16px на всех экранах

### 6. Один файл

Всё в одном `index.html` + `style.css`. **Не создавай** отдельные `mobile.html` и `desktop.html`.

---

## Пример структуры

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>О нас</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="about">
      <div class="container">
        <h2 class="about__title">Наша команда</h2>
        <p class="about__text">Мы создаём полезные продукты...</p>
        <div class="about__cards">
          <article class="card">...</article>
          <article class="card">...</article>
          <article class="card">...</article>
        </div>
      </div>
    </section>
  </body>
</html>
```

```css
/* База — мобильный */
.about__cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about__title {
  font-size: 24px;
}

@media (min-width: 768px) {
  .about__cards {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    width: calc(50% - 8px);
  }
}

@media (min-width: 1024px) {
  .about__title {
    font-size: 36px;
  }
  .card {
    width: calc(33.333% - 11px);
  }
}
```

---

## Критерии оценки

| Критерий | Балл |
| -------- | ---- |
| Meta viewport в `<head>` | обязательно |
| Mobile-first: база без media query = мобильный | обязательно |
| `@media (min-width: 768px)` | обязательно |
| `@media (min-width: 1024px)` | обязательно |
| Три разных раскладки на 375px / 768px / 1024px | обязательно |
| Один HTML-файл (не два) | обязательно |
| Нет `@media (max-width: ...)` | обязательно |

---

## Бонус (по желанию)

1. **Скрытый на мобильном блок** — декоративный элемент виден только на `min-width: 1024px`
2. **Горизонтальная раскладка «текст + карточки»** на десктопе: слева текст, справа сетка карточек
3. **Комментарии в CSS** — пометь блоки: `/* Mobile */`, `/* Tablet */`, `/* Desktop */`

---

## Как сдать

1. Проверь в DevTools: 375px, 768px, 1024px
2. Сделай 3 скриншота (по одному на каждую ширину)
3. Покажи на следующем занятии или отправь папку `responsive-section/`

---

## Частые ошибки — проверь себя

- [ ] Базовые стили — для мобильного, не для десктопа
- [ ] Используешь `min-width`, а не `max-width`
- [ ] Meta viewport есть в `<head>`
- [ ] На 375px карточки в столбик
- [ ] На 1024px — три колонки (или задуманная десктопная раскладка)
- [ ] Один `index.html`, не два файла для разных устройств
