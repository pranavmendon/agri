import React, { useState, useEffect } from 'react';

function Crops() {
  // Agricultural dataset generated dynamically using map()
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

  // Interactive state trigger: irrigate a specific plot
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

  const filteredCrops = crops.filter(crop => {
    if (filter === 'All') return true;
    return crop.status === filter;
  });

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
                  <div
                    className={`progress-bar-fill ${statusClass}`}
                    style={{ width: `${crop.moisture}%` }}
                  ></div>
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
                <button
                  onClick={() => handleIrrigate(crop.id)}
                  className="btn btn-sm btn-action"
                  disabled={crop.moisture >= 60}
                >
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
