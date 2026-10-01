# Урок 8 — Работа с формами

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**План занятия:** [lesson-plan.md](lesson-plan.md)  
**Задачи на уроке:** [tasks.md](tasks.md)  
**Домашнее задание:** [homework.md](homework.md)

---

## 1. Основы HTML-форм

**Форма** — способ собрать данные от пользователя и отправить их на сервер: регистрация, заказ, поиск, обратная связь.

### Тег form

```html
<form action="/submit" method="post">
  <!-- поля формы -->
</form>
```

| Атрибут | Назначение |
| --- | --- |
| `action` | URL, куда отправляются данные |
| `method` | Способ отправки: `get` (в URL) или `post` (в теле запроса) |

На учебном проекте без сервера используем `action="#"` — форма не отправит данные никуда, но браузерная валидация (`required`) будет работать.

### Атрибут name

Каждое поле должно иметь атрибут **`name`** — это имя, под которым данные отправятся на сервер:

```html
<input type="text" name="username" />
```

При отправке формы сервер получит пару: `username=Алексей`.

### Как работает отправка

1. Пользователь заполняет поля
2. Нажимает кнопку «Отправить» (`type="submit"`)
3. Браузер проверяет валидацию (`required`, `type="email"` и др.)
4. Если всё ок — отправляет данные на `action` методом `method`

> Без бэкенда (сервера) данные никуда не попадут. На этом уроке мы создаём **разметку и стили** формы.

---

### Определения и понятия

#### Форма (form)

**Форма** — HTML-элемент `<form>` для сбора и отправки пользовательских данных.

#### action

**`action`** — URL-адрес, на который отправляются данные формы при submit.

#### method

**`method`** — HTTP-метод отправки: `get` (данные в URL) или `post` (данные в теле запроса, безопаснее для паролей).

#### name (атрибут поля)

**`name`** — имя поля при отправке формы. Сервер получает данные в формате `name=значение`.

#### Submit (отправка формы)

**Submit** — действие отправки формы. Инициируется кнопкой `type="submit"` или Enter в поле.

---

## 2. Поля ввода: input и типы

Основной элемент для однострочного ввода — **`<input>`**. Тип поля задаётся атрибутом **`type`**:

### Текстовые поля

```html
<input type="text" name="name" placeholder="Ваше имя" />
<input type="email" name="email" placeholder="email@example.com" />
<input type="password" name="password" />
<input type="tel" name="phone" placeholder="+7 (999) 123-45-67" />
<input type="number" name="age" min="1" max="120" />
```

| type | Назначение |
| --- | --- |
| `text` | Произвольный текст |
| `email` | Email с базовой валидацией формата |
| `password` | Пароль (символы скрыты) |
| `tel` | Номер телефона |
| `number` | Число (с кнопками +/-) |
| `url` | Адрес сайта |
| `date` | Выбор даты (виджет браузера) |

### checkbox — галочка

```html
<input type="checkbox" name="subscribe" id="subscribe" />
<label for="subscribe">Подписаться на рассылку</label>
```

Можно выбрать несколько чекбоксов. Значение при отправке: `on` (если отмечен) или поле не отправляется.

### radio — выбор одного варианта

```html
<input type="radio" name="gender" value="male" id="male" />
<label for="male">Мужской</label>

<input type="radio" name="gender" value="female" id="female" />
<label for="female">Женский</label>
```

**Важно:** все radio в одной группе должны иметь **одинаковый `name`**. Разные `value` — разные варианты.

### placeholder

```html
<input type="text" placeholder="Введите имя" />
```

**`placeholder`** — подсказка внутри пустого поля. Исчезает при вводе.

> `placeholder` **не заменяет** `<label>`. Подпись поля должна быть видна всегда, а не только до ввода.

---

### Определения и понятия

#### input

**`<input>`** — HTML-элемент для однострочного ввода данных. Тип задаётся атрибутом `type`.

#### type (атрибут input)

**`type`** — тип поля ввода: `text`, `email`, `password`, `checkbox`, `radio` и др.

