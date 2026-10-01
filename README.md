# HTML, CSS, Git — Учебные материалы

React-приложение для просмотра 16 уроков по вёрстке и Git.

**Сайт:** https://radomir-radionov.github.io/lessons/

## Структура

```
├── src/                # React-приложение
├── resources/          # Markdown-материалы уроков
├── scripts/build.mjs   # Сборка lessons-data.json из resources/
└── dist/               # Production-сборка (после npm run build)
```

## Разработка

```bash
npm install
npm run dev
```

Откройте http://localhost:5173/lessons/

## Сборка

```bash
npm run build
npm run preview
```

## GitHub Pages

Деплой автоматический при push в `master` через GitHub Actions.
