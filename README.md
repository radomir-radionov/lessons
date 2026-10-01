# HTML, CSS, Git — Учебные материалы

Курс из 16 уроков по вёрстке и Git.

## Структура

```
├── index.html          # Страница для просмотра материалов
├── css/                # Стили
├── js/                 # Логика просмотрщика
└── resources/          # Все уроки
    ├── html&css/
    ├── lessons-1/
    ├── lessons-2/
    └── ...
```

Каждый урок содержит:

- `lesson.md` — теория
- `lesson-plan.md` — план для преподавателя
- `tasks.md` — задачи на уроке
- `homework.md` — домашнее задание

## Как открыть

Материалы загружаются через `fetch`, поэтому нужен локальный сервер:

**VS Code + Live Server**

1. Откройте папку проекта в VS Code
2. Правый клик на `index.html` → **Open with Live Server**

**Терминал**

```bash
npx serve .
```

Затем откройте в браузере адрес, который выведет команда (обычно `http://localhost:3000`).

## GitHub Pages

**https://radomir-radionov.github.io/lessons/**

### Включить публикацию (один раз, без Actions)

GitHub Actions не может включить Pages без ручной настройки. Сделайте так:

1. Откройте **[Settings → Pages](https://github.com/radomir-radionov/lessons/settings/pages)**
2. **Build and deployment** → **Deploy from a branch**
3. **Branch:** `master` · **Folder:** `/ (root)` → **Save**
4. Подождите 1–2 минуты и откройте ссылку выше

> Не выбирайте **GitHub Actions** — для этого проекта достаточно публикации из ветки `master`.

### Сборка данных уроков

```bash
npm run build
```

## Просмотр

- Боковая панель — список уроков
- Вкладки — Урок, План, Задачи, ДЗ
- Ссылки между файлами урока работают внутри просмотрщика
