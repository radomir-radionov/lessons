# Домашнее задание — Урок 7

**Задание:** «Баннер с оверлеем»  
**Время:** ~30–45 минут  
**Файлы:** `index.html` + `style.css` (папка `banner-overlay/`)

---

## Описание

Создай промо-баннер для сайта с фоновым изображением, градиентным оверлеем, текстом и кнопкой. Баннер должен выглядеть профессионально и быть читаемым на любой картинке.

---

## Требования

Страница должна содержать:

1. **Промо-баннер** `.promo-banner` — полноширинная секция высотой `min-height: 450px`
2. **Многослойный фон:**
   - Градиент-оверлей: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))`
   - Фоновое изображение (любое с Unsplash или локальное)
   - `background-size: cover`, `background-position: center`
3. **Контент баннера** (внутри `.promo-banner__content`):
   - Заголовок `<h1>` — крупный, белый
   - Подзаголовок `<p>` — описание акции или предложения
   - Кнопка «Узнать больше» с `:hover` эффектом
4. **Центрирование** — контент по центру баннера (flex)
5. **Ограничение ширины текста** — `max-width: calc(100% - 80px)` или `max-width: 600px` с `padding: 0 40px`
6. **Аватар или иконка** — круглое изображение 80×80 с `object-fit: cover` (логотип компании или иконка)
7. **Transform на кнопке** — при `:hover` кнопка слегка увеличивается: `transform: scale(1.05)`
8. **Секция под баннером** — краткий текст о компании (обычный блок без фона)

---

## Пример структуры

```html
<section class="promo-banner">
  <div class="promo-banner__content">
    <img
      class="promo-banner__logo"
      src="https://placehold.co/80x80"
      alt="Логотип компании"
    />
    <h1 class="promo-banner__title">Скидки до 50%</h1>
    <p class="promo-banner__text">
      Только этой неделе — специальные предложения на всю коллекцию
    </p>
    <a class="promo-banner__btn" href="#">Узнать больше</a>
  </div>
</section>

<section class="about">
  <h2>О нас</h2>
  <p>Краткое описание компании...</p>
</section>
```

```css
.promo-banner {
  min-height: 450px;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.promo-banner__content {
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 0 40px;
}

.promo-banner__logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

.promo-banner__btn {
  display: inline-block;
  padding: 12px 32px;
  background-color: #e74c3c;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: transform 0.2s;
}

.promo-banner__btn:hover {
  transform: scale(1.05);
}
```

---

## Критерии оценки

| Критерий | Балл |
| --- | --- |
| Баннер с многослойным фоном (градиент + картинка) | обязательно |
| `background-size: cover` и читаемый текст | обязательно |
| Круглое изображение с `object-fit: cover` | обязательно |
| Кнопка с `transform` при `:hover` | обязательно |
| Использован `calc()` или `max-width` с вычислением | обязательно |
| Контент отцентрирован | обязательно |
| Есть секция под баннером | обязательно |
| Код читаемый, БЭМ-имена | обязательно |

---

## Бонус (по желанию)

1. **Второй баннер** — другой градиент (`to bottom`) и другая картинка
2. **rotate на иконке** — декоративный элемент с `transform: rotate(45deg)`
3. **Локальная картинка** — скачай фон в папку `images/` и используй относительный путь

---

## Как сдать

1. Проверь читаемость текста на фоне
2. Наведи на кнопку — должен работать `scale`
3. Покажи результат на следующем занятии

---

## Частые ошибки — проверь себя

- [ ] В `background-image` градиент **первый** (верхний слой), картинка **второй**
- [ ] У баннера задана высота (`min-height` или `height`)
- [ ] `calc()` с пробелами: `calc(100% - 80px)`
- [ ] `object-fit: cover` на круглом аватаре
- [ ] Кнопка имеет `:focus` для доступности
