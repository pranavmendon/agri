import React from "react";

function SoilStatus({ region, weatherTemp, humidity, forecast }) {
  return (
    <div className="telemetry-banner">
      <div className="telemetry-item">
        <span className="telemetry-label">Farm Region:</span>
        <span className="telemetry-val">📍 {region}</span>
      </div>
      <div className="telemetry-item">
        <span className="telemetry-label">Ambient Temperature:</span>
        <span className="telemetry-val">🌡️ {weatherTemp}°C</span>
      </div>
      <div className="telemetry-item">
        <span className="telemetry-label">Air Humidity:</span>
        <span className="telemetry-val">💧 {humidity}%</span>
      </div>
      <div className="telemetry-item">
        <span className="telemetry-label">24h Forecast:</span>
        <span className="telemetry-val">⛅ {forecast}</span>
      </div>
    </div>
  );
}

export default SoilStatus;
