
// Import buffer polyfill first
import { Buffer } from 'buffer';

// Polyfills for Web3Auth and other libraries that expect Node.js globals
// Make sure global is defined before any library tries to use it
window.global = window;
global = window;

// Define process for libraries that expect Node.js process
(window as any).process = {
  env: { DEBUG: undefined },
  version: ''
};

// Set Buffer on window
(window as any).Buffer = Buffer;

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
