import React, { useState } from "react";

function CropInfo({ cropName, plotId, cropStage, soilType, initialMoisture, targetMoisture, defaultWatered }) {
  const isInteracted = window.location.search.includes("interacted");

  // State variables for dynamic agricultural data
  const [moisture, setMoisture] = useState(
    isInteracted && defaultWatered ? initialMoisture + 16 : (isInteracted && !defaultWatered ? initialMoisture - 5 : initialMoisture)
  );
  const [irrigationCount, setIrrigationCount] = useState(isInteracted && defaultWatered ? 2 : 0);
  const [lastWateredTime, setLastWateredTime] = useState(
    isInteracted && defaultWatered ? "10:42:15 AM (Auto-Logged)" : "Not yet watered today"
  );

  // Event handler for irrigation button
  const handleIrrigate = () => {
    setMoisture((prev) => Math.min(100, prev + 8));
    setIrrigationCount((prev) => prev + 1);
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setLastWateredTime(now);
  };

  // Event handler to simulate dry soil / evapotranspiration
  const handleDryPlot = () => {
    setMoisture((prev) => Math.max(0, prev - 5));
  };

  // Calculate advisory status based on moisture
  let statusClass = "status-optimal";
  let statusText = "Optimal Moisture Level";
  if (moisture < 30) {
    statusClass = "status-critical";
    statusText = "Critical: Immediate Irrigation Needed";
  } else if (moisture < targetMoisture) {
    statusClass = "status-warning";
    statusText = "Advisory: Moisture Below Target";
  }

  return (
    <div className="crop-card">
      <div className="card-header">
        <h3 className="crop-name">{cropName}</h3>
        <span className="plot-badge">{plotId}</span>
      </div>

      <div className="crop-details">
        <p><strong>Crop Growth Stage:</strong> {cropStage}</p>
        <p><strong>Soil Type:</strong> {soilType}</p>
        <p><strong>Target Moisture:</strong> {targetMoisture}%</p>
      </div>

      {/* Visual Soil Moisture Meter */}
      <div className="moisture-section">
        <div className="moisture-header">
          <span>Current Soil Moisture:</span>
          <span className="moisture-value">{moisture}%</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className={`progress-bar-fill ${statusClass}`}
            style={{ width: `${moisture}%` }}
          ></div>
        </div>
        <div className={`status-pill ${statusClass}`}>{statusText}</div>
      </div>

      {/* Irrigation Telemetry Summary */}
      <div className="telemetry-box">
        <p><strong>Irrigation Events Today:</strong> {irrigationCount}</p>
        <p><strong>Last Watered:</strong> {lastWateredTime}</p>
      </div>

      {/* Interactive Controls */}
      <div className="card-actions">
        <button className="btn btn-water" onClick={handleIrrigate}>
          💧 Irrigate Plot (+8%)
        </button>
        <button className="btn btn-dry" onClick={handleDryPlot}>
          ☀️ Simulate Heat (-5%)
        </button>
      </div>
    </div>
  );
}

export default CropInfo;
