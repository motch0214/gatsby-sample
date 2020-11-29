import React from "react"

import Global from "./src/Global"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement = ({ element }) => {
  return <Global>{element}</Global>
}
