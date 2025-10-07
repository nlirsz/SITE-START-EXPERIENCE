import React from 'react';
import './ElectricBorder.css';

type Props = {
  color?: string;
  thickness?: number;
  speed?: number; // seconds for base animation
  className?: string;
  style?: React.CSSProperties;
};

export default function ElectricBorder({
  color = '#F2FF00',
  thickness = 2,
  speed = 1,
  className,
  style
}: React.PropsWithChildren<Props>) {
  const vars: React.CSSProperties = {
    ['--electric-color' as any]: color,
    ['--eb-thickness' as any]: `${thickness}px`,
    ['--eb-speed' as any]: `${speed}s`,
    ...(style || {})
  };

  return (
    <div className={`electric-border ${className ?? ''}`} style={vars as React.CSSProperties}>
      <svg className="eb-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <rect className="eb-rect" x="1" y="1" rx="12" ry="12" width="98" height="98" />
      </svg>
    </div>
  );
}
