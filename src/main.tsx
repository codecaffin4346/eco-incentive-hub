
// Polyfills for Web3Auth and other libraries that expect Node.js globals
window.global = window;
global = window;
(window as any).process = {
  env: { DEBUG: undefined },
  version: ''
};
(window as any).Buffer = window.Buffer || require('buffer').Buffer;

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

