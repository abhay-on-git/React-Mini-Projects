import { useEffect, useState } from "react";
import "./App.css";
import { ThemProvider } from "./context/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = ()=>{
    setThemeMode("light")
  }

  const darkMode = ()=>{
    setThemeMode("dark")
  }

  // actual theme change

  useEffect(()=>{
    const toggle = document.querySelector('html')
    toggle.classList.remove("light","dark")
    toggle.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemProvider>
  );
}

export default App;
