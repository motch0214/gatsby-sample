import React, { ReactElement } from "react"

import { Helmet } from "react-helmet"
import { Thing, WithContext } from "schema-dts"

interface JsonLdProps<T extends Thing> {
  json: WithContext<T>
}

const JsonLd = <T extends Thing>({ json }: JsonLdProps<T>): ReactElement => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(json, null, 2)}
      </script>
    </Helmet>
  )
}

export default JsonLd
