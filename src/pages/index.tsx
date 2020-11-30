import React, { useEffect } from "react"

import * as analytics from "analytics"
import Home from "components/home/Home"
import SEO from "components/seo"

const IndexPage: React.FC = () => {
  useEffect(() => {
    analytics.viewIndex()
  }, [])

  return (
    <>
      <SEO title="Home" />
      <Home />
    </>
  )
}

export default IndexPage
