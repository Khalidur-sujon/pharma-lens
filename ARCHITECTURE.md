# Architecture

The project follows a feature-oriented structure with shared modules for reusable functionality.

The goal is to make it easy to scale without turning the codebase into a collection of unrelated components.

---

## High-Level Structure

```
src
│
├── app
├── layouts
├── pages
├── features
│   ├── dashboard
│   ├── territory
│   ├── analytics
│   └── medicines
│
├── shared
│   ├── components
│   ├── hooks
│   ├── store
│   ├── utils
│   ├── constants
│   └── types
│
├── assets
└── mocks
```

---

## Design Principles

### Reusable Components

UI elements are designed to solve one problem well.

Instead of creating page-specific components, commonly used elements live inside the shared layer so they can evolve independently.

Examples include:

- KPI cards
- Section titles
- Filters
- Search components
- Drawers

---

### Feature Isolation

Business logic stays inside feature modules whenever possible.

Each feature owns its components, data and internal utilities.

This reduces coupling and makes future refactoring significantly easier.

---

### Predictable State Management

Global state is reserved for information shared across multiple parts of the application.

Examples include:

- Selected date range
- Selected territory
- UI preferences

Local component state remains local unless there is a clear reason to promote it.

---

### Mock-First Development

The application currently uses mock datasets.

Designing with realistic data before integrating APIs allows the interface and user experience to mature independently from backend development.

Replacing mock data with live APIs should require minimal changes.

---

### Performance

Performance is considered during implementation rather than after the application is finished.

Current practices include:

- Reusable components
- Minimal unnecessary re-renders
- Lightweight global state
- Clean component boundaries
- Lazy opportunities for future modules
- Responsive layouts with minimal layout shifts

---

## Future Evolution

As the project grows, additional layers such as API services, React Query, authentication and testing can be introduced without restructuring the existing application.

The current architecture intentionally leaves room for that expansion.
