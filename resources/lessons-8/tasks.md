# Практические задачи — Урок 8

**Время на занятии:** 38–55 мин (~17 минут)  
**Проект:** папка `forms-practice/` с файлами `index.html` и `style.css`  
**Порядок:** задачи собирают одну форму регистрации по шагам

---

## Задача 1 — «Каркас формы» (3 мин)

### Задание

Создай базовую структуру формы:

1. Создай папку `forms-practice` с `index.html` и `style.css`
2. Добавь `<form class="form" action="#" method="post">`
3. Внутри формы — заголовок `<h2>Регистрация</h2>`
4. Добавь два поля: имя (`type="text"`) и email (`type="email"`)
5. У каждого поля — `<label>` с атрибутом `for`, у input — соответствующий `id` и `name`

### Критерии выполнения

- [ ] Есть тег `<form>` с `action` и `method`
- [ ] Два поля: текстовое и email
- [ ] У каждого поля есть `<label for="...">` и `id` на input
- [ ] У input указан атрибут `name`
- [ ] Подключён `style.css`

### Подсказка

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
</form>
```

---

## Задача 2 — «Пароль и телефон» (3 мин)

### Задание

Дополни форму полями безопасности и контакта:

1. Добавь поле пароля (`type="password"`) с `required`
2. Добавь поле телефона (`type="tel"`) с `placeholder="+7 (___) ___-__-__"`
3. Оберни каждое поле в `<div class="form__group">`
4. Добавь `placeholder` к полю имени: «Введите ваше имя»

### Критерии выполнения

- [ ] Есть поле `type="password"` с `required`
- [ ] Есть поле `type="tel"`
- [ ] У полей есть `placeholder` (минимум у одного)
- [ ] У всех полей есть label

### Подсказка

```html
<div class="form__group">
  <label class="form__label" for="password">Пароль</label>
  <input
    class="form__input"
    type="password"
    id="password"
    name="password"
    placeholder="Минимум 8 символов"
    required
  />
</div>
```

---

## Задача 3 — «Выбор и многострочный текст» (4 мин)

### Задание

Добавь выпадающий список и текстовую область:

1. `<select>` с выбором города (минимум 4 `<option>`)
2. `<textarea>` для комментария (3–4 строки, атрибут `rows="4"`)
3. Оба поля с `<label>`
4. У select укажи `name="city"`, у textarea — `name="comment"`

### Критерии выполнения

- [ ] Есть `<select>` с минимум 4 `<option>`
- [ ] Есть `<textarea>` с `rows`
- [ ] У обоих полей есть label
- [ ] Указаны атрибуты `name`

### Подсказка

```html
<div class="form__group">
  <label class="form__label" for="city">Город</label>
  <select class="form__select" id="city" name="city" required>
    <option value="">Выберите город</option>
    <option value="minsk">Минск</option>
    <option value="moscow">Москва</option>
    <option value="spb">Санкт-Петербург</option>
    <option value="kiev">Киев</option>
  </select>
</div>

<div class="form__group">
  <label class="form__label" for="comment">Комментарий</label>
  <textarea
    class="form__textarea"
    id="comment"
    name="comment"
    rows="4"
    placeholder="Расскажите о себе..."
  ></textarea>
</div>
```

---

## Задача 4 — «Чекбокс и радио» (4 мин)

### Задание

Добавь группы выбора через `fieldset`:

1. `<fieldset>` с `<legend>Пол</legend>` и двумя `radio` (Мужской / Женский) — одинаковый `name="gender"`
2. `<fieldset>` с чекбоксом «Согласен с условиями» (`type="checkbox"`, `required`)
3. Чекбокс с label — можно обернуть input в label: `<label><input type="checkbox"> Текст</label>`

### Критерии выполнения

- [ ] Radio-кнопки с одинаковым `name` (только одна выбирается)
- [ ] Использован `<fieldset>` и `<legend>`
- [ ] Есть обязательный чекбокс согласия (`required`)
- [ ] У radio есть label

### Подсказка

```html
<fieldset class="form__fieldset">
  <legend class="form__legend">Пол</legend>
  <label class="form__radio">
    <input type="radio" name="gender" value="male" required />
    Мужской
  </label>
  <label class="form__radio">
    <input type="radio" name="gender" value="female" />
    Женский
  </label>
</fieldset>

<label class="form__checkbox">
  <input type="checkbox" name="agree" required />
  Согласен с условиями использования
</label>
```

---

## Задача 5 — «Стилизация и отправка» (5 мин)

### Задание

Стилизуй форму и добавь кнопки:

1. Стили для `.form__input`, `.form__select`, `.form__textarea`:
   - `width: 100%`, `padding: 10px 12px`, `border: 1px solid #ccc`, `border-radius: 6px`
   - `box-sizing: border-box`
2. `:focus` — синяя обводка: `border-color: #4a90d9; outline: none; box-shadow: 0 0 0 2px rgba(74, 144, 217, 0.3)`
3. Кнопка `<button type="submit" class="form__btn">Зарегистрироваться</button>`
4. Кнопка `<button type="reset" class="form__btn form__btn--secondary">Очистить</button>`
5. Ограничь ширину формы: `.form { max-width: 480px; margin: 0 auto; padding: 32px; }`

### Критерии выполнения

- [ ] Все поля стилизованы единообразно
- [ ] `box-sizing: border-box` на полях ввода
- [ ] Есть стиль `:focus`
- [ ] Есть кнопка `type="submit"`
- [ ] Есть кнопка `type="reset"`
- [ ] Форма ограничена по ширине и отцентрирована

### Подсказка

```css
.form {
  max-width: 480px;
  margin: 40px auto;
  padding: 32px;
  border: 1px solid #eee;
  border-radius: 12px;
}

.form__input,
.form__select,
.form__textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
}

.form__input:focus,
.form__select:focus,
.form__textarea:focus {
  border-color: #4a90d9;
  outline: none;
  box-shadow: 0 0 0 2px rgba(74, 144, 217, 0.3);
}

.form__btn {
  padding: 12px 24px;
  background-color: #4a90d9;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}
```

---

## Итог практики

После выполнения всех задач у тебя должна быть полная форма регистрации с:

- Текстовыми полями, email, паролем, телефоном
- Select и textarea
- Radio и checkbox в fieldset
- Стилизованными полями и кнопками отправки/сброса

Попробуй отправить форму (кнопка Submit) — браузер проверит `required` поля.

Покажи результат преподавателю перед окончанием урока.
