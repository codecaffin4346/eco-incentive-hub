
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Polyfills for Web3Auth and other libraries that expect Node.js globals
window.global = window;
// @ts-ignore
global = window;

// Define process for libraries that expect Node.js process
// @ts-ignore - We're providing only the minimal process properties needed
window.process = {
  env: { DEBUG: undefined },
  version: ''
};

// Import buffer after defining global
import { Buffer } from 'buffer';
window.Buffer = Buffer;

createRoot(document.getElementById("root")!).render(<App />);
