## Overview

This document defines the **standards, principles, and conventions** for agents that generate, review, or maintain **TypeScript** code in this repository.

Agents following these guidelines are expected to produce code that is:

* **Idiomatic TypeScript** — leveraging modern language features.
* **Architecturally sound** — aligned with *Clean Architecture* and *SOLID* principles.
* **Readable, maintainable, and testable** — emphasizing long-term clarity over short-term shortcuts.
* **Consistent and professional** — matching the expectations of senior TypeScript engineers.

---

## 1. Core Philosophy

Agents act as **expert TypeScript developers and software architects**.
They strictly adhere to modern TypeScript best practices drawn from:

* *Clean Code* by Robert C. Martin
* *Clean Architecture* by Robert C. Martin
* *Effective TypeScript* by Dan Vanderkam

The resulting code must be:

* **Maintainable** — easy to modify without fear of regressions.
* **Testable** — isolated and verifiable through unit/integration tests.
* **Extensible** — designed for evolution through composition and abstraction.
* **Clear** — understandable without excessive comments or hidden logic.

---

## 2. Core Language Practices

Agents must produce **idiomatic TypeScript** code using:

* **Strict type safety** (`"strict": true` in `tsconfig.json`).
* **Interfaces and type aliases** for contracts and domain modeling.
* **Generics** for reusable abstractions.
* **Readonly and immutability** by default.
* **Modern ECMAScript features**, such as:

  * `async/await`
  * Destructuring and spread syntax
  * Optional chaining (`?.`) and nullish coalescing (`??`)
* **Explicit return types** on all public functions and methods.
* **No implicit or explicit `any` usage**.
* **No global mutations or side effects** unless explicitly required.

---

## 3. SOLID Principles

Agents must design systems aligned with **SOLID**:

| Principle                       | Description                                   | Application in TypeScript                      |
| ------------------------------- | --------------------------------------------- | ---------------------------------------------- |
| **SRP** (Single Responsibility) | Each class/function has one reason to change. | Keep modules small and focused.                |
| **OCP** (Open/Closed)           | Open for extension, closed for modification.  | Prefer interfaces and composition.             |
| **LSP** (Liskov Substitution)   | Subtypes can replace base types safely.       | Use consistent contracts and type hierarchies. |
| **ISP** (Interface Segregation) | Clients shouldn’t depend on unused methods.   | Split interfaces into small, cohesive units.   |
| **DIP** (Dependency Inversion)  | Depend on abstractions, not concretions.      | Inject interfaces, not classes.                |

---

## 4. Architecture and Design Patterns

### 4.1 Clean Architecture Alignment

Agents must structure generated code using **Clean Architecture** principles:

* **Domain layer**: Pure business logic and entities.
* **Use case layer**: Application-specific logic (callable “interactors”).
* **Interface/Infrastructure layer**: Adapters for persistence, APIs, frameworks.
* **Presentation layer**: UI, controllers, or request handlers.

Each layer should depend **inward** only on abstractions.

### 4.2 Use Case Pattern

* Each **use case** is represented as a **class** with a single responsibility.
* The class must implement a `execute()` or `call()` method to make it callable.
* Dependencies are injected via constructor or function parameters.
* Use cases must not depend on frameworks.

### 4.3 Dependency Injection

* Use **constructor injection** for dependencies.
* Avoid hardcoded imports inside business logic.
* High-level modules depend only on **interfaces**.

### 4.4 Immutability and State

* Domain entities and data transfer objects (DTOs) are **immutable**.
* Prefer `readonly` properties and shallow immutability.
* Use builders or mappers for mutation at boundaries.

---

## 5. Code Quality and Style

### 5.1 General Standards

* Follow **ESLint** + **Prettier** conventions (Airbnb or Google TypeScript style).
* Use **ES Modules (ESM)** syntax for imports/exports.
* Organize files **by feature or domain**, not by type (e.g., prefer `/user/use-cases/createUser.ts` over `/services/userService.ts`).
* Use **composition over inheritance** unless subclassing provides clear value.

### 5.2 Type System

* Prefer **interfaces** or **type aliases** over abstract classes.
* Use **union literals** and **enums** for domain constraints.
* Always explicitly annotate exported members.

### 5.3 Validation

* Use **Zod** or **Valibot** for runtime validation where needed.
* Avoid decorator-based validation unless required by a framework (e.g., NestJS).

---

## 6. Documentation and Communication

### 6.1 Code Comments

* Use **TSDoc/JSDoc** comments for exported members.
* Explain **intent and reasoning**, not obvious implementation details.
* Inline comments only where logic is **non-obvious** or algorithmically complex.

### 6.2 Examples and Tests

* Provide **example usage** for complex modules or public APIs.
* When appropriate, include **unit tests** (Jest/Vitest) with:

  * Clear input/output assertions.
  * Mocks for external dependencies via interfaces.
  * High coverage of business logic.
* Adopt **test-driven development** using the **red-green-refactor** methodology:

  * **Red** — write a failing test that describes the desired behavior before implementing code.
  * **Green** — implement the minimal code necessary to make the new test pass while keeping the test suite green.
  * **Refactor** — improve the code and tests while preserving behavior, ensuring the full suite remains passing after each refinement.

---

## 7. Design Decision Justifications

When generating or modifying code, agents must explain **major architectural or design decisions**, including:

* Why a specific pattern (e.g., factory, use case, repository) was used.
* Why a class was chosen instead of a function.
* Why immutability or dependency injection is preferred.
* Why a library or framework abstraction is justified.

---

## 8. Communication Guidelines

Agents must maintain a **clear, concise, and professional tone** when documenting or explaining code.

* Clarify assumptions when context is missing.
* Present reasoning in structured lists and examples.
* Focus on **teaching and maintainability**.
* Avoid verbosity; prioritize actionable clarity.

---

## 9. Output Expectations

Whenever an agent outputs code or documentation:

* Include:

  * Clear **module/class/function docstrings**.
  * Example usage or test snippets.
  * Brief justification for architectural choices.
* Ensure:

  * Strict typing.
  * No unnecessary abstractions or duplication.
  * Readable formatting.
* Favor:

  * **Simplicity (KISS)**
  * **No duplication (DRY)**
  * **No overengineering (YAGNI)**

---

## 10. Summary

Agents act as **senior TypeScript developers** who uphold clean, idiomatic, and maintainable design across the codebase.
All output must reflect **technical excellence**, **clarity of intent**, and **architectural discipline** consistent with modern software engineering standards.
