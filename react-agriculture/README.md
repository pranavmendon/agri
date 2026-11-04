# Experiment 07: Component-Based Web Application using React JS

**Domain Case Study:** AI-Based Smart Agriculture & Crop Monitoring Advisory System  
**Course:** Web Development Laboratory (316U01L306) • Semester III  
**Student:** Neev Mhadgut (Roll No: 16010125139) • Batch B3  
**Institution:** K. J. Somaiya School of Engineering, Mumbai  

---

## 📌 Overview
This repository contains the source code and documentation for **Experiment 07**, demonstrating modern React component-based architecture for precision agricultural farm monitoring and smart irrigation advisory.

### Key Concepts Implemented:
- **JSX (JavaScript XML):** Declarative UI rendering, camelCase properties (`className`, `onClick`), embedded expressions `{}`.
- **Functional Components:** Modular, decoupled UI units (`CropInfo`, `SoilStatus`, `App`).
- **Unidirectional Props:** Passing structured agronomic telemetry (crop stage, plot ID, soil type, target moisture) from parent to child.
- **State Management (`useState`):** Dynamic soil moisture tracking, irrigation cycle counters, and active advisory alerts.
- **Synthetic Event Handling:** Interactive plot irrigation (`handleIrrigate`) and evapotranspiration simulation (`handleDryPlot`).

---

## 🏗️ Project Structure
```
react-agriculture/
├── public/                 # Static public assets
│   └── vite.svg
├── src/
│   ├── assets/             # Icons & graphics
│   ├── App.css             # Component styles, progress bars & status badges
│   ├── App.jsx             # Parent component & farm master state
│   ├── CropInfo.jsx        # Reusable plot component with props & useState
│   ├── SoilStatus.jsx      # Telemetry weather banner component
│   ├── index.css           # Global CSS reset
│   └── main.jsx            # React root DOM render
├── index.html              # HTML5 entry point
├── package.json            # Dependencies & scripts
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will run at `http://localhost:5173/`.

### 3. Production Build
```bash
npm run build
```

---

## 📊 Completed Experiment Tasks & Outputs
- **Task 1: Environment Verification** – Verified Node.js v24.21.0 and npm 12.2.0.
- **Task 2: Project Architecture** – Modular component structure separating presentation, state, and telemetry.
- **Task 3: Reusable Functional Components** – Created `CropInfo` handling individual plot states and `SoilStatus` displaying regional environmental factors.
- **Task 4: Props & State Integration** – Connected plot parameters via props and managed live moisture levels via `useState`.
- **Task 5: Interactive Event Handling** – Configured buttons to increment/decrement moisture levels and trigger automated irrigation alerts.
- **Task 6: Documentation & Screenshots** – Comprehensive lab write-up generated in `writeups/Experiment_7_React_Component_Application_Writeup.docx`.
