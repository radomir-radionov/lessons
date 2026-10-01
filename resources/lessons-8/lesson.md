# Урок 8 — Работа с формами

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
[План занятия](lesson-plan.md) · [Задачи](tasks.md) · [Домашнее задание](homework.md)


**Полезные ссылки:** [MDN — Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) · [MDN — input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

---

## Навигация

| §                                                          | Тема              | На уроке  |
| ---------------------------------------------------------- | ----------------- | --------- |
| [1](#1-основы-html-форм)                                   | Основы форм       | ✅ 8 мин  |
| [2](#2-поля-ввода-input-и-типы)                            | Поля input        | ✅ 10 мин |
| [3](#3-подписи-label-и-доступность)                        | label             | ✅ 6 мин  |
| [4](#4-textarea-select-и-button)                             | textarea, select  | ✅ 6 мин  |
| [5](#5-валидация-required-и-fieldset)                      | required, fieldset| ✅ 2 мин  |
| [6](#6-стилизация-полей-ввода)                             | Стилизация        | ✅ 6 мин  |
| [7](#7-итог-урока)                                         | Итог и ДЗ         | ✅ 5 мин  |

---

## 1. Основы HTML-форм

**Форма** — способ собрать данные от пользователя и отправить на сервер: регистрация, заказ, поиск.

```html
<form action="/submit" method="post">
  <!-- поля формы -->
</form>
```

| Атрибут  | Назначение                                      |
| -------- | ----------------------------------------------- |
| `action` | URL, куда отправляются данные                   |
| `method` | `get` (данные в URL) или `post` (в теле запроса) |

На учебном проекте: `action="#"` — форма не отправит данные, но браузерная валидация (`required`) работает.

### Атрибут name

Каждое поле должно иметь **`name`** — имя, под которым данные отправятся на сервер:

```html
<input type="text" name="username" />
```

При отправке: `username=Алексей`.

### Как работает отправка

1. Пользователь заполняет поля
2. Нажимает «Отправить» (`type="submit"`)
3. Браузер проверяет валидацию (`required`, `type="email"`)
4. Если всё ок — отправляет данные на `action` методом `method`

> Без бэкенда данные никуда не попадут. На этом уроке — **разметка и стили** формы.

---

## 2. Поля ввода: input и типы

Основной элемент однострочного ввода — **`<input>`**. Тип задаётся атрибутом **`type`**.

### Текстовые поля

```html
<input type="text" name="name" placeholder="Ваше имя" />
<input type="email" name="email" placeholder="email@example.com" />
<input type="password" name="password" />
<input type="tel" name="phone" placeholder="+7 (999) 123-45-67" />
<input type="number" name="age" min="1" max="120" />
```

| type       | Назначение                          |
| ---------- | ----------------------------------- |
| `text`     | Произвольный текст                  |
| `email`    | Email с базовой валидацией формата  |
| `password` | Пароль (символы скрыты)             |
| `tel`      | Номер телефона                      |
| `number`   | Число                               |
| `url`      | Адрес сайта                         |
| `date`     | Выбор даты                          |

### checkbox и radio

```html
<input type="checkbox" name="subscribe" id="subscribe" />
<label for="subscribe">Подписаться на рассылку</label>

<input type="radio" name="gender" value="male" id="male" />
<label for="male">Мужской</label>

<input type="radio" name="gender" value="female" id="female" />
<label for="female">Женский</label>
```

| type       | Поведение                                    |
| ---------- | -------------------------------------------- |
| `checkbox` | Несколько галочек независимо                 |
| `radio`    | Один вариант из группы — **одинаковый `name`** |

### placeholder

Подсказка внутри пустого поля. Исчезает при вводе.

> **`placeholder` не заменяет `<label>`** — подпись должна быть видна всегда.

---

## 3. Подписи: label и доступность

Каждое поле должно иметь **подпись** — `<label>`:

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" />
```

| Способ связи       | Как работает                                      |
| ------------------ | ------------------------------------------------- |
| `for` + `id`       | `for="email"` совпадает с `id="email"` — клик по label фокусирует поле |
| Обёртка            | `<label><input /> Текст</label>` — удобно для checkbox/radio |

Программы чтения с экрана связывают label с полем — **доступность**.

---

## 4. textarea, select и button

### textarea — многострочный текст

```html
<label for="message">Сообщение</label>
<textarea id="message" name="message" rows="5" placeholder="Ваш текст..."></textarea>
```

| Атрибут | Назначение                    |
| ------- | ----------------------------- |
| `rows`  | Высота в строках              |
| `cols`  | Ширина (лучше через CSS)      |

### select — выпадающий список

```html
<label for="city">Город</label>
<select id="city" name="city">
  <option value="">Выберите город</option>
  <option value="minsk">Минск</option>
  <option value="moscow">Москва</option>
</select>
```

- `value` — отправляемое значение
- Текст между тегами — то, что видит пользователь

### button — кнопки

```html
<button type="submit">Отправить</button>
<button type="reset">Очистить</button>
<button type="button">Обычная кнопка</button>
```

| type     | Эффект                              |
| -------- | ----------------------------------- |
| `submit` | Отправляет форму                    |
| `reset`  | Сбрасывает поля                     |
| `button` | Обычная кнопка (для JS — позже)     |

> `<button type="submit">` гибче стилизуется, чем `<input type="submit">`.

---

## 5. Валидация: required и fieldset

### required — обязательное поле

```html
<input type="text" name="name" required />
<input type="email" name="email" required />
```

Браузер **не отправит** форму, пока обязательные поля не заполнены.

### HTML5-валидация (базовая)

| Механизм              | Эффект                        |
| --------------------- | ----------------------------- |
| `type="email"`        | Проверка формата email        |
| `type="url"`          | Проверка формата URL          |
| `required`            | Поле обязательно              |
| `min`, `max`          | Для `number` и `date`         |
| `minlength`, `maxlength` | Длина текста               |

### fieldset и legend — группировка

```html
<fieldset>
  <legend>Контактные данные</legend>
  <label for="name">Имя</label>
  <input type="text" id="name" name="name" required />
</fieldset>
```

| Элемент    | Назначение                    |
| ---------- | ----------------------------- |
| `<fieldset>` | Группа связанных полей      |
| `<legend>`   | Заголовок группы            |

---

## 6. Стилизация полей ввода

### Базовые стили

```css
.form__input,
.form__select,
.form__textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;
  box-sizing: border-box;
}
```

| Свойство              | Зачем                                           |
| --------------------- | ----------------------------------------------- |
| `box-sizing: border-box` | `width: 100%` учитывает padding и border   |
| `font-size: 16px`     | На iOS меньший шрифт вызывает зум при фокусе    |
| `font-family: inherit`| Единый шрифт с сайтом                           |

### :focus

```css
.form__input:focus,
.form__select:focus,
.form__textarea:focus {
  border-color: #4a90d9;
  outline: none;
  box-shadow: 0 0 0 2px rgba(74, 144, 217, 0.3);
}
```

Не убирай `outline` без замены — нужен видимый focus для клавиатуры.

### Группа поля и кнопка

```css
.form__group { margin-bottom: 16px; }
.form__label { display: block; margin-bottom: 6px; font-weight: 500; }

.form__btn {
  padding: 12px 24px;
  background-color: #4a90d9;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.form__btn:hover { background-color: #3a7bc8; }
.form__btn:focus { outline: 2px solid #2563eb; outline-offset: 2px; }
```

### Полная форма: пример

```html
<form class="form" action="#" method="post">
  <h2 class="form__title">Регистрация</h2>

  <div class="form__group">
    <label class="form__label" for="name">Имя</label>
    <input class="form__input" type="text" id="name" name="name" required />
  </div>

  <div class="form__group">
    <label class="form__label" for="email">Email</label>
    <input class="form__input" type="email" id="email" name="email" required />
  </div>

  <button class="form__btn" type="submit">Зарегистрироваться</button>
</form>
```

---

## 7. Итог урока

### Что мы узнали

1. **`<form>`** — контейнер для сбора данных (`action`, `method`)
2. **`<input>`** — поля разных типов (`text`, `email`, `password`, `checkbox`, `radio`)
3. **`<label>`** — подписи с связкой `for`/`id`
4. **`<textarea>`** и **`<select>`** — многострочный текст и выпадающий список
5. **`<button>`** — кнопки submit/reset
6. **`required`** — браузерная валидация обязательных полей
7. **`<fieldset>`** + **`<legend>`** — группировка полей
8. **CSS** — единая стилизация полей, `:focus`, `box-sizing`

### Вопросы для самопроверки

1. Зачем нужен атрибут `name` у поля формы?
2. Чем `type="checkbox"` отличается от `type="radio"`?
3. Почему у radio в группе одинаковый `name`?
4. Зачем нужен `<label>` и как он связан с полем?
5. Что делает атрибут `required`?
6. Зачем `box-sizing: border-box` на полях с `width: 100%`?
7. Чем `type="submit"` отличается от `type="button"`?

### Домашнее задание

Выполни задание **«Форма заказа»** → [homework.md](homework.md)

---

## Словарь терминов

| Термин       | Краткое определение                        |
| ------------ | ------------------------------------------ |
| Форма (form) | Элемент для сбора и отправки данных        |
| action       | URL отправки данных формы                  |
| method       | HTTP-метод: get или post                   |
| input        | Однострочное поле ввода                    |
| type         | Тип поля input                             |
| name         | Имя поля при отправке                      |
| label        | Подпись к полю формы                       |
| for          | Связь label с id поля                      |
| placeholder  | Подсказка внутри пустого поля              |
| textarea     | Многострочное поле ввода                   |
| select       | Выпадающий список                          |
| option       | Вариант в select                           |
| button       | Кнопка формы                               |
| submit       | Отправка формы                             |
| reset        | Сброс полей формы                          |
| required     | Обязательное поле                          |
| fieldset     | Группа полей формы                         |
| legend       | Заголовок fieldset                         |
| checkbox     | Поле-галочка                               |
| radio        | Выбор одного из группы                     |
| value        | Значение поля при отправке                 |
| Валидация    | Проверка данных перед отправкой            |
| box-sizing   | Учёт padding/border в width                |
| inherit      | Наследование значения от родителя          |