#### placeholder

**`placeholder`** — текст-подсказка внутри пустого поля. Не заменяет label.

#### checkbox

**Checkbox** — поле типа `checkbox`. Позволяет выбрать один или несколько вариантов (отдельные поля).

#### radio

**Radio** — поле типа `radio`. Позволяет выбрать **один** вариант из группы с одинаковым `name`.

#### value

**`value`** — значение поля, отправляемое на сервер. Для radio/checkbox задаётся явно.

---

## 3. Подписи: label и доступность

Каждое поле формы должно иметь **подпись** — элемент `<label>`:

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" />
```

### Связь for и id

- `for="email"` в `<label>` должен совпадать с `id="email"` в `<input>`
- Клик по label **фокусирует** связанное поле — удобно на мобильных
- Программы чтения с экрана связывают label с полем — **доступность**

### Альтернативный способ

Можно обернуть input внутрь label:

```html
<label>
  <input type="checkbox" name="agree" />
  Согласен с условиями
</label>
```

Удобно для чекбоксов и radio.

---

### Определения и понятия

#### label

**`<label>`** — подпись к полю формы. Связывается с полем через `for`/`id` или обёрткой.

#### for (атрибут label)

**`for`** — id элемента, с которым связан label. Клик по label фокусирует это поле.

#### Доступность форм

**Доступность форм** — практика, при которой формы удобны для всех: label на каждое поле, видимый focus, понятные ошибки.

---

## 4. textarea, select и button

### textarea — многострочный текст

```html
<label for="message">Сообщение</label>
<textarea id="message" name="message" rows="5" placeholder="Ваш текст..."></textarea>
```

| Атрибут | Назначение |
| --- | --- |
| `rows` | Высота в строках |
| `cols` | Ширина в символах (лучше задавать через CSS) |
| `placeholder` | Подсказка |

### select — выпадающий список

```html
<label for="city">Город</label>
<select id="city" name="city">
  <option value="">Выберите город</option>
  <option value="minsk">Минск</option>
  <option value="moscow">Москва</option>
  <option value="spb">Санкт-Петербург</option>
</select>
```

- `<option>` — вариант выбора
- `value` — значение, отправляемое на сервер
- Текст между тегами — то, что видит пользователь
- Первый пустой option — подсказка «Выберите...»

### button — кнопки

```html
<button type="submit">Отправить</button>
<button type="reset">Очистить</button>
<button type="button">Обычная кнопка</button>
```

| type | Эффект |
| --- | --- |
| `submit` | Отправляет форму (по умолчанию, если type не указан) |
| `reset` | Сбрасывает все поля к начальным значениям |
| `button` | Обычная кнопка (для JavaScript — позже) |

> Внутри `<form>` используй `<button type="submit">`, а не `<input type="submit">` — button гибче стилизуется.

---

### Определения и понятия

#### textarea

**`<textarea>`** — многострочное поле ввода текста.

#### select

**`<select>`** — выпадающий список для выбора одного варианта из нескольких.

#### option

**`<option>`** — вариант внутри `<select>`. Атрибут `value` — отправляемое значение.

#### button

**`<button>`** — кнопка. Тип (`submit`, `reset`, `button`) задаёт поведение.

---

## 5. Валидация: required и fieldset

### required — обязательное поле

```html
<input type="text" name="name" required />
<input type="email" name="email" required />
```

Браузер **не отправит** форму, пока обязательные поля не заполнены. Покажет встроенное сообщение об ошибке.

Также работает на `<select>`, `<textarea>`, checkbox (должен быть отмечен).

### fieldset и legend — группировка

```html
<fieldset>
  <legend>Контактные данные</legend>
  <label for="name">Имя</label>
  <input type="text" id="name" name="name" required />
  <!-- другие поля -->
