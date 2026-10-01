# Урок 7 — Продвинутая работа с CSS

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
[План занятия](lesson-plan.md) · [Задачи](tasks.md) · [Домашнее задание](homework.md)


**Полезные ссылки:** [MDN — background](https://developer.mozilla.org/en-US/docs/Web/CSS/background) · [MDN — transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

---

## Навигация

| §                                                          | Тема              | На уроке  |
| ---------------------------------------------------------- | ----------------- | --------- |
| [1](#1-фоновые-изображения-background)                     | Фоновые изображения | ✅ 10 мин |
| [2](#2-работа-с-изображениями-object-fit)                  | object-fit        | ✅ 6 мин  |
| [3](#3-трансформация-transform)                            | transform         | ✅ 8 мин  |
| [4](#4-вычисляемые-размеры-calc)                           | calc()            | ✅ 4 мин  |
| [5](#5-многослойные-фоны)                                  | Многослойные фоны | ✅ 4 мин  |
| [6](#6-итог-урока)                                         | Итог и ДЗ         | ✅ 5 мин  |

---

## 1. Фоновые изображения (background)

Изображение как **фон блока** — hero-секция с текстом поверх. Свойства семейства **`background-*`**.

### Основные свойства

| Свойство              | Назначение                              |
| --------------------- | --------------------------------------- |
| `background-image`    | Картинка: `url("images/hero.jpg")`      |
| `background-size`     | Размер: `cover`, `contain`, `200px 150px` |
| `background-position` | Позиция: `center`, `top`, `50% 30%`     |
| `background-repeat`   | Повтор: `no-repeat`, `repeat-x/y`       |

| background-size | Эффект                                           |
| --------------- | ------------------------------------------------ |
| `cover`         | Заполнить область, обрезая лишнее (пропорции сохраняются) |
| `contain`       | Вписать целиком, могут остаться пустые поля      |
| `100% 100%`     | Растянуть (может исказить)                       |

### Hero-секция

```css
.hero {
  height: 400px;
  background-image: url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}
```

### Сокращённая запись

```css
.hero {
  background: #333 url("hero.jpg") center/cover no-repeat;
}
```

Порядок: цвет → картинка → позиция/размер → повтор.

> Фоновая картинка **декоративная** — `alt` не нужен. Если картинка несёт смысл, используй `<img>` с `alt`.

---

## 2. Работа с изображениями: object-fit

Когда `<img>` в блоке фиксированного размера, картинка может **исказиться**. **`object-fit`** управляет вписыванием содержимого.

| Значение    | Эффект                                           |
| ----------- | ------------------------------------------------ |
| `fill`      | Растянуть на весь блок (по умолчанию)            |
| `cover`     | Заполнить блок, обрезая лишнее                   |
| `contain`   | Вписать целиком, могут быть пустые поля          |
| `none`      | Оригинальный размер                              |
| `scale-down`| Как `none` или `contain` — что меньше            |

### Круглый аватар

```css
.profile__avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  border: 3px solid white;
}
```

Ключ: одинаковые `width` и `height` + `border-radius: 50%` + `object-fit: cover`.

---

## 3. Трансформация: transform

**`transform`** изменяет внешний вид элемента **без влияния на поток документа** (соседи не сдвигаются).

| Функция              | Эффект                              | Пример                    |
| -------------------- | ----------------------------------- | ------------------------- |
| `rotate(угол)`       | Поворот                             | `rotate(90deg)`           |
| `scale(коэфф.)`      | Масштаб (`1` — без изменений)       | `scale(1.05)`             |
| `translateX/Y()`     | Сдвиг по осям                       | `translateX(-50%)`        |
| `translate(x, y)`    | Сдвиг по обеим осям                 | `translate(-50%, -50%)`   |

### Примеры

```css
.icon:hover {
  transform: rotate(45deg) scale(1.1);
}

.card:hover {
  transform: scale(1.05);
}
```

Несколько функций через пробел в одном `transform`.

### Центрирование через transform

```css
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

Сдвигает элемент на половину своей ширины/высоты назад.

---

## 4. Вычисляемые размеры: calc()

**`calc()`** — математические вычисления прямо в CSS с разными единицами.

```css
.content {
  width: calc(100% - 200px);
}

.wrapper {
  width: calc(100% - 40px);
  margin: 0 20px;
}

.col {
  width: calc(50% - 10px);
}

.main {
  min-height: calc(100vh - 60px);
}
```

### Правила

1. **Пробелы обязательны** вокруг `+` и `-`: `calc(100% - 20px)`, не `calc(100%-20px)`
2. Можно смешивать `%`, `px`, `em`, `vw`, `vh`
3. `100vh` — 100% высоты видимой области экрана

---

## 5. Многослойные фоны

Несколько `background-image` через запятую. **Первый** в списке — **верхний** слой.

### Градиент + картинка (overlay)

```css
.banner {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("photo.jpg");
  background-size: cover;
  background-position: center;
}
```

Градиент затемняет картинку — текст становится читаемым.

### linear-gradient

```css
background-image: linear-gradient(
  to right,
  rgba(0, 0, 0, 0.8),
  rgba(0, 0, 0, 0.2)
);
```

| Параметр    | Значение                          |
| ----------- | --------------------------------- |
| Направление | `to right`, `to bottom`, `45deg`  |
| Цвета       | `rgba(0,0,0,0.5)`, `#00000080`    |

### Промо-баннер

```css
.promo {
  background-image:
    linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)),
    url("promo.jpg");
  background-size: cover;
  min-height: 400px;
}
```

---

## 6. Итог урока

### Что мы узнали

1. **`background-*`** — фоновые изображения: `cover`, `center`, `no-repeat`
2. **`object-fit`** — вписывание `<img>` в блок (`cover`, `contain`)
3. **`transform`** — поворот, масштаб, сдвиг без влияния на поток
4. **`calc()`** — вычисляемые размеры в CSS
5. **Многослойные фоны** — градиент + картинка для оверлея

### Вопросы для самопроверки

1. Чем `background-image` отличается от `<img>`?
2. Что делает `background-size: cover`?
3. Как сделать круглый аватар без искажений?
4. Чем `transform: scale(1.1)` отличается от увеличения `width`?
5. Зачем нужны пробелы в `calc(100% - 20px)`?
6. Какой слой фона находится сверху при нескольких `background-image`?

### Домашнее задание

Выполни задание **«Баннер с оверлеем»** → [homework.md](homework.md)

---

## Словарь терминов

| Термин             | Краткое определение                              |
| ------------------ | ------------------------------------------------ |
| background-image   | Фоновое изображение элемента                     |
| background-size    | Размер фонового изображения                      |
| background-position| Позиция фона в элементе                          |
| background-repeat  | Повторение фонового изображения                  |
| cover              | Заполнить область с обрезкой                     |
| contain            | Вписать изображение целиком                      |
| object-fit         | Вписывание img/video в блок                      |
| object-position    | Видимая часть при обрезке                        |
| transform          | Визуальная трансформация элемента                |
| rotate()           | Поворот элемента                                 |
| scale()            | Масштабирование элемента                         |
| translate()        | Сдвиг элемента                                   |
| calc()             | Математические вычисления в CSS                  |
| vh / vw            | 1% высоты / ширины окна браузера                 |
| linear-gradient    | Линейный градиент                                |
| Многослойный фон   | Несколько background-image через запятую         |
| Overlay            | Полупрозрачный слой поверх изображения           |
| Hero-секция        | Крупный баннер вверху страницы                   |
