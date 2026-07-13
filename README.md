# Pharma Lens

An interactive pharmaceutical territory intelligence dashboard designed to help distributors understand business performance through maps, analytics and operational insights.

> **Current Status:** Frontend Foundation Complete (UI + Architecture)

---

## Overview

Pharma Lens is a frontend-first project built to explore how operational data can be transformed into meaningful business interfaces.

Many pharmaceutical distributors still rely on spreadsheets, phone calls and manual reporting to monitor sales performance across territories. As operations grow, understanding what is happening across the business becomes increasingly difficult.

This project reimagines that experience by presenting complex business data through an intuitive, interactive dashboard.

Although the current version uses mock data, every feature is designed with production scalability in mind.

---

## Why I Built This

This project is more than a UI exercise.

I wanted to demonstrate how I approach frontend engineering when building products that are expected to grow over time.

My focus is on:

- Building reusable components
- Designing scalable frontend architecture
- Creating intuitive user experiences
- Organizing complex information clearly
- Writing maintainable and predictable code

---

## Current Features

### Dashboard

- Responsive dashboard layout
- KPI summary cards
- Performance overview
- Territory statistics
- Modern design system

### Territory Intelligence

- Interactive map
- Territory visualization
- Territory selection
- Detail drawer
- Geographic overview

### Analytics

- Sales trend charts
- Performance insights
- Medicine distribution
- Time-based filtering
- Business summaries

### UI System

- Reusable components
- Responsive layouts
- Shared design patterns
- Consistent spacing and typography
- Modern dashboard experience

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### State Management

- Zustand

### Mapping

- React Leaflet
- OpenStreetMap

### Charts

- Recharts

### Icons

- Lucide React

---

## Project Structure

```text
src/
│
├── app/
├── layouts/
├── pages/
├── features/
│   ├── dashboard/
│   ├── territory/
│   ├── analytics/
│   └── medicines/
│
├── shared/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── store/
│   ├── types/
│   └── utils/
│
├── assets/
└── mocks/
```

---

## Engineering Principles

Throughout the project, I follow a few principles consistently:

- Build reusable components before page-specific solutions.
- Keep business logic close to its feature.
- Minimize unnecessary global state.
- Design responsive layouts from the beginning.
- Prefer readability over clever abstractions.
- Optimize for maintainability as the application grows.

---

## Project Documentation

The repository includes additional documents describing the product vision and engineering decisions.

| Document            | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `PROJECT_VISION.md` | Why the project exists and the long-term vision |
| `ROADMAP.md`        | Development phases and future plans             |
| `ARCHITECTURE.md`   | Project structure and technical approach        |
| `DECISIONS.md`      | Important engineering decisions and trade-offs  |

---

## Current Progress

- Frontend architecture
- Dashboard UI
- Responsive layouts
- Territory map
- Performance analytics
- Reusable component library
- Global state management
- Mock business data

### Planned

- API integration
- Authentication
- Role-based access
- Advanced filtering
- Search
- React Query
- Testing
- Performance optimization
- CI/CD

---

## Running the Project

```bash
# Clone the repository
git clone https://github.com/Khalidur-sujon/pharma-lens.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

## Design Philosophy

A dashboard should help users understand their business—not overwhelm them with numbers.

Every interface in Pharma Lens is designed to reduce cognitive load, surface meaningful insights and support faster decision-making.

---

## About This Project

Pharma Lens is an ongoing project created to showcase my frontend engineering approach, with an emphasis on scalable architecture, reusable UI systems and thoughtful product design.

As the project evolves, backend services and production features will be integrated without requiring major architectural changes.
