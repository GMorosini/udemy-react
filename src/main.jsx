import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppHooks from './AppHooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHooks />
  </StrictMode>,
)
