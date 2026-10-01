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

### Включить публикацию (один раз)

Сейчас Pages **не включён** в репозитории — поэтому сайт отдаёт 404.

1. Откройте [Settings → Pages](https://github.com/radomir-radionov/lessons/settings/pages) (нужен вход в GitHub)
2. **Build and deployment** → **GitHub Actions**
3. Сохраните — при следующем push workflow задеплоит сайт

Или через терминал (после `gh auth login`):

```bash
gh api repos/radomir-radionov/lessons/pages -X POST \
  -f build_type=workflow
```

### Сборка данных уроков

```bash
npm run build
```

## Просмотр

- Боковая панель — список уроков
- Вкладки — Урок, План, Задачи, ДЗ
- Ссылки между файлами урока работают внутри просмотрщика
