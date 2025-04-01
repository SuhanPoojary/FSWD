import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Corrected the file extension
import './index.css';

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<App />);
}