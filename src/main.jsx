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
      projectId='6739dc21-69ed-4527-9c02-20159691b997'
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
