import React from 'react'
import DarkModeToggler from './components/DarkModeToggler'
import { ThemeProvider } from './context/ThemeContext'

const Toggle = () => {
  return (
    <>

            <ThemeProvider>
                <div className='flex flex-col min-h-screen justify-center items-center bg-white dark:bg-gray-700 dark:text-white text-black'>
                <h2 className='font-medium'>Tailwind Css Dark Mode</h2> 
                <p>CLick the button to toggle Dark Mode!</p>

                <DarkModeToggler/>
                    
                </div>
                </ThemeProvider>
    </> 
  )
} 

export default Toggle
