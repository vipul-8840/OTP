import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ref from './Ref.jsx'
import Toggle from './toggle.jsx'
import Mount from './Mounting/Mount.jsx'
import Memo from './Hooks/Memo.jsx'
import Callback from './Hooks/Usecallback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ref/> */}
    {/* <Mount/> */}
    {/* <Memo/> */}
    <Callback/>
  </StrictMode>,
)
