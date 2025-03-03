import { type ReactNode } from 'react';

export interface ComponentCode {
  preview: string;
  html: string;
  css: string;
  fullcode: string;
  name?: string;
  component?: React.ComponentType<any>;
} 