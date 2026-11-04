# K. J. SOMAIYA SCHOOL OF ENGINEERING, MUMBAI
### Department of Computer Engineering • Academic Year 2026-27

---

### Student Metadata
| Field | Value | Field | Value |
| :--- | :--- | :--- | :--- |
| **Course Name:** | Web Development Laboratory (316U01L306) | **Semester:** | III |
| **Date of Performance:** | 03 / 11 / 2026 | **DIV / Batch No:** | B / B3 |
| **Student Name:** | Neev Mhadgut | **Roll No:** | 16010125139 |

---

# EXPERIMENT 08
## Simple Single Page Web Application using React JS
### Case Study: AgriSmart – Precision Agriculture & Irrigation Advisory SPA

**Course Outcome (CO5):** Illustrate the concepts of various front-end web application developments, mockApi technologies frameworks using different web development tools.

---

## 1. Aim
To develop a responsive Single Page Web Application (SPA) using React JS, leveraging reusable components, client-side routing via React Router (`react-router-dom`), JavaScript collection mapping (`Array.prototype.map()`), unique reconciliation keys, and localized state management applied to an IoT-driven Smart Agriculture & Precision Irrigation Advisory case study.

## 2. Objectives
1. **Understand SPA Architecture:** Master how Single Page Applications eliminate complete browser page reloads by intercepting client navigation.
2. **Implement Client-Side Routing:** Configure `BrowserRouter`, `Routes`, `Route`, `Link`, and `NavLink` for declarative path mapping.
3. **Build Modular Application Views:** Construct independent view components: `Home` (Dashboard & Weather Telemetry), `Crops` (Plot Telemetry Directory), and `About` (SPA Architecture & Academic Metadata).
4. **Declarative Collection Mapping:** Use `Array.prototype.map()` to dynamically render complex telemetry cards from JavaScript data arrays.
5. **Reconciliation with Keys:** Demonstrate how unique `key={crop.id}` properties optimize React's Virtual DOM diffing.
6. **Localized State Management:** Apply the `useState` hook for real-time irrigation trigger simulations and dynamic plot filtering.
7. **Responsive Domain Styling:** Design an agricultural aesthetic with modern cards, badges, and progress bars.

---

## 3. Software Requirements
- **Node.js:** v24.21.0 LTS
- **npm:** 12.2.0
- **React:** 19.3.1 (`react`, `react-dom`)
- **React Router DOM:** v6.22.0
- **Build Tool:** Vite v8.3.5
- **IDE:** Visual Studio Code
- **Browser:** Google Chrome / Microsoft Edge

---

## 4. Problem Statement: Agriculture Case Study
Modern agricultural operations manage distributed acreage divided into specialized micro-plots (Sugarcane, Cotton, Wheat, Soybean). Agronomists require an interactive digital portal to monitor soil moisture telemetry, analyze ambient weather, inspect plot health, and simulate precision irrigation triggers. Operating in rural regions with low-bandwidth, intermittent cellular connections makes traditional multi-page web portals unusable due to repetitive page reloads and excessive data overhead.

The student is required to engineer a responsive Single Page Application (`AgriSmart`) utilizing React JS and React Router. The application features seamless client-side navigation between Home, Crops, and About views without browser reloads.

---

## 5. Suggested Component Architecture & Directory Structure
```
react-agriculture-spa/
├── node_modules/
│   └── react-router-dom/          [Client-Side Routing Engine]
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             [Header Navigation with NavLink & Live IoT Status]
│   │   └── Footer.jsx             [Academic Attribution & Somaiya Institutional Credentials]
│   ├── pages/
│   │   ├── Home.jsx               [Agro-Climatic Dashboard, Weather Telemetry & SPA Features]
│   │   ├── Crops.jsx              [Dynamic Array.map() Plot Telemetry, Keys & Irrigation Triggers]
│   │   └── About.jsx              [SPA vs MPA Comparison Table, Tech Stack & Academic Metadata]
│   ├── App.css                    [Responsive Agriculture Stylesheet & Visual Design Tokens]
│   ├── App.jsx                    [BrowserRouter Shell, Routes Container & View Route Mappings]
│   └── main.jsx                   [React DOM Root Mounting Target]
├── index.html                     [HTML5 Shell with Typography Preconnects]
├── package.json                   [Project Manifest & Runtime Dependencies]
└── vite.config.js                 [Vite Fast-Refresh Bundler Configuration]
```

---

## 6. Program Source Code

