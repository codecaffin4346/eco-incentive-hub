
// Polyfill for 'global' which is required by Web3Auth
window.global = window;
window.process = {
  env: { DEBUG: undefined },
  version: ''
};

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