</fieldset>
```

| Элемент | Назначение |
| --- | --- |
| `<fieldset>` | Группа связанных полей (визуальная рамка) |
| `<legend>` | Заголовок группы |

Используется для radio-групп, секций формы, улучшения доступности.

### HTML5-валидация (кратко)

Браузер умеет базовую валидацию без JavaScript:

- `type="email"` — проверка формата email
- `type="url"` — проверка формата URL
- `required` — поле обязательно
- `min`, `max` — для `number` и `date`
- `minlength`, `maxlength` — длина текста

Подробная кастомная валидация — с JavaScript (позже).

---

### Определения и понятия

#### required

**`required`** — атрибут, делающий поле обязательным. Браузер блокирует отправку пустой формы.

#### fieldset

**`<fieldset>`** — группировка связанных полей формы. Имеет рамку и улучшает структуру.

#### legend

**`<legend>`** — заголовок группы `<fieldset>`.

#### Валидация формы

**Валидация формы** — проверка корректности введённых данных перед отправкой.

---

## 6. Стилизация полей ввода

По умолчанию поля формы выглядят по-разному в разных браузерах. CSS позволяет сделать **единый стиль**.

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

**`box-sizing: border-box`** — чтобы `width: 100%` учитывал padding и border (не вылезал за контейнер).

**`font-size: 16px`** — на iOS поля с меньшим шрифтом вызывают зум при фокусе.

### Состояние :focus

```css
.form__input:focus,
.form__select:focus,
.form__textarea:focus {
  border-color: #4a90d9;
  outline: none;
  box-shadow: 0 0 0 2px rgba(74, 144, 217, 0.3);
}
```

Не убирай `outline` без замены — пользователи клавиатуры должны видеть активное поле.

### Группа поля

```css
.form__group {
  margin-bottom: 16px;
}

.form__label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
}
```

`display: block` на label — подпись над полем, а не рядом.

### Стилизация кнопки

```css
.form__btn {
  padding: 12px 24px;
  background-color: #4a90d9;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.form__btn:hover {
  background-color: #3a7bc8;
}

.form__btn:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

### Стилизация fieldset

```css
.form__fieldset {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
}

.form__legend {
  font-weight: bold;
  padding: 0 8px;
}
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

### Определения и понятия

#### font-family: inherit

**`inherit`** — наследовать шрифт от родителя. Поля формы по умолчанию используют системный шрифт — `inherit` делает их одинаковыми с сайтом.

#### cursor: pointer

**`cursor: pointer`** — курсор-рука на кнопках и кликабельных элементах.

#### Стилизация форм

**Стилизация форм** — применение CSS к `input`, `select`, `textarea`, `button` для единого внешнего вида.

---

### Что мы НЕ изучаем на этом уроке

| Тема | Когда |
| --- | --- |
| Отправка на сервер (PHP, Node.js) | Позже |
| JavaScript-валидация | Позже |
| `pattern`, кастомные сообщения об ошибках | Углубление |
| Кастомные чекбоксы (`appearance: none`) | Бонус |
| Файловые поля (`type="file"`) | Углубление |
| Адаптивные формы (media queries) | Уроки 9–10 |

---

## 7. Итог урока

### Что мы узнали сегодня

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

Выполнить задание **«Форма заказа»** из файла [homework.md](homework.md).

---

## Словарь терминов

| Термин | Краткое определение |
| --- | --- |
| Форма (form) | Элемент для сбора и отправки данных |
| action | URL отправки данных формы |
| method | HTTP-метод: get или post |
| input | Однострочное поле ввода |
| type | Тип поля input |
| name | Имя поля при отправке |
| label | Подпись к полю формы |
| for | Связь label с id поля |
| placeholder | Подсказка внутри пустого поля |
| textarea | Многострочное поле ввода |
| select | Выпадающий список |
| option | Вариант в select |
| button | Кнопка формы |
| submit | Отправка формы |
| reset | Сброс полей формы |
| required | Обязательное поле |
| fieldset | Группа полей формы |
| legend | Заголовок fieldset |
| checkbox | Поле-галочка |
| radio | Выбор одного из группы |
| value | Значение поля при отправке |
| Валидация | Проверка данных перед отправкой |
| box-sizing | Учёт padding/border в width |
| inherit | Наследование значения от родителя |
