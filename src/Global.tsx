import React from "react"

import { ThemeProvider } from "@material-ui/core"

import "./styles/global.css"

import { FirebaseContextProvider } from "./components/FirebaseContext"
import theme from "./styles/theme"

const Global: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseContextProvider>{children}</FirebaseContextProvider>
    </ThemeProvider>
  )
}

export default Global
