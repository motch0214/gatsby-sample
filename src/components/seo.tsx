import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { Helmet } from "react-helmet"

import MetaImage from "assets/images/meta.png"

export interface SeoProps {
  title?: string
  description?: string
  image?: string
}

const SEO: React.FC<SeoProps> = ({ title, description, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
          description
          author
          twitter
        }
      }
    }
  `)

  const metaTitle = title
    ? `${title} - ${site.siteMetadata.title}`
    : `${site.siteMetadata.title} - ${site.siteMetadata.subtitle}`

  const metaDescription = description || site.siteMetadata.description

  const metaImage = image || MetaImage

  return (
    <Helmet>
      <html lang="ja" prefix="og: http://ogp.me/ns#" />
      <title>{metaTitle}</title>
      {process.env.GATSBY_BUILD_PROFILE === "production" ? null : (
        <meta key={`robots-noindex`} name="robots" content="noindex" />
      )}
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:image" content={metaImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={site.siteMetadata.twitter} />
    </Helmet>
  )
}

export default SEO
