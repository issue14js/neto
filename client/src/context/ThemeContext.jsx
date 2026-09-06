import { useState } from "react";
import { createContext } from "react";


export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme, settheme] = useState('dark')
    const changeTheme =  ()=>{
        if(theme=='dark'){
        settheme('white')
       }else{
         settheme('dark')
      } 

      return (
      
             <ThemeContext.Provider
              value={{changeTheme}}>
              {children}
             </ThemeContext.Provider>
          )
      
}}