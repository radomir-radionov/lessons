# Урок 13 — Анимация элементов

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**План занятия:** [lesson-plan.md](lesson-plan.md)  
**Задачи на уроке:** [tasks.md](tasks.md)  
**Домашнее задание:** [homework.md](homework.md)

---

## 1. Введение: зачем нужны анимации

Статичная страница работает, но **анимации** делают интерфейс живым и понятным. Когда кнопка плавно меняет цвет при наведении — пользователь видит, что элемент интерактивный. Когда badge пульсирует — внимание притягивается к важному уведомлению.

В CSS есть два основных инструмента:

| Инструмент | Когда использовать | Пример |
| ---------- | ------------------ | ------ |
| `transition` | Плавный переход от одного состояния к другому | Кнопка при `:hover` |
| `@keyframes` + `animation` | Сложная или цикличная анимация | Пульсация, загрузчик, slide-in |

> **Правило хорошего тона:** UI-анимации должны быть короткими (обычно 150–400 мс) и не мешать чтению. Если анимация раздражает — её слишком много или она слишком долгая.

### Аналогия

Представь дверь в магазине:

- **Без анимации** — дверь захлопывается мгновенно (резко, неожиданно)
- **С transition** — дверь плавно закрывается (естественно, предсказуемо)
- **С @keyframes** — дверь открывается по расписанию каждые 5 секунд (цикл, сценарий)

---

### Определения и понятия

#### CSS-анимация

**CSS-анимация** — изменение визуальных свойств элемента во времени без JavaScript. Браузер сам интерполирует значения между началом и концом.

#### Интерактивное состояние

**Интерактивное состояние** — состояние элемента при взаимодействии пользователя: `:hover` (наведение), `:focus` (фокус с клавиатуры), `:active` (нажатие).

#### Производительность анимаций

Для плавности лучше анимировать свойства, которые не вызывают пересчёт всей страницы:

- ✅ `transform`, `opacity` — аппаратное ускорение
- ⚠️ `width`, `height`, `margin` — могут вызывать «дёрганье»
- ❌ `display: none` → `block` — не анимируется через `transition`

#### prefers-reduced-motion

**`prefers-reduced-motion`** — медиазапрос для пользователей, которые отключили анимации в системе (доступность):

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 2. Плавные переходы (transition)

`transition` описывает, **как** свойство меняется при изменении значения (например, при `:hover`).

### Синтаксис

```css
.element {
  background-color: #3498db;
  transition: background-color 0.3s ease;
}

.element:hover {
  background-color: #2980b9;
}
```

### Свойства transition

| Свойство | Описание | Пример |
| -------- | -------- | ------ |
| `transition-property` | Какое свойство анимировать | `background-color`, `all` |
| `transition-duration` | Длительность | `0.3s`, `300ms` |
| `transition-timing-function` | Кривая скорости | `ease`, `linear`, `ease-in-out` |
| `transition-delay` | Задержка перед стартом | `0.1s` |

**Сокращённая запись:**

```css
transition: property duration timing-function delay;
/* Пример */
transition: transform 0.3s ease-in-out 0.1s;
```

### Несколько свойств

```css
.button {
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}
```

### Важно

`transition` нужно задавать на **базовом** состоянии элемента, а не только на `:hover`. Иначе при уходе курсора анимация «отката» не сработает.

```css
/* ✅ Правильно */
.btn {
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: red;
}

/* ❌ Неправильно — transition только на hover */
.btn:hover {
  transition: background-color 0.3s;
  background-color: red;
}
```

---

### Определения и понятия

#### transition

**`transition`** — CSS-свойство, которое включает плавное изменение других свойств при смене их значения.

#### timing-function

**`timing-function`** (функция времени) — определяет темп анимации:

- `ease` — медленный старт, быстрая середина, медленный финиш (по умолчанию)
- `linear` — равномерная скорость
- `ease-in` — ускорение к концу
- `ease-out` — замедление к концу
- `ease-in-out` — ускорение и замедление
- `cubic-bezier(x1, y1, x2, y2)` — кастомная кривая

#### Анимируемые свойства

**Анимируемые свойства** — свойства, которые могут плавно меняться: цвета, размеры (с осторожностью), `transform`, `opacity`, `box-shadow` и др. Свойство `display` не анимируется.

---

## 3. Transform в связке с transition

`transform` изменяет элемент **визуально**, не затрагивая поток документа (соседние элементы не «прыгают»).

### Основные функции

```css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);        /* увеличение на 5% */
}

.icon {
  transform: rotate(45deg);        /* поворот */
}

.menu {
  transform: translateX(-100%);    /* сдвиг влево за экран */
}

.menu.is-open {
  transform: translateX(0);      /* на место */
}
```

### Комбинация нескольких transform

```css
.button:hover {
  transform: translateY(-2px) scale(1.02);
}
```

Порядок функций важен: сначала выполняется справа налево (в зависимости от контекста), но на практике комбинируй осмысленно.

### transform-origin

Точка, относительно которой происходит трансформация:

```css
.badge {
  transform-origin: center;
  transition: transform 0.3s;
}
```

### Типичный паттерн: кнопка с hover

```css
.btn {
  padding: 12px 24px;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;
}

.btn:hover {
  background-color: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.btn:active {
  transform: translateY(0);
}
```

---

### Определения и понятия

#### transform

**`transform`** — CSS-свойство для визуального преобразования элемента: перемещение, масштаб, поворот, наклон.

#### scale()

