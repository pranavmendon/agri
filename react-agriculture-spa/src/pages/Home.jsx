import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const telemetryMetrics = [
    { label: 'Ambient Temperature', value: '29.4 °C', icon: '🌡️', note: 'Nominal range' },
    { label: 'Field Relative Humidity', value: '64 %', icon: '💧', note: 'Optimal transpiration' },
    { label: 'Solar Irradiance', value: '785 W/m²', icon: '☀️', note: 'Peak photosynthesis' },
    { label: 'Active Farm Gateways', value: '4 / 4 Online', icon: '📡', note: '100% LoRaWAN link' },
  ];

  return (
    <div className="page-content home-page">
      <section className="hero-banner">
        <div className="hero-badge">Experiment 08 • React SPA & Client Routing</div>
        <h1 className="hero-title">
          Precision Agriculture <span className="highlight">Telemetry Portal</span>
        </h1>
        <p className="hero-description">
          Welcome to AgriSmart, an agronomic Single Page Application developed with React JS. 
          Monitor field micro-climates, inspect live IoT soil moisture levels, and access automated 
          irrigation recommendations without browser reloads.
        </p>
        <div className="hero-actions">
          <Link to="/crops" className="btn btn-primary">
            🌿 Inspect Field Crops & Plots →
          </Link>
          <Link to="/about" className="btn btn-secondary">
            📖 System Architecture & Details →
          </Link>
        </div>
      </section>

      <section className="metrics-section">
        <h2 className="section-title">Live Weather & Agro-Climatic Telemetry</h2>
        <div className="metrics-grid">
          {telemetryMetrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-info">
                <span className="metric-label">{metric.label}</span>
                <span className="metric-value">{metric.value}</span>
                <span className="metric-note">{metric.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Core Single Page Application (SPA) Capabilities</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Client-Side Navigation</h3>
            <p>
              Uses React Router to dynamically swap views inside the DOM without requesting new HTML documents, 
              delivering sub-second route transitions on low-bandwidth rural networks.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔁</div>
            <h3>Dynamic Array Mapping</h3>
            <p>
              Renders crop records dynamically from structured JavaScript arrays using <code>map()</code>, with unique 
              keys for high-performance Virtual DOM diffing.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💧</div>
            <h3>Interactive Farm Advisory</h3>
            <p>
              Simulates real-time precision irrigation triggers and sensor state mutations with localized 
              React state management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
