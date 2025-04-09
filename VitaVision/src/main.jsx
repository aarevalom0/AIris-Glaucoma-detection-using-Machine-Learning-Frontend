import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/futur.ttf';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
