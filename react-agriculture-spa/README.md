# AgriSmart - Single Page Agricultural Advisory Portal (SPA)

> **Web Development Laboratory (316U01L306) - Experiment 08**  
> **Institution:** K. J. Somaiya School of Engineering, Mumbai  
> **Department:** Department of Computer Engineering - Academic Year 2026-27  
> **Student:** Neev Mhadgut (Roll No: 16010125139, Batch: B3, Division: B)  
> **Course Outcome (CO5):** Illustrate the concepts of various front-end web application developments, mockApi technologies frameworks using different web development tools.  
> **Live Local Dev Server:** [http://localhost:5174/](http://localhost:5174/)

---

## 1. What This Application Does

**AgriSmart** is an enterprise-grade Single Page Web Application (SPA) engineered with **React JS** and **React Router DOM**. It is designed specifically for precision farming and agricultural field telemetry monitoring.

In conventional agricultural portals (built as Multi-Page Applications), every navigation action causes a full browser document reload. On intermittent, low-bandwidth rural cellular networks (2G/3G/4G), this produces high latency, white-screen flashes, and loss of in-memory sensor state. AgriSmart overcomes this bottleneck by downloading the application shell once and orchestrating client-side routing and in-memory Virtual DOM reconciliation locally.

---

## 2. Key Functional Modules & Features

### 1. Home View - Agro-Climatic Dashboard (`/`)
* **Precision Farming Hero Banner:** Welcoming callout introducing the agronomic telemetry portal with quick call-to-action buttons navigating seamlessly to field plots or architecture docs.
* **Live Weather & Micro-Climate Telemetry Cards:**
  * **Ambient Air Temperature:** `29.4 °C` (Nominal field operating range)
  * **Relative Field Humidity:** `64 %` (Optimal transpiration index)
  * **Solar Irradiance:** `785 W/m²` (Peak photosynthetic capacity)
  * **IoT Gateway Status:** `4 / 4 Online` (100% LoRaWAN link active)
* **SPA Architectural Highlights:** Educational cards explaining client-side navigation, declarative collection mapping, and reactive farm state management.

---

### 2. Crops & Field Telemetry View (`/crops`)
* **Declarative Dataset Mapping (`Array.prototype.map()`):** Dynamically renders four distinct farm plots directly from a structured JavaScript dataset:
  1. **Sugarcane (`Co 86032 Nira`):** Plot A1 (South Lowland), 3.5 Ha, Clay Loam. Soil moisture initializes at a **Critical** level (28%), displaying an urgent irrigation advisory.
  2. **Cotton (`Bt RCH-2 Hybrid`):** Plot B4 (East Terrace), 2.8 Ha, Black Cotton Regur soil at **Optimal** moisture (48%).
  3. **Wheat (`HD-2967 Pusa`):** Plot C2 (North Basin), 4.2 Ha, Alluvial Loam at **Moderate** moisture (36%), advising a light sprinkler cycle within 24h.
  4. **Soybean (`JS-335 Yellow`):** Plot D5 (West Ridge), 1.9 Ha, Silty Loam at **Optimal** field capacity (54%).
* **Virtual DOM Reconciliation Keys:** Every generated plot card is stamped with a unique domain key (`key={crop.id}` e.g., `key="PLOT-A101"`), enabling React's O(n) heuristic diffing algorithm to preserve component state and avoid costly DOM mutations.
* **Visual Telemetry Gauge Bars:** Real-time animated progress bars color-coded by agricultural thresholds:
  * **Critical (< 30%):** `#ef4444` (Red)
  * **Moderate (30% - 45%):** `#f59e0b` (Amber)
  * **Optimal (> 45%):** `#10b981` (Green)
* **Interactive Precision Irrigation Simulation (`useState`):**
  * Farmers can click **`Trigger Water Drip (+15%)`** on any under-irrigated plot.
  * The handler updates the plot's moisture percentage, transitions the status badge (e.g., from Critical 28% to Moderate 43%), logs the watering timestamp (`Just now (Drip Active)`), and displays a prominent green feedback alert banner (`Status Update: Drip cycle triggered for Sugarcane (PLOT-A101)`).
* **Multi-Criteria Category Filtering:** Real-time filter buttons (`All`, `Critical`, `Moderate`, `Optimal`) with dynamic count pills allowing operators to isolate stressed crop zones instantly.

---

### 3. About View - System Architecture & Agronomy Principles (`/about`)
* **Single Page Application (SPA) vs. Multi-Page Application (MPA) Comparison:**
  | Evaluation Metric | Traditional Multi-Page App (MPA) | AgriSmart (React SPA) |
  | :--- | :--- | :--- |
  | **Routing Mechanism** | Browser requests new HTML documents from web server | Client-side routing via React Router DOM |
  | **Document Reloads** | Full page reload, white-screen flashes, DOM teardown | Zero reloads; only the target view components swap |
  | **Network Bandwidth** | Re-downloads headers, stylesheets, and scripts on every click | Downloads bundle once; transfers minimal JSON state only |
  | **User Experience** | High latency on rural networks, form state wiped | Instant sub-second transitions, fluid app-like feel |
* **Technology Stack Documentation:** In-depth explanation of React 19, JSX syntax, React Router DOM primitives (`BrowserRouter`, `Routes`, `Route`, `NavLink`), and Vite tooling.
* **Academic Student Credentials:** Clear attribution to student Neev Mhadgut (Roll No: 16010125139, Batch: B3, Division: B, Sem III).

---

### 4. Persistent Layout Shell (`Navbar` & `Footer`)
* **Smart Navigation Bar:**
  * Brand emblem (`AG AgriSmart`) with subtitle.
  * Active route indicators utilizing `NavLink` with animated active navigation pills.
  * Live status pill (`Sensors Online`) with green radar dot and student batch badge (`B3 • 16010125139`).
* **Semantic Footer:** Somaiya institutional attribution, syllabus alignment, and academic credentials.

---

## 3. Architecture & Component Hierarchy

```
App (BrowserRouter)
|-- Navbar (Sticky Header with NavLink Routing & Sensor Status)
|-- main (Main Content Container)
|   `-- Routes (Route Matching Engine)
|       |-- Route path="/"        --> <Home />
|       |                               |-- Hero Banner & CTAs
|       |                               |-- Weather Telemetry Grid (4 Metrics)
|       |                               `-- SPA Architectural Capabilities
|       |
|       |-- Route path="/crops"    --> <Crops />
|       |                               |-- Alert Banner (State Feedback)
|       |                               |-- Category Filter Toolbar
|       |                               `-- Crop Grid (Array.map with unique keys)
|       |                                   |-- Plot Metadata Tags
|       |                                   |-- Moisture Progress Bar
|       |                                   |-- Agronomic Advice & Nutrition
|       |                                   `-- Interactive Irrigation Trigger
|       |
|       `-- Route path="/about"    --> <About />
|                                       |-- Case Study Overview
|                                       |-- SPA vs MPA Comparison Table
|                                       |-- Technology Stack Breakdown
|                                       `-- Academic Student Metadata Box
|
`-- Footer (Institutional Credentials & Academic Attribution)
```

---

## 4. Technology Stack & Dependencies

| Tool / Library | Version | Role in Project |
| :--- | :--- | :--- |
| **Node.js** | `v24.21.0 LTS` | Server-side JavaScript runtime engine |
| **npm** | `12.2.0` | Package manager |
| **React** | `19.3.1` | Core front-end UI framework (declarative components & Virtual DOM) |
| **React DOM** | `19.3.1` | React renderer targeting the browser DOM |
| **React Router DOM** | `6.22.0` | Declarative client-side routing and navigation engine |
| **Vite** | `8.3.5` | Next-generation frontend bundler and development server |
| **Vanilla CSS3** | Modern Standards | Custom responsive design system with agricultural tokens |

---

## 5. How to Run the Application Locally

The dev server is currently running in the background. You can access it directly at:
**[http://localhost:5174/](http://localhost:5174/)**

### Manual Commands:
```bash
# 1. Navigate into the application directory
cd "react-agriculture-spa"

# 2. Start the Vite development server
npm run dev

# 3. Open in your browser
# URL: http://localhost:5174/

# 4. Create an optimized production bundle
npm run build

# 5. Preview the production build locally
npm run preview
```

---

## 6. Project Directory Structure

```
react-agriculture-spa/
|-- node_modules/                 # Installed runtime packages
|-- public/                       # Static public assets
|-- src/
|   |-- components/
|   |   |-- Navbar.jsx            # Sticky navigation with NavLink & live status
|   |   `-- Footer.jsx            # Academic credentials & institutional footer
|   |-- pages/
|   |   |-- Home.jsx              # Agro-climatic dashboard & weather metrics
|   |   |-- Crops.jsx             # Array.map() crop plot directory & drip triggers
|   |   `-- About.jsx             # SPA vs MPA comparison & architecture stack
|   |-- App.css                   # Agriculture design tokens, badges & animations
|   |-- App.jsx                   # BrowserRouter, Routes container & route mapping
|   `-- main.jsx                  # React DOM client mounting entry point
|-- index.html                    # HTML5 application shell
|-- package.json                  # Dependencies manifest (react, react-router-dom, vite)
|-- vite.config.js                # Vite configuration with port 5174
`-- README.md                     # Comprehensive project documentation
```
