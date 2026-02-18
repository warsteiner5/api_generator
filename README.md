# API Generator (Angular 17)

Проект подготовлен как стартовая платформа для:
- генерации файлов с помощью Plop;
- анализа TypeScript-кода через AST.

## Быстрый старт

```bash
npm install
npm start
```

## Команды

- `npm run generate` — запуск CLI Plop с несколькими генераторами (`component`, `service`, `feature`).
- `npm run ast:scan` — AST-скан текущего проекта через `ts-morph`.

## Архитектура генераторов

```text
tools/
  plop/
    generators/
      component/
      service/
      feature/
```

Каждый генератор изолирован в отдельной папке и подключается в `plopfile.cjs` через `plop.load(...)`.
Это позволяет безопасно расширять систему новыми командами без роста монолитного файла.
