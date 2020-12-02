import { graphql, PageProps } from "gatsby"
import React from "react"

import Document from "components/documents/Document"
import SEO from "components/seo"

type DataProps = {
  md: {
    html: string
    frontmatter: {
      title: string
    }
  }
}

const DocumentTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { md } = data

  return (
    <>
      <SEO title={md.frontmatter.title} />
      <Document html={md.html} />
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    md: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default DocumentTemplate
