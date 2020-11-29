import React from "react"

import { ThemeProvider } from "@material-ui/core"

import "./styles/global.css"

import theme from "./styles/theme"

const Global: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Global
