import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children})=>

{
 
     const[darkMode,setDarkMode]= useState(
        localStorage.getItem("theme")==="dark"
     );
     useEffect(()=>{
         if(darkMode)
         {
            console.log(darkMode);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
         }
         else{
            console.log(darkMode);
            document.documentElement.classList.remove ('dark');
            localStorage.setItem("theme","light");
         }
     },[darkMode])
     return(
         <ThemeContext.Provider value={{darkMode,setDarkMode}}>
            {children}
         </ThemeContext.Provider>
     )
}

export const useDarkMode = ()=>useContext(ThemeContext);