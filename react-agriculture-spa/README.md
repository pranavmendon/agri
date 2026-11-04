# AgriSmart - Single Page Agricultural Advisory Portal (SPA)

> **Experiment 08:** Simple Single Page Web Application using React JS & React Router  
> **Course:** Web Development Laboratory (316U01L306)  
> **Department:** Department of Computer Engineering, K. J. Somaiya School of Engineering  
> **Student:** Neev Mhadgut (Roll No: 16010125139, Batch: B3)

---

## 🌾 Overview
AgriSmart is an agronomic Single Page Application (SPA) developed with **React JS** and **React Router DOM**. It provides real-time agro-climatic monitoring, live soil moisture telemetry across field crop plots, and interactive precision drip irrigation triggers without requiring full-page browser reloads.

## 🚀 Key Features
- **Client-Side Navigation:** Seamless route transitions across `Home`, `Crops`, and `About` views via React Router (`BrowserRouter`, `Routes`, `Route`, `NavLink`).
- **Dynamic Collection Mapping:** Renders field plot cards from a structured JavaScript collection using `Array.prototype.map()` with unique reconciliation keys (`key={crop.id}`).
- **Precision Telemetry Gauges:** Real-time soil moisture progress bars with dynamic status badges (Critical, Moderate, Optimal).
- **Interactive State Simulation:** Simulated drip irrigation triggers (+15% moisture boost) powered by the `useState` hook with instant feedback alerts.
- **SPA vs MPA Architectural Analysis:** Deep comparison documentation on bandwidth reduction and sub-second route transitions on rural farm networks.

## 🛠️ Tech Stack
- **React 19**
- **React Router DOM**
- **Vite Bundler**
- **Vanilla Modern CSS** (Agricultural visual tokens)

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
