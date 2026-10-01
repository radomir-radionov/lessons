# Домашнее задание — Урок 14

**Задание:** «Секция на Tailwind»  
**Время:** ~30–45 минут  
**Файл:** `tailwind-section.html` (новый файл или доработка `frameworks-notes.html`)

---

## Описание

Возьми **одну секцию** из своего проекта (визитка из урока 1, практика с Grid/Flex или страница с урока) и **перепиши её полностью на Tailwind CSS** через CDN. Цель — почувствовать utility-first подход на реальном блоке.

---

## Требования

1. **Подключение Tailwind** через CDN:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

2. **Выбери секцию** для переписывания (одну из):
   - Hero-блок с заголовком и кнопкой
   - Секция «Преимущества» с 3 карточками
   - Footer с контактами

3. **Не используй свой CSS-файл** — только Tailwind-классы в HTML (inline utility)

4. **Адаптивность:**
   - На мобильном — одна колонка
   - На `md:` и выше — 2 или 3 колонки (для карточек)

5. **Минимум 10 разных Tailwind-классов**, например:
   - отступы: `p-4`, `mt-8`, `gap-6`
   - flex/grid: `flex`, `grid`, `grid-cols-1`, `md:grid-cols-3`
   - типографика: `text-2xl`, `font-bold`, `text-center`
   - цвета: `bg-gray-100`, `text-indigo-600`

6. **Комментарий в HTML** — какую секцию переписал и почему выбрал Tailwind для неё

---

## Пример структуры (секция преимуществ)

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Секция на Tailwind</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-50 min-h-screen">
    <!-- Переписана секция "Преимущества" с bootstrap-page.html -->
    <section class="max-w-6xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-10">Наши преимущества</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 class="text-xl font-semibold mb-2">Быстро</h3>
          <p class="text-gray-600">Описание преимущества.</p>
        </div>
        <!-- ещё 2 карточки -->
      </div>
    </section>
  </body>
</html>
```

---

## Критерии оценки

| Критерий | Балл |
| -------- | ---- |
| Tailwind подключён через CDN | обязательно |
| Секция полностью на utility-классах (без отдельного CSS) | обязательно |
| Адаптив через префиксы `md:` или `lg:` | обязательно |
| Минимум 10 разных Tailwind-классов | обязательно |
| Секция визуально аккуратная и читаемая | обязательно |
| Комментарий о выборе секции | обязательно |
| Hover-эффекты через `hover:` | бонус |

---

## Бонус (по желанию)

1. **Две версии рядом** — Bootstrap и Tailwind в одном файле (две секции) для визуального сравнения
2. **Тёмная тема** — `dark:` классы Tailwind (если CDN поддерживает)
3. **Кастомный цвет** — настройка через `tailwind.config` в `<script>` на странице

---

## Как сдать

1. Открой `tailwind-section.html` в браузере
2. Проверь отображение на мобильном (DevTools → Toggle device toolbar)
3. Покажи на следующем занятии или отправь файл преподавателю

---

## Частые ошибки — проверь себя

- [ ] Не подключён свой `style.css` параллельно с Tailwind
- [ ] Классы `md:grid-cols-3` написаны без пробела (`md:grid-cols-3`, не `md grid-cols-3`)
- [ ] Контейнер ограничен по ширине (`max-w-*` + `mx-auto`)
- [ ] Текст не прилипает к краям (`px-4` или `p-4`)
- [ ] Секция содержит осмысленный контент, а не только заглушки «Lorem»
