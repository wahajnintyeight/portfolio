import React from 'react';

const METRICS = [
  { value: '4+ years', detail: 'building in production' },
  { value: '30+', detail: 'client-facing applications' },
  { value: '900K+', detail: 'investor records · 40% lower P95' },
  { value: '1,000+', detail: 'concurrent GPS streams' },
];

export const MetricsGrid: React.FC = () => (
  <ul className="hero__metrics metrics" aria-label="Career highlights">
    {METRICS.map((metric) => (
      <li className="metric" key={metric.value}>
        <p><strong>{metric.value}</strong> {metric.detail}</p>
      </li>
    ))}
  </ul>
);