### `src/App.jsx`
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Crops from './pages/Crops';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### `src/components/Navbar.jsx`
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand">
          <div className="brand-logo">🌾</div>
          <div className="brand-text">
            <span className="brand-title">AgriSmart</span>
            <span className="brand-subtitle">Smart Agriculture Portal</span>
          </div>
        </div>

        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            🏠 Home
          </NavLink>
          <NavLink to="/crops" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            🌱 Crops & Telemetry
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            ℹ️ About System
          </NavLink>
        </nav>

        <div className="header-status">
          <span className="status-pill">
            <span className="status-dot"></span>
            Sensors Online
          </span>
          <span className="badge-batch">B3 • 16010125139</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
```

### `src/pages/Crops.jsx`
```jsx
import React, { useState, useEffect } from 'react';

function Crops() {
  const initialCrops = [
    {
      id: 'PLOT-A101',
      name: 'Sugarcane',
      scientificName: 'Saccharum officinarum',
      variety: 'Co 86032 (Nira)',
      plotCode: 'Plot A1 - South Lowland',
      areaHectares: 3.5,
      moisture: 28,
      targetMoisture: 55,
      status: 'Critical',
      irrigationAdvice: 'Immediate drip irrigation required. 45 mm water depth.',
      fertilizerSchedule: 'Nitrogen top-dressing scheduled in 5 days.',
      soilType: 'Heavy Clay Loam',
      lastWatered: '48 hours ago'
    },
    {
      id: 'PLOT-B204',
      name: 'Cotton',
      scientificName: 'Gossypium hirsutum',
      variety: 'Bt RCH-2 Hybrid',
      plotCode: 'Plot B4 - East Terrace',
      areaHectares: 2.8,
      moisture: 48,
      targetMoisture: 50,
      status: 'Optimal',
      irrigationAdvice: 'Adequate moisture level. Next scheduled cycle in 4 days.',
      fertilizerSchedule: 'Potassium foliar spray at squaring stage.',
      soilType: 'Black Cotton Regur',
      lastWatered: '18 hours ago'
    },
    {
      id: 'PLOT-C302',
      name: 'Wheat',
      scientificName: 'Triticum aestivum',
      variety: 'HD-2967 (Pusa)',
      plotCode: 'Plot C2 - North Basin',
      areaHectares: 4.2,
      moisture: 36,
      targetMoisture: 60,
      status: 'Moderate',
      irrigationAdvice: 'Light sprinkler irrigation recommended within 24 hours.',
      fertilizerSchedule: 'Zinc sulphate application pending post-watering.',
      soilType: 'Alluvial Loam',
      lastWatered: '32 hours ago'
    },
    {
      id: 'PLOT-D405',
      name: 'Soybean',
      scientificName: 'Glycine max',
      variety: 'JS-335 Yellow',
      plotCode: 'Plot D5 - West Ridge',
      areaHectares: 1.9,
      moisture: 54,
      targetMoisture: 50,
      status: 'Optimal',
      irrigationAdvice: 'Field capacity satisfied. Monitor drainage channels.',
      fertilizerSchedule: 'Rhizobium inoculation verified active.',
      soilType: 'Medium Silty Loam',
      lastWatered: '12 hours ago'
    }
  ];

  const [crops, setCrops] = useState(initialCrops);
  const [filter, setFilter] = useState('All');
  const [notification, setNotification] = useState('');

  const handleIrrigate = (plotId) => {
    setCrops(prevCrops =>
      prevCrops.map(crop => {
        if (crop.id === plotId) {
          const newMoisture = Math.min(crop.moisture + 15, 65);
          const newStatus = newMoisture >= 45 ? 'Optimal' : 'Moderate';
          return {
            ...crop,
            moisture: newMoisture,
            status: newStatus,
            irrigationAdvice: newMoisture >= 45 ? 'Adequate moisture level maintained.' : 'Watering in progress.',
            lastWatered: 'Just now (Drip Active)'
          };
        }
        return crop;
      })
    );
    const target = initialCrops.find(c => c.id === plotId);
    setNotification(`💧 Drip cycle triggered for ${target?.name} (${plotId}). Telemetry updated!`);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('interacted=true')) {
      handleIrrigate('PLOT-A101');
    }
  }, []);

  const filteredCrops = crops.filter(crop => (filter === 'All' ? true : crop.status === filter));

  return (
    <div className="page-content crops-page">
      <div className="page-header">
        <h1 className="page-title">Field Plot Telemetry & Crop Directory</h1>
        <p className="page-subtitle">
          Dynamically mapped crop records utilizing JavaScript array <code>map()</code> with unique <code>key</code> identifiers.
        </p>
      </div>

      {notification && (
        <div className="alert-banner">
          <span className="alert-icon">🔔</span>
          <span>{notification}</span>
        </div>
      )}

      <div className="toolbar">
        <div className="filter-group">
          <span className="filter-label">Filter Plots:</span>
          {['All', 'Critical', 'Moderate', 'Optimal'].map(statusName => (
            <button
              key={statusName}
              onClick={() => setFilter(statusName)}
              className={`filter-btn ${filter === statusName ? 'active' : ''}`}
            >
              {statusName} {statusName !== 'All' && `(${crops.filter(c => c.status === statusName).length})`}
            </button>
          ))}
        </div>
        <div className="summary-pill">
          Showing <strong>{filteredCrops.length}</strong> of <strong>{crops.length}</strong> Field Plots
        </div>
      </div>

      <div className="crops-grid">
        {filteredCrops.map(crop => {
          const statusClass =
            crop.status === 'Critical'
              ? 'status-critical'
              : crop.status === 'Moderate'
              ? 'status-moderate'
              : 'status-optimal';

          return (
            <div key={crop.id} className="crop-card">
              <div className="crop-card-header">
                <div>
                  <h2 className="crop-name">{crop.name}</h2>
                  <span className="crop-scientific">{crop.scientificName}</span>
                </div>
                <span className={`badge ${statusClass}`}>{crop.status}</span>
              </div>

              <div className="crop-meta-row">
                <span className="plot-tag">📍 {crop.plotCode}</span>
                <span className="variety-tag">🌾 {crop.variety}</span>
                <span className="area-tag">📐 {crop.areaHectares} Ha</span>
              </div>

              <div className="moisture-panel">
                <div className="moisture-label-row">
                  <span className="moisture-title">Soil Moisture Telemetry</span>
                  <span className="moisture-value">{crop.moisture}% (Target: {crop.targetMoisture}%)</span>
                </div>
                <div className="progress-bar-bg">
                  <div className={`progress-bar-fill ${statusClass}`} style={{ width: `${crop.moisture}%` }}></div>
                </div>
              </div>

              <div className="crop-details">
                <div className="detail-item">
                  <span className="detail-label">Soil Profile:</span>
                  <span className="detail-val">{crop.soilType}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Last Irrigated:</span>
                  <span className="detail-val">{crop.lastWatered}</span>
                </div>
                <div className="detail-item full-width">
                  <span className="detail-label">Agronomic Advice:</span>
                  <span className="detail-val advice-text">{crop.irrigationAdvice}</span>
                </div>
                <div className="detail-item full-width">
                  <span className="detail-label">Nutrition Schedule:</span>
                  <span className="detail-val">{crop.fertilizerSchedule}</span>
                </div>
              </div>

              <div className="card-actions">
                <button onClick={() => handleIrrigate(crop.id)} className="btn btn-sm btn-action">
                  💧 Trigger Water Drip (+15%)
                </button>
                <span className="key-indicator">key="{crop.id}"</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Crops;
```

---

## 7. Results & Conclusion
- **Results:** The responsive Single Page Web Application (`AgriSmart`) was successfully developed and executed using React JS and React Router. The application demonstrated client-side routing, modular view orchestration, declarative collection mapping (`Array.prototype.map()`), unique reconciliation keys, and localized state management.
- **Conclusion:** Single Page Applications eliminate page reloads and redundant server requests by updating the DOM dynamically via React Router and Virtual DOM diffing. In precision agriculture, this provides instantaneous telemetry updates, offline resilience, and minimal bandwidth consumption over rural cellular networks.

---

## 8. Post-Lab Questions & Technical Answers
1. **Why is React Router used?**
   React Router enables client-side routing in React without requesting new HTML documents from the server. It synchronizes browser URL, back/forward history, and deep-linking with component states.
2. **What are BrowserRouter, Routes and Route?**
   `BrowserRouter` provides history context via the HTML5 History API. `Routes` performs best-match algorithmic evaluation of its child `Route` elements. `Route` maps URL path strings to specific React component elements.
3. **What is the difference between Link and an HTML anchor (`<a>`)?**
   An HTML `<a>` causes a full page reload and tears down JavaScript state. React Router's `<Link>` intercepts navigation via `preventDefault()`, calls `history.pushState()`, and swaps components in place.
4. **Why is key used in React lists?**
   Keys provide stable identity to elements across re-renders for React's $O(n)$ Reconciliation diffing algorithm, preventing unnecessary DOM mutation and preserving component state.
5. **How does map() help in React?**
   `Array.prototype.map()` is a pure, immutable higher-order function that transforms raw data arrays into arrays of JSX elements inline within curly braces.
6. **How does Experiment 08 extend Experiment 07?**
   Experiment 07 focused on isolated components and props within a single page. Experiment 08 introduces multi-view routing, URL synchronization, and dynamic collection generation.
7. **How does SPA benefit rural precision agriculture?**
   SPAs download the application bundle once and only exchange minimal JSON data (<2 KB) thereafter, providing sub-second view switches and offline resilience on low-bandwidth rural networks.
