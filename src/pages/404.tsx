import { navigate } from "gatsby"
import React, { useEffect } from "react"

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    navigate("/")
  }, [])

  return null
}

export default NotFoundPage
