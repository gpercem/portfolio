import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import './styles/cursors.css'
import App from './App.jsx'
import Bulut from '@auticlabs/bulut'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bulut
      projectId='4ae21bf0-face-4cf8-b1a8-1043cefc46f3'
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
