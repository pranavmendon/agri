# Experiment 07: React Component Based Application

## Introduction

This experiment demonstrates the creation of a **React component‑based web application**. The goal is to practice component composition, state management, and routing using modern React practices.

## Objectives

- Build a multi‑page React app using functional components.
- Implement client‑side routing with `react-router`.
- Manage component state with React hooks.
- Style the application with CSS modules (or a CSS‑in‑JS solution).

## Setup

1. **Prerequisites**
   - Node.js (v18 or later)
   - npm or pnpm (the project uses `pnpm` for package management)
2. **Clone the repository** (if applicable) or navigate to the project directory.
3. Install dependencies:
   ```
   pnpm install
   ```
4. Start the development server:
   ```
   pnpm dev
   ```
   The app should be available at `http://localhost:3000`.

## Implementation Details

- **Entry point**: `src/main.jsx` renders the root `<App />` component.
- **Routing**: Configured in `src/App.jsx` using `BrowserRouter`, `Routes`, and `Route`.
- **Components**:
  - `Header.jsx` – navigation bar.
  - `Home.jsx` – landing page.
  - `About.jsx` – static information page.
  - `Counter.jsx` – example of stateful component using `useState`.
- **Styling**: Each component imports its own CSS module (e.g., `Header.module.css`).

## Testing

The project includes a basic test suite using **Vitest** and **React Testing Library**.
```bash
pnpm test
```
All tests should pass, confirming that components render correctly and the counter increments.

## Results

- The application compiles without errors.
- Navigation between pages works as expected.
- The counter component demonstrates state updates.
- Tests run successfully with 100% coverage for the implemented components.

## Conclusion

This experiment successfully showcases the fundamentals of building a component‑driven React application. Future extensions could include:
- Adding a global state manager (e.g., Redux or Zustand).
- Integrating an API layer with `axios` or `fetch`.
- Deploying the app to a static hosting service like Netlify or Vercel.

---
*Generated on $(Get-Date -Format "yyyy-MM-dd")*