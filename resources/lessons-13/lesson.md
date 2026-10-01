# Урок 13 — Анимация элементов

**Модуль:** HTML, CSS, Git  
**Длительность:** 60 минут  
**План занятия:** [lesson-plan.md](lesson-plan.md) · **Задачи:** [tasks.md](tasks.md) · **Домашнее задание:** [homework.md](homework.md)

> Это **справочник**, а не текст для чтения вслух. На уроке проходи только разделы из [плана](lesson-plan.md#тайминг-60-минут). Остальное — для практики и домашнего задания.

**Полезные ссылки:** [MDN — CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions) · [MDN — @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) · [MDN — transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

---

## Навигация

| §                                                         | Тема                    | На уроке  |
| --------------------------------------------------------- | ----------------------- | --------- |
| [1](#1-введение-зачем-нужны-анимации)                    | Зачем анимации          | ✅ 5 мин  |
| [2](#2-плавные-переходы-transition)                       | transition              | ✅ 10 мин |
| [3](#3-transform-в-связке-с-transition)                   | transform + transition  | ✅ 10 мин |
| [4](#4-цикличные-анимации-keyframes-и-animation)          | @keyframes и animation  | ✅ 10 мин |
| [5](#5-итог-урока)                                        | Итог и ДЗ               | ✅ 5 мин  |

---

## 1. Введение: зачем нужны анимации

Анимации дают **обратную связь**: кнопка при `:hover` показывает, что элемент кликабельный; пульсирующий badge привлекает внимание.

| Инструмент | Когда использовать | Пример |
| ---------- | ------------------ | ------ |
| `transition` | Плавный переход между двумя состояниями | Кнопка при `:hover` |
| `@keyframes` + `animation` | Цикличная или многошаговая анимация | Пульсация, slide-in |

> **Правило:** UI-анимации — 150–400 мс. Длиннее — только для декора, не для каждого элемента.

### Производительность

| Свойство | Оценка | Почему |
| -------- | ------ | ------ |
| `transform`, `opacity` | ✅ Лучший выбор | Аппаратное ускорение, без reflow |
| `width`, `height`, `margin` | ⚠️ Осторожно | Могут вызывать пересчёт layout |
| `display` | ❌ Не анимируется | `none` → `block` — мгновенно |

### Доступность: prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Ключевые понятия

| Термин | Определение |
| ------ | ----------- |
| **CSS-анимация** | Изменение свойств во времени без JavaScript |
| **Интерактивное состояние** | `:hover`, `:focus`, `:active` — триггеры для transition |
| **prefers-reduced-motion** | Медиазапрос: пользователь отключил анимации в системе |

---

## 2. Плавные переходы (transition)

`transition` описывает, **как** свойство меняется при смене значения.

```css
.btn {
  background-color: #3498db;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}
```

### Свойства transition

| Свойство | Описание | Пример |
| -------- | -------- | ------ |
| `transition-property` | Какое свойство анимировать | `background-color`, `all` |
| `transition-duration` | Длительность | `0.3s`, `300ms` |
| `transition-timing-function` | Кривая скорости | `ease`, `linear`, `ease-in-out` |
| `transition-delay` | Задержка старта | `0.1s` |

**Сокращение:** `transition: property duration timing-function delay;`

```css
transition: transform 0.3s ease-in-out 0.1s;

/* Несколько свойств */
transition:
  background-color 0.3s ease,
  transform 0.2s ease;
```

### timing-function

| Значение | Поведение |
| -------- | --------- |
| `ease` | Медленный старт и финиш (по умолчанию) |
| `linear` | Равномерная скорость |
| `ease-in` | Ускорение к концу |
| `ease-out` | Замедление к концу |
| `ease-in-out` | Ускорение и замедление |

### Важно

`transition` задают на **базовом** элементе, не только на `:hover` — иначе «откат» при уходе курсора будет мгновенным.

```css
/* ✅ Правильно */
.btn { transition: background-color 0.3s; }
.btn:hover { background-color: red; }

/* ❌ Неправильно */
.btn:hover {
  transition: background-color 0.3s;
  background-color: red;
}
```

---

## 3. Transform в связке с transition

`transform` изменяет элемент **визуально**, не сдвигая соседей в потоке документа.

### Основные функции

| Функция | Назначение | Пример |
| ------- | ---------- | ------ |
| `scale()` | Масштаб | `scale(1.05)` — +5% |
| `translateX/Y()` | Сдвиг | `translateX(-100%)` — за экран |
| `rotate()` | Поворот | `rotate(45deg)` |

```css
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}

.menu {
  transform: translateX(-100%);
  transition: transform 0.4s ease;
}
.menu.is-open {
  transform: translateX(0);
}
```

### transform-origin

Точка трансформации (по умолчанию `center center`):

```css
.badge {
  transform-origin: center;
}
```

### Паттерн: кнопка с hover

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

Комбинация: `transform: translateY(-2px) scale(1.02);`

---

## 4. Цикличные анимации: @keyframes и animation

Для анимаций **без** действия пользователя (пульсация, slide-in при загрузке).

### Шаг 1 — ключевые кадры

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

/* Короткая запись */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Шаг 2 — применить к элементу

```css
.badge {
  animation: pulse 1.5s ease-in-out infinite;
}
```

### Свойства animation-*

| Свойство | Описание | Пример |
| -------- | -------- | ------ |
| `animation-name` | Имя @keyframes | `pulse` |
| `animation-duration` | Длительность цикла | `1.5s` |
| `animation-timing-function` | Кривая | `ease-in-out` |
| `animation-delay` | Задержка старта | `0.5s` |
| `animation-iteration-count` | Повторы | `3`, `infinite` |
| `animation-direction` | Направление | `normal`, `alternate` |
| `animation-fill-mode` | Стили до/после | `forwards`, `both` |

**Сокращение:** `animation: name duration timing-function delay iteration-count;`

### Примеры

**Пульсирующий badge:**

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

**Slide-in меню:**

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
| **Триггер** | Смена состояния (`:hover`, класс) | Автоматически или по классу |
| **Циклы** | Один переход туда-обратно | `infinite` и др. |
| **Сложность** | Два состояния | Любое число кадров |
| **Синтаксис** | `transition: ...` | `@keyframes` + `animation: ...` |

### animation-fill-mode

| Значение | Поведение |
| -------- | --------- |
| `none` | Стили keyframes не сохраняются |
| `forwards` | Сохранить стили последнего кадра |
| `backwards` | Применить первый кадр во время delay |
| `both` | forwards + backwards |

---

## 5. Итог урока

### Что мы узнали

1. **`transition`** — плавный переход при смене состояния (`:hover`, `:focus`)
2. **`transform`** — перемещение, масштаб, поворот без влияния на поток
3. **`@keyframes`** — описание сложных и цикличных анимаций
4. **`animation-*`** — длительность, повторы, направление
5. Анимации должны быть **короткими** и **осмысленными**

### Вопросы для самопроверки

1. В чём разница между `transition` и `animation`?
2. Почему `transition` задают на базовом элементе, а не только на `:hover`?
3. Какие свойства лучше анимировать для производительности?
4. Как сделать бесконечную пульсацию элемента?
5. Что делает `animation-fill-mode: forwards`?

### Домашнее задание

Выполни задание **«Анимированная карточка»** → [homework.md](homework.md)

---

## Словарь терминов

| Термин | Краткое определение |
| ------ | ------------------- |
| transition | Плавное изменение CSS-свойства при смене значения |
| transition-duration | Длительность перехода |
| timing-function | Кривая скорости анимации |
| transform | Визуальное преобразование элемента |
| scale / translate / rotate | Масштаб / сдвиг / поворот |
| transform-origin | Точка, относительно которой выполняется transform |
| @keyframes | Правило с ключевыми кадрами анимации |
| animation | Применение keyframes-анимации к элементу |
| animation-iteration-count | Количество повторов (`infinite` — бесконечно) |
| animation-fill-mode | Поведение стилей до и после анимации |
| keyframe | Ключевой кадр — точка во времени (0%, 50%, 100%) |
| prefers-reduced-motion | Медиазапрос для отключения анимаций (доступность) |
