import { Link } from "gatsby"
import React from "react"

import Home from "components/home/Home"
import SEO from "components/seo"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <Home />
  </>
)

export default IndexPage
