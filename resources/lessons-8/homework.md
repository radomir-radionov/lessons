# Домашнее задание — Урок 8

**Задание:** «Форма заказа»  
**Время:** ~30–45 минут  
**Файлы:** `index.html` + `style.css` (папка `order-form/`)

---

## Описание

Создай стилизованную форму заказа товара для интернет-магазина. Форма должна собирать данные покупателя, адрес доставки и параметры заказа.

---

## Требования

Форма должна содержать:

1. **Заголовок** — «Оформление заказа»
2. **Секция «Контактные данные»** (`<fieldset>` + `<legend>`):
   - Имя (`text`, `required`)
   - Email (`email`, `required`)
   - Телефон (`tel`, `required`)
3. **Секция «Адрес доставки»** (`<fieldset>`):
   - Город (`select`, минимум 4 города, `required`)
   - Адрес (`text`, `required`, `placeholder`)
   - Индекс (`text` или `number`)
4. **Секция «Заказ»** (`<fieldset>`):
   - Товар (`select` — 3+ варианта товара)
   - Количество (`number`, `min="1"`, `value="1"`)
   - Способ оплаты (`radio` — «Картой» / «Наличными», одинаковый `name`)
5. **Комментарий** — `<textarea>` (необязательное поле)
6. **Чекбокс** — «Согласен на обработку персональных данных» (`required`)
7. **Кнопки** — «Оформить заказ» (`submit`) и «Очистить» (`reset`)
8. **Стилизация:**
   - Единый стиль полей (`input`, `select`, `textarea`)
   - `:focus` на полях
   - `:hover` на кнопке submit
   - `max-width: 520px`, форма по центру
   - Отступы между группами (`margin-bottom` на `.form__group`)
9. **Все поля** с `<label>` и связкой `for`/`id`

---

## Пример структуры

```html
<form class="order-form" action="#" method="post">
  <h2 class="order-form__title">Оформление заказа</h2>

  <fieldset class="order-form__fieldset">
    <legend class="order-form__legend">Контактные данные</legend>

    <div class="order-form__group">
      <label class="order-form__label" for="customer-name">Имя</label>
      <input
        class="order-form__input"
        type="text"
        id="customer-name"
        name="customer_name"
        required
      />
    </div>

    <!-- email, phone -->
  </fieldset>

  <fieldset class="order-form__fieldset">
    <legend class="order-form__legend">Адрес доставки</legend>
    <!-- city, address, zip -->
  </fieldset>

  <fieldset class="order-form__fieldset">
    <legend class="order-form__legend">Заказ</legend>
    <!-- product, quantity, payment -->
  </fieldset>

  <div class="order-form__group">
    <label class="order-form__label" for="notes">Комментарий</label>
    <textarea class="order-form__textarea" id="notes" name="notes" rows="3"></textarea>
  </div>

  <label class="order-form__checkbox">
    <input type="checkbox" name="privacy" required />
    Согласен на обработку персональных данных
  </label>

  <div class="order-form__actions">
    <button class="order-form__btn" type="submit">Оформить заказ</button>
    <button class="order-form__btn order-form__btn--secondary" type="reset">
      Очистить
    </button>
  </div>
</form>
```

---

## Критерии оценки

| Критерий | Балл |
| --- | --- |
| Форма с `action` и `method` | обязательно |
| Минимум 3 `<fieldset>` с `<legend>` | обязательно |
| Использованы 5+ типов полей (text, email, tel, select, number, radio, checkbox, textarea) | обязательно |
| `required` на обязательных полях | обязательно |
| У всех полей есть label с `for`/`id` | обязательно |
| Поля стилизованы единообразно | обязательно |
| `:focus` и `:hover` на интерактивных элементах | обязательно |
| `box-sizing: border-box` на полях | обязательно |
| Код читаемый, БЭМ-имена | обязательно |

---

## Бонус (по желанию)

1. **Группа кнопок** — кнопки в flex-контейнере с `gap` (урок 5)
2. **Звёздочка у обязательных полей** — через `::after` на label: `content: " *"; color: red;` (урок 6)
3. **Тёмная тема** — тёмный фон формы, светлый текст, другие цвета border

---

## Как сдать

1. Нажми «Оформить заказ» с пустой формой — браузер покажет ошибки `required`
2. Заполни все поля и отправь (страница обновится — это нормально без бэкенда)
3. Покажи результат на следующем занятии

---

## Частые ошибки — проверь себя

- [ ] Radio в одной группе имеют одинаковый `name`
- [ ] `for` в label совпадает с `id` input
- [ ] `type="submit"` на кнопке отправки, не просто `<button>` без type
- [ ] `placeholder` не заменяет `label` — оба нужны
- [ ] `box-sizing: border-box` — иначе `width: 100%` + padding вылезает за контейнер
- [ ] Select имеет пустой первый option «Выберите...» для UX
