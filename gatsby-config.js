/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config()

const path = require("path")

const colors = require("./src/styles/colors")

const site = {
  title: "Gatsby",
  subtitle: `Sample Project`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  iconPath: "./src/assets/images/gatsby-icon.png",
  twitter: "@GamerzClip",
}

module.exports = {
  siteMetadata: {
    title: site.title,
    subtitle: site.subtitle,
    description: site.description,
    twitter: site.twitter,
    author: `aifie inc.`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        assets: path.join(__dirname, "src/assets"),
        analytics: path.join(__dirname, "src/analytics"),
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-split-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 480,
              wrapperStyle: `align: center; margin-top: 12px; margin-bottom: 12px;`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`],
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: site.title,
        short_name: site.title,
        start_url: `/`,
        background_color: colors["background-color"],
        theme_color: colors["theme-color"],
        display: `minimal-ui`,
        icon: site.iconPath,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
