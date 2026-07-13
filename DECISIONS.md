# Engineering Decisions

This document records important architectural decisions made during development and the reasoning behind them.

The intention is to document not only _what_ was chosen, but also _why_.

---

## Mock Data Before APIs

Decision

Start with realistic mock datasets instead of building backend services first.

Why

The primary objective is to design a thoughtful user experience.

Separating frontend development from backend implementation allows faster iteration on layouts, interactions and information hierarchy.

---

## Zustand for Global State

Decision

Use Zustand instead of Redux Toolkit.

Why

The current application has relatively simple shared state.

Zustand keeps the implementation lightweight while remaining scalable as additional filters and dashboard interactions are introduced.

---

## Feature-Oriented Structure

Decision

Organize the application around business features rather than component types.

Why

As projects grow, feature boundaries are easier to understand and maintain than folders grouped only by components or pages.

---

## Reusable Components First

Decision

Extract reusable UI components as soon as duplication appears.

Why

Consistency becomes easier to maintain, and future screens can be developed more quickly with fewer design differences.

---

## Responsive From Day One

Decision

Design every screen for multiple viewport sizes during implementation.

Why

Retrofitting responsiveness later often leads to unnecessary complexity and inconsistent layouts.

---

## Realistic Business Context

Decision

Model the dashboard around pharmaceutical distribution instead of generic analytics.

Why

Building around a real business scenario leads to better product thinking and more meaningful interface decisions.

---

## Keep Visual Design Secondary

Decision

Prioritize clarity before visual effects.

Why

Animations and styling should support understanding rather than distract from it.

Users should recognize important information immediately.

---

## Keep Documentation Alongside Code

Decision

Maintain architecture and decision documents inside the repository.

Why

Well-written documentation makes future changes easier and explains the reasoning behind technical choices, especially for new contributors or reviewers.

---

These decisions are expected to evolve as the project grows. Whenever a better approach is identified, the documentation should be updated alongside the code rather than treated as static reference material.
