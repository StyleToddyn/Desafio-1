// Todo: Create & manage context in this file

import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=> {
  const [theme, setTheme] = useState("lightV")

    // Todo: Add the component code (incl. dynamic context value)

    //Função para mudar o tema da página
    const toggleTheme = ()=>{
      setTheme(prevTheme =>(prevTheme === "light"?"dark ":"light"))
      console.log(theme)
    }
    return(
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    )
  };

  export const useTheme = () => useContext(ThemeContext)
  