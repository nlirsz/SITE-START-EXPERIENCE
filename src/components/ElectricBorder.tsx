import React from 'react';
import './ElectricBorder.css';

type Props = {
  color?: string;
  thickness?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function ElectricBorder({
  color = '#F2FF00',
  thickness = 3,
  speed = 1.2,
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
    <div className={`electric-border ${className ?? ''}`} style={vars as React.CSSProperties} aria-hidden>
      <div className="eb-outline" />
    </div>
  );
}
