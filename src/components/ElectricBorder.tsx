import React from 'react';

type ElectricBorderProps = {
  className?: string;
  color?: string; // CSS color string
};

export default function ElectricBorder({ className = '', color }: ElectricBorderProps) {
  const style = color ? { ['--electric-border-color' as any]: color } : undefined;

  return (
    <svg
      className={`electric-border ${className}`}
      style={style as React.CSSProperties}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect x="1" y="1" width="98" height="98" rx="12" ry="12" />
    </svg>
  );
}
