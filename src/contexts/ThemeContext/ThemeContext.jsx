import { createContext, useState } from "react";


export const themes = {
    light: {
        color: '#202020',
        backgroundColor: '#E9EFED'
    },
    dark: {
        color: '#E9EFED',
        backgroundColor: '#202020'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    
    const [ theme, setTheme ] = useState(themes.dark)
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}