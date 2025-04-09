import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ref from './Ref.jsx'
import Toggle from './toggle.jsx'
import Mount from './Mounting/Mount.jsx'
import Memo from './Hooks/Memo.jsx'
import Callback from './Hooks/Usecallback.jsx'
import Context from './Hooks/Context.jsx'
import Counter from './Hoc/Counter.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Router/Layout/Layout.jsx'
import About from './Router/About/About.jsx'
import Home from './Router/Home/Home.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"home",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    }
  ]
}]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ref/> */}
    {/* <Mount/> */}
    {/* <Memo/> */}
    {/* <Context/> */}
    {/* <Counter/> */}
    {/* <Callback/> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
