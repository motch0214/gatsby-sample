/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const templates = {
    document: path.resolve(`src/templates/document.tsx`),
  }

  await graphql(`
    {
      markdowns: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.log(result.errors)
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    result.data.markdowns.edges.forEach(({ node: md }) => {
      createPage({
        path: md.frontmatter.path,
        component: templates[md.frontmatter.template],
      })
    })
  })
}
