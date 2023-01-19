import { useContext, createContext } from "react"
const ThemeContext = createContext(null)


import darkTheme from './darkTheme.module.css'
import lightTheme from './darkTheme.module.css'
const styles = {
  darkTheme,
  lightTheme,
}

function InlineCSS() {
  return (
    <div
      style={ {backgroundColor: "blanchedalmond"} }
    ></div>
  )
}

function GlobalCSS() {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <>
      {/* Here we usinge JavaScript to construct the className string */}
      <div className={`glass wrapper ${darkTheme ? "dark" : "light"}`}>
      </div>

      <div className={
        "allways active class names" +
        darkTheme
        ? "if darkTheme is true"
        : "if darkTheme is false"
        }>
      </div>

      <div className={
        [
          "someClass",
          "anotherClass",
        ].join(" ")
        }>
      </div>
    </>
  )
}