import React from 'react'
import Header from '../Header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

const Layout = () => {
  
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/> 
      
    </div>
  )
}

export default Layout
