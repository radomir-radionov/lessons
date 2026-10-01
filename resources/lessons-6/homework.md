# Домашнее задание — Урок 6

**Задание:** «Карточка товара с бейджем Sale»  
**Время:** ~30–45 минут  
**Файлы:** `index.html` + `style.css` (папка `product-card/`)

---

## Описание

Создай карточку товара интернет-магазина с бейджем «Sale», интерактивными состояниями и аккуратным позиционированием. Карточка должна выглядеть как элемент каталога.

---

## Требования

Страница должна содержать:

1. **Контейнер** — `.catalog` с минимум 3 карточками `.product-card` (flex-ряд из урока 5)
2. **Карточка товара:**
   - Изображение товара (`<img>` с `alt`)
   - Название (`<h3>`)
   - Старая цена (зачёркнутая) и новая цена
   - Кнопка «В корзину»
3. **Бейдж «Sale»** — через `position: absolute` в левом верхнем углу карточки (у одной или всех карточек)
4. **Позиционирование** — `.product-card { position: relative; }`, бейдж `position: absolute; top: 12px; left: 12px;`
5. **Псевдоэлемент** — у старой цены добавь `::before` или стилизуй через `text-decoration: line-through`
6. **:hover на карточке** — при наведении: тень (`box-shadow`) и лёгкое изменение (например, `transform: translateY(-4px)` — если знаком с transform)
7. **:hover и :focus на кнопке** — изменение фона и видимая обводка при фокусе
8. **:nth-child** — у второй карточки в каталоге другой цвет бейджа (например, «Hot» вместо «Sale») через `:nth-child(2) .product-card__badge`

---

## Пример структуры

```html
<div class="catalog">
  <article class="product-card">
    <span class="product-card__badge">Sale</span>
    <img
      class="product-card__image"
      src="https://placehold.co/300x200"
      alt="Кроссовки Nike Air"
    />
    <h3 class="product-card__title">Кроссовки Nike Air</h3>
    <p class="product-card__price">
      <span class="product-card__price-old">5 990 ₽</span>
      <span class="product-card__price-new">4 490 ₽</span>
    </p>
    <button class="product-card__btn" type="button">В корзину</button>
  </article>
  <!-- ещё 2 карточки -->
</div>
```

```css
.catalog {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 24px;
}

.product-card {
  position: relative;
  width: 280px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  transition: box-shadow 0.2s;
}

.product-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.product-card__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  background-color: #e74c3c;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  z-index: 1;
}

.product-card__price-old {
  text-decoration: line-through;
  color: #999;
  margin-right: 8px;
}
```

---

## Критерии оценки

| Критерий | Балл |
| --- | --- |
| Минимум 3 карточки товара | обязательно |
| Бейдж позиционирован через `absolute` внутри `relative` | обязательно |
| Использованы `:hover` на карточке и кнопке | обязательно |
| Использован `:focus` на кнопке (доступность) | обязательно |
| Использован `:nth-child` для отличия карточки | обязательно |
| Старая цена зачёркнута, новая выделена | обязательно |
| У изображений есть `alt` | обязательно |
| Код читаемый, классы по БЭМ | обязательно |

---

## Бонус (по желанию)

1. **::after на кнопке** — добавь иконку корзины через `::after` (`content: "🛒"` или пустой блок с background)
2. **Рейтинг** — добавь звёзды рейтинга через `::before` на блоке `.product-card__rating`
3. **Git** — закоммить: `git commit -m "Добавлены карточки товаров с бейджами"`

---

## Как сдать

1. Проверь hover-эффекты в браузере
2. Нажми Tab — кнопка должна показывать `:focus`
3. Покажи результат на следующем занятии

---

## Частые ошибки — проверь себя

- [ ] У `.product-card` есть `position: relative`
- [ ] Бейдж не сдвигает контент (это `absolute`, не обычный блок)
- [ ] `:focus` на кнопке не убран полностью (`outline: none` без замены — плохо)
- [ ] `:nth-child` считает всех детей `.catalog`, не только карточки
- [ ] У `<img>` указан осмысленный `alt`
