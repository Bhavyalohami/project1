import React from "react";

const KineticScene = ({ variant = "hero", label = "Dorse kinetic learning system" }) => {
  return (
    <div className={`kinetic-scene ${variant}`} aria-label={label}>
      <div className="orbital-stage">
        <div className="core-cube">
          <span />
          <span />
          <span />
        </div>
        <div className="orbit orbit-a"><i /></div>
        <div className="orbit orbit-b"><i /></div>
        <div className="orbit orbit-c"><i /></div>
        <div className="float-card card-a">
          <strong>Build</strong>
          <small>weekly sprint</small>
        </div>
        <div className="float-card card-b">
          <strong>Review</strong>
          <small>mentor notes</small>
        </div>
        <div className="float-card card-c">
          <strong>Demo</strong>
          <small>portfolio proof</small>
        </div>
      </div>
      <svg viewBox="0 0 620 360" className="motion-svg" role="img">
        <defs>
          <linearGradient id={`beam-${variant}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#d6ff32" />
            <stop offset="50%" stopColor="#8e6cff" />
            <stop offset="100%" stopColor="#ff3df2" />
          </linearGradient>
        </defs>
        <path className="wave wave-a" stroke={`url(#beam-${variant})`} d="M35 250 C130 90, 220 330, 310 170 S500 120, 590 245" />
        <path className="wave wave-b" stroke={`url(#beam-${variant})`} d="M35 130 C145 260, 220 70, 330 190 S505 285, 590 110" />
        <g className="node-system">
          {[82, 170, 265, 356, 455, 545].map((x, index) => (
            <circle key={x} cx={x} cy={index % 2 ? 130 : 245} r="9">
              <animate attributeName="r" values="7;13;7" dur={`${2.4 + index * 0.25}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
        <g className="scanner">
          <rect x="74" y="68" width="472" height="224" rx="34" />
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="5s" repeatCount="indefinite" />
        </g>
      </svg>
    </div>
  );
};

export default KineticScene;
