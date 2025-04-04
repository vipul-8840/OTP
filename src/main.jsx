import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ref from './Ref.jsx'
import Toggle from './toggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ref/> */}
    <Toggle/>
  </StrictMode>,
)
