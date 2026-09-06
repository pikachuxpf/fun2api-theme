# fun2api-theme

Frontend-only Sub2API source snapshot for developing replaceable themes.

The active replaceable theme is **Soft UI** (`src/styles/soft-ui-theme.css`). It is loaded after the base frontend stylesheet from `src/main.ts`, so the visual layer can be swapped without changing routes, layout structure, backend behavior, or data.

This repository intentionally excludes backend code, production configuration, databases, logs, dependencies, build output, and credentials.
