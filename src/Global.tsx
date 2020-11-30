import React from "react"

import { ThemeProvider } from "@material-ui/core"

import { FirebaseContextProvider } from "./components/FirebaseContext"
import theme from "./styles/theme"

import "fontsource-noto-sans-jp"

import "./styles/global.css"

const Global: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseContextProvider>{children}</FirebaseContextProvider>
    </ThemeProvider>
  )
}

export default Global
