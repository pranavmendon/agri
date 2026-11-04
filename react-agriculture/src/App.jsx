import React, { useState } from "react";
import CropInfo from "./CropInfo";
import SoilStatus from "./SoilStatus";
import "./App.css";

function App() {
  const isInteracted = window.location.search.includes("interacted");
  const [globalIrrigationAlert, setGlobalIrrigationAlert] = useState(isInteracted);

  return (
    <div className="app-container">
      {/* Top Banner & Header */}
      <header className="app-header">
        <div className="header-badge">EXPERIMENT 07 &bull; REACT JS COMPONENT ARCHITECTURE</div>
        <h1>🌱 Smart Agriculture & Crop Monitoring Advisory</h1>
        <p className="subtitle">
          Demonstrating Functional Components, Props, JSX, State (useState), and Event Handling in React
        </p>
        <div className="meta-bar">
          <span><strong>Student:</strong> Neev Mhadgut (Roll No: 16010125139)</span>
          <span><strong>Batch:</strong> B3 &bull; Sem-III WDL</span>
          <span><strong>Case Study:</strong> AI-Based Smart Irrigation Advisory</span>
        </div>
      </header>

      {/* Weather & Regional Telemetry Component */}
      <SoilStatus 
        region="Baramati Agronomic Research Cluster"
        weatherTemp={29.4}
        humidity={58}
        forecast="Clear Skies, Mild Evaporation"
      />

      {/* Global Interactive Farm Controls */}
      <div className="farm-control-panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3>Farm Master Controller</h3>
          <span style={{ fontSize: "0.85rem", color: "#666" }}>
            Interactive Demo Mode: {isInteracted ? "Active State (Post-Interaction)" : "Initial State"}
          </span>
        </div>
        <button 
          className={`btn-toggle-alert ${globalIrrigationAlert ? "active" : ""}`}
          onClick={() => setGlobalIrrigationAlert(!globalIrrigationAlert)}
        >
          {globalIrrigationAlert ? "🔔 Main Irrigation Alert: ACTIVE" : "🔕 Main Irrigation Alert: STANDBY"}
        </button>
        {globalIrrigationAlert && (
          <div className="alert-banner">
            ⚠️ Automated Advisory: Evapotranspiration is elevated today. Ensure sugarcane plots maintain &ge; 45% moisture. Automated canal gates scheduled for 18:00 IST.
          </div>
        )}
      </div>

      {/* Grid of Modular CropInfo Functional Components */}
      <main className="crops-grid">
        <CropInfo 
          cropName="Sugarcane (Co 86032)"
          plotId="PLT-SUGAR-104"
          cropStage="Grand Growth (Day 145)"
          soilType="Black Clay Loam (Regur)"
          initialMoisture={28}
          targetMoisture={50}
          defaultWatered={true}
        />

        <CropInfo 
          cropName="Cotton (Bt Cotton RCH-2)"
          plotId="PLT-COTON-209"
          cropStage="Flowering & Boll Formation"
          soilType="Deep Black Cotton Soil"
          initialMoisture={38}
          targetMoisture={45}
          defaultWatered={false}
        />

        <CropInfo 
          cropName="Wheat (Sharbati Gold)"
          plotId="PLT-WHEAT-311"
          cropStage="Crown Root Initiation"
          soilType="Alluvial Loam"
          initialMoisture={44}
          targetMoisture={42}
          defaultWatered={false}
        />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Smart Irrigation Advisory Web Portal &bull; Department of Computer Engineering &bull; K. J. Somaiya School of Engineering</p>
      </footer>
    </div>
  );
}

export default App;
