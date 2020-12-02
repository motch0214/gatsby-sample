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
        filter: { fileAbsolutePath: { glob: "**/documents/*.md" } }
      ) {
        nodes {
          id
          frontmatter {
            template
          }
          parent {
            ... on File {
              name
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

    result.data.markdowns.nodes.forEach((node) => {
      createPage({
        path: node.parent.name,
        component: templates[node.frontmatter.template],
        context: { id: node.id },
      })
    })
  })
}
