import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {

    // Here we set state for the application, using a boolean value to determine dark mode

    const [darkMode, setMode] = React.useState(false)

    //Here is a basic toggle function to switch the state back and forth

    function toggleDarkMode() {
        setMode(prevMode => !prevMode)
    }


    return (
        <div className="container">
            <Navbar 
            darkMode = {darkMode}
            toggleDarkMode = {toggleDarkMode}
            />
            <Main 
            darkMode = {darkMode}
            />
        </div>
    )
}



