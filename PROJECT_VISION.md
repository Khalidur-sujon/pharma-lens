# Pharma Lens

## Why this project exists

Most pharmaceutical distributors in Bangladesh still rely on phone calls, spreadsheets and experience to understand what's happening across their territories.

That approach works until the business starts growing.

As more territories, sales representatives and medicines are added, answering simple questions becomes difficult.

- Which territory is underperforming today?
- Which medicines are losing momentum?
- Where should the next sales visit happen?
- Is today's performance normal or becoming a problem?

Instead of opening multiple spreadsheets or waiting for end-of-day reports, decision makers should be able to understand the health of the business within a few seconds.

Pharma Lens is my attempt to design that experience.

This project is not intended to replicate an existing ERP system. Instead, it focuses on turning operational data into interfaces that help users notice patterns, identify anomalies and make faster decisions.

The current version focuses entirely on frontend engineering.

Every screen, interaction and component is built with scalability in mind, allowing a real backend to be integrated later without redesigning the application.

---

## Project Goals

- Design an interface that communicates complex business data with clarity.
- Build reusable and maintainable frontend architecture.
- Simulate real-world business workflows using mock data.
- Prioritize performance, responsiveness and usability.
- Keep the codebase easy to extend as new modules are introduced.

---

## Engineering Principles

While building this project, I intentionally avoided treating it as a collection of UI components.

Instead, I approached it as a production-ready dashboard where architecture is as important as visual design.

Some principles I consistently follow include:

- Small, reusable components with clear responsibilities.
- Predictable state management.
- Consistent naming conventions.
- Feature-oriented organization.
- Minimal prop drilling.
- Responsive layouts from the beginning rather than as an afterthought.
- Interfaces that emphasize readability over decoration.

---

## Current Status

The project is currently in the frontend foundation phase.

Completed so far:

- Dashboard layout
- Responsive navigation
- Analytics widgets
- Territory map
- Performance insights
- Reusable UI components
- Global state with Zustand
- Time-based filtering
- Mock business data
- Overall design system

Backend integration, authentication and real APIs are intentionally postponed until the frontend architecture is mature.

---

## Long-Term Vision

My goal is to evolve Pharma Lens into a realistic operational intelligence platform rather than another dashboard clone.

Beyond being a project, it represents how I approach frontend engineering:

building interfaces that remain maintainable as products become more complex.
