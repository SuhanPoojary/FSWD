
/// <reference types="vite/client" />

declare module '*.jsx' {
  import React from 'react';
  const component: React.ComponentType<any>;
  export default component;
}

declare module '*.js' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
