import { navigate } from "gatsby"
import React, { useEffect } from "react"

import SEO from "components/seo"

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    navigate("/")
  }, [])

  return <SEO title="Not found" />
}

export default NotFoundPage
