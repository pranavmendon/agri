import React from 'react';

function About() {
  return (
    <div className="page-content about-page">
      <div className="page-header">
        <h1 className="page-title">About AgriSmart Portal & SPA Architecture</h1>
        <p className="page-subtitle">
          Single Page Web Application development principles applied to automated precision agriculture.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card primary-card">
          <h2>🌾 Experiment 08 Case Study Overview</h2>
          <p>
            The <strong>AgriSmart Telemetry Portal</strong> is developed as part of Experiment 08 for the 
            Web Development Laboratory. Building directly upon the component-driven concepts introduced in Experiment 07, 
            this project transitions our agricultural advisory system into a true <strong>Single Page Application (SPA)</strong>.
          </p>
          <p>
            In modern agronomy, field managers operate across rural areas with intermittent connectivity. 
            Traditional multi-page web applications suffer from slow HTTP round-trips, full-page reloads, and broken 
            user flows. AgriSmart resolves this by serving an application shell once and orchestrating client-side routing 
            through <strong>React Router</strong>.
          </p>
        </div>

        <div className="about-card">
          <h2>⚡ SPA vs Multi-Page Application (MPA)</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Multi-Page App (MPA)</th>
                <th>Single Page App (React SPA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Navigation</strong></td>
                <td>Browser requests new HTML document from server</td>
                <td>Client-side route matching via React Router</td>
              </tr>
              <tr>
                <td><strong>Page Reload</strong></td>
                <td>Full page white flash & reload</td>
                <td>Zero reload; only view components swap</td>
              </tr>
              <tr>
                <td><strong>Bandwidth</strong></td>
                <td>Redownloads headers, CSS, scripts each time</td>
                <td>Transfers minimal JSON state payload only</td>
              </tr>
              <tr>
                <td><strong>User Experience</strong></td>
                <td>Higher latency, state reset on reload</td>
                <td>App-like fluid transitions and persistent state</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="about-card">
          <h2>🛠️ Technologies & Architectural Stack</h2>
          <ul className="tech-list">
            <li>
              <strong>React 19 & JSX:</strong> Declarative component hierarchy and Virtual DOM reconciliation.
            </li>
            <li>
              <strong>React Router DOM:</strong> <code>BrowserRouter</code>, <code>Routes</code>, <code>Route</code>, 
              and <code>Link</code>/<code>NavLink</code> for declarative client-side navigation.
            </li>
            <li>
              <strong>JavaScript Array.map():</strong> Declarative rendering of crop plot datasets with unique <code>key</code> attributes.
            </li>
            <li>
              <strong>React useState Hook:</strong> Localized component state handling for live irrigation triggers and filter toggling.
            </li>
            <li>
              <strong>Vite Build Tooling:</strong> Lightning-fast ES module development server and optimized asset bundler.
            </li>
          </ul>
        </div>

        <div className="about-card meta-box">
          <h2>🎓 Academic Metadata</h2>
          <div className="meta-grid">
            <div className="meta-entry">
              <span className="meta-k">Institution:</span>
              <span className="meta-v">K. J. Somaiya School of Engineering, Mumbai</span>
            </div>
            <div className="meta-entry">
              <span className="meta-k">Department:</span>
              <span className="meta-v">Department of Computer Engineering</span>
            </div>
            <div className="meta-entry">
              <span className="meta-k">Course:</span>
              <span className="meta-v">Web Development Laboratory (316U01L306)</span>
            </div>
            <div className="meta-entry">
              <span className="meta-k">Student Name:</span>
              <span className="meta-v">Neev Mhadgut</span>
            </div>
            <div className="meta-entry">
              <span className="meta-k">Roll Number / UID:</span>
              <span className="meta-v">16010125139</span>
            </div>
            <div className="meta-entry">
              <span className="meta-k">DIV / Batch:</span>
              <span className="meta-v">Division B / Batch B3</span>
            </div>
            <div className="meta-entry">
              <span className="meta-k">Academic Term:</span>
              <span className="meta-v">Semester III (2026-27)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
