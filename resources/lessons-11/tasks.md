# Практические задачи — Урок 11

**Время на занятии:** 32–55 мин (~23 минуты)  
**Папка:** `sass-project/`  
**Порядок:** задачи идут по нарастающей сложности

---

## Задача 1 — «Инициализация проекта» (5 мин)

### Задание

Создай папку `sass-project/` и инициализируй npm-проект:

1. `npm init -y` — создай `package.json`
2. Создай `index.html` с базовой структурой
3. Создай `.gitignore` с строкой `node_modules/`

### Критерии выполнения

- [ ] Папка `sass-project/` существует
- [ ] Файл `package.json` создан
- [ ] `index.html` с `DOCTYPE`, `head`, `body`
- [ ] `.gitignore` содержит `node_modules/`

### Подсказка

```bash
mkdir sass-project
cd sass-project
npm init -y
```

---

## Задача 2 — «Установка Parcel» (5 мин)

### Задание

Установи Parcel как dev-зависимость:

1. `npm install --save-dev parcel`
2. В `package.json` добавь скрипт: `"start": "parcel index.html"`
3. Запусти `npm start` и открой страницу в браузере

### Критерии выполнения

- [ ] Parcel в `devDependencies` в `package.json`
- [ ] Скрипт `start` в секции `scripts`
- [ ] Dev-сервер запускается без ошибок
- [ ] Страница открывается в браузере

### Подсказка

```bash
npm install --save-dev parcel
```

```json
"scripts": {
  "start": "parcel index.html"
}
```

---

## Задача 3 — «Первый Sass-файл» (5 мин)

### Задание

Создай `styles.scss` и подключи к HTML:

1. В `styles.scss` — переменные:
   ```scss
   $primary-color: #2563eb;
   $text-color: #1f2937;
   $font-family: 'Segoe UI', sans-serif;
   ```
2. Стили для `body`: цвет текста, шрифт
3. В `index.html`: `<link rel="stylesheet" href="styles.scss">`

### Критерии выполнения

- [ ] Файл `styles.scss` создан
- [ ] Три переменные объявлены с `$`
- [ ] Переменные используются в стилях
- [ ] Стили применяются через Parcel dev-сервер

### Подсказка

```scss
$primary-color: #2563eb;
$text-color: #1f2937;
$font-family: 'Segoe UI', sans-serif;

body {
  color: $text-color;
  font-family: $font-family;
  margin: 0;
}
```

---

## Задача 4 — «Вложенность и кнопка» (5 мин)

### Задание

Добавь в `index.html` шапку с классом `.header` и кнопку `.btn`.

В `styles.scss` используй **вложенность**:

1. `.header` — фон `$primary-color`, padding, белый текст
2. Внутри `.header` вложи стили для `.header__title`
3. `.btn` — фон `$primary-color`, padding, border-radius; `&:hover` — затемнение

### Критерии выполнения

- [ ] Вложенность селекторов в `.header`
- [ ] Псевдокласс `&:hover` у кнопки
- [ ] Использованы переменные цветов
- [ ] Кнопка меняет цвет при наведении

### Подсказка

```scss
.header {
  background-color: $primary-color;
  color: white;
  padding: 16px;

  &__title {
    margin: 0;
    font-size: 24px;
  }
}

.btn {
  background-color: $primary-color;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

---

## Задача 5 — «Сборка проекта» (5 мин)

### Задание

Собери проект для продакшена:

1. Добавь скрипт в `package.json`: `"build": "parcel build index.html"`
2. Запусти `npm run build`
3. Проверь папку `dist/` — там готовые файлы
4. Открой `dist/index.html` в браузере

### Критерии выполнения

- [ ] Скрипт `build` в `package.json`
- [ ] Команда `npm run build` выполняется без ошибок
- [ ] Папка `dist/` создана с `index.html` и CSS
- [ ] Собранная страница отображается корректно

### Подсказка

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

```bash
npm run build
```

Добавь `dist/` в `.gitignore` (опционально).

---

## Итог практики

После выполнения всех задач у тебя должен быть проект:

- С `package.json` и установленным Parcel
- С `styles.scss` (переменные, вложенность)
- С dev-сервером (`npm start`) и сборкой (`npm run build`)

Покажи результат преподавателю: запусти `npm start` и покажи стили в браузере.
