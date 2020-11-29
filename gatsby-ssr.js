/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react"

import Global from "./src/Global"

export const wrapRootElement = ({ element }) => {
  return <Global>{element}</Global>
}

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()

  // Change order of Material-UI styles
  const keyToTop = "jss-server-side"
  headComponents.sort((x, y) => {
    if (x.key === keyToTop) {
      return -1
    } else if (y.key === keyToTop) {
      return 1
    }
    return 0
  })

  replaceHeadComponents(headComponents)
}