**`scale()`** — масштабирование. `scale(1)` — исходный размер, `scale(1.1)` — увеличение на 10%, `scale(0.9)` — уменьшение.

#### translate()

**`translate()`** — сдвиг элемента. `translateX(10px)` — по горизонтали, `translateY(-5px)` — по вертикали, `translate(10px, 5px)` — оба направления.

#### rotate()

**`rotate()`** — поворот на угол в градусах: `rotate(90deg)`.

#### transform-origin

**`transform-origin`** — точка трансформации. По умолчанию `center center` (центр элемента).

---

## 4. Цикличные анимации: @keyframes и animation

Когда нужна анимация **без** действия пользователя (пульсация, вращение, slide-in при загрузке) — используй `@keyframes`.

### Шаг 1. Описать ключевые кадры

```css
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

Можно использовать проценты (`0%`, `50%`, `100%`) или ключевые слова `from` и `to`:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Шаг 2. Применить animation к элементу

```css
.badge {
  animation: pulse 1.5s ease-in-out infinite;
}
```

### Свойства animation-*

| Свойство | Описание | Пример |
| -------- | -------- | ------ |
| `animation-name` | Имя @keyframes | `pulse` |
| `animation-duration` | Длительность одного цикла | `1.5s` |
| `animation-timing-function` | Кривая | `ease-in-out` |
| `animation-delay` | Задержка старта | `0.5s` |
| `animation-iteration-count` | Количество повторов | `3`, `infinite` |
| `animation-direction` | Направление | `normal`, `alternate` |
| `animation-fill-mode` | Состояние до/после | `forwards`, `both` |

**Сокращённая запись:**

```css
animation: name duration timing-function delay iteration-count direction fill-mode;
```

### Пример: пульсирующий badge

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.notification-badge {
  display: inline-block;
  padding: 4px 10px;
  background-color: #ef4444;
  color: white;
  border-radius: 999px;
  font-size: 12px;
  animation: pulse 2s ease-in-out infinite;
}
```

### Пример: slide-in меню

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.sidebar {
  animation: slideIn 0.4s ease-out forwards;
}
```

### transition vs animation

| | transition | animation |
| --- | --- | --- |
| **Триггер** | Изменение состояния (`:hover`, класс) | Автоматически при загрузке или по классу |
| **Циклы** | Один переход туда-обратно | Можно зациклить (`infinite`) |
| **Сложность** | Два состояния (начало → конец) | Любое количество ключевых кадров |
| **Синтаксис** | `transition: ...` | `@keyframes` + `animation: ...` |

---

### Определения и понятия

#### @keyframes

**`@keyframes`** — CSS-правило, описывающее последовательность ключевых кадров анимации. Каждый кадр задаёт значения свойств в определённый момент времени.

#### animation

**`animation`** — сокращённое свойство для применения keyframes-анимации к элементу.

#### animation-iteration-count

**`animation-iteration-count`** — сколько раз повторяется анимация. Значение `infinite` — бесконечный цикл.

#### animation-fill-mode

**`animation-fill-mode`** — какие стили применять до и после анимации:

- `none` — стили keyframes не сохраняются
- `forwards` — сохранить стили последнего кадра
- `backwards` — применить стили первого кадра во время delay
- `both` — forwards + backwards

#### Ключевой кадр (keyframe)

**Ключевой кадр** — точка во времени анимации (например, `0%`, `50%`, `100%`), где заданы конкретные значения CSS-свойств.

---

## 5. Итог урока

### Что мы узнали сегодня

1. **`transition`** — плавный переход при смене состояния (`:hover`, `:focus`)
2. **`transform`** — перемещение, масштаб, поворот без влияния на поток документа
3. **`@keyframes`** — описание сложных и цикличных анимаций
4. **`animation-*`** — управление длительностью, повторами и направлением
5. Анимации должны быть **короткими** и **осмысленными**

### Вопросы для самопроверки

1. В чём разница между `transition` и `animation`?
2. Почему `transition` задают на базовом элементе, а не только на `:hover`?
3. Какие свойства лучше анимировать для производительности?
4. Как сделать бесконечную пульсацию элемента?
5. Что делает `animation-fill-mode: forwards`?

### Домашнее задание

Выполнить задание **«Анимированная карточка»** из файла [homework.md](homework.md).

---

### Что мы НЕ изучаем на этом уроке

| Тема | Когда |
| ---- | ----- |
| JavaScript-анимации (Web Animations API) | За рамками модуля |
| Библиотеки GSAP, Anime.js | Не в этом курсе |
| SVG `<animate>` и SMIL | Не в этом курсе |
| 3D-трансформации (`perspective`) | Только упоминание |
| CSS Scroll-driven animations | Экспериментальные API |

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| transition | Плавное изменение CSS-свойства при смене значения |
| transition-duration | Длительность перехода |
| timing-function | Кривая скорости анимации |
| transform | Визуальное преобразование элемента |
| scale | Масштабирование элемента |
| translate | Сдвиг элемента по осям |
| rotate | Поворот элемента |
| transform-origin | Точка, относительно которой выполняется transform |
| @keyframes | Правило с ключевыми кадрами анимации |
| animation | Применение keyframes-анимации к элементу |
| animation-iteration-count | Количество повторов анимации |
| animation-fill-mode | Поведение стилей до и после анимации |
| prefers-reduced-motion | Медиазапрос для отключения анимаций (доступность) |
| keyframe | Ключевой кадр — точка во времени анимации |
| ease / linear | Стандартные функции времени |
| infinite | Бесконечное повторение анимации |
