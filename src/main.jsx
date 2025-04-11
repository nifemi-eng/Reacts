import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BroserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BroserRouter>
    <App />  
    </BroserRouter>
  
    
  </StrictMode>,
)
