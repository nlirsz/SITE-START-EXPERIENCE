
declare module 'react/jsx-runtime';

// Allow importing figma asset aliases and common image types as strings
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

// Minimal JSX typings to satisfy the TS compiler in this workspace.
// This is intentionally permissive (any) to avoid blocking rapid iterations.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export {};
