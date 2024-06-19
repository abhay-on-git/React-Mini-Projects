import { createContext,useContext } from "react";

const ThemeContext = createContext({
    themeMode :"light",
    lightMode : ()=>{},
    darkMode :()=>{}
})

export const ThemProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}