exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/about_me`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      allBlogPosts: {
        type: ["MarkdownRemark"],
        resolve: async (source, args, context, info) => {
          // Whenever possible, use `limit` and `skip` on findAll calls to increase performance
          const { entries } = await context.nodeModel.findAll({
            type: "MarkdownRemark", query: {
              limit: args.limit, skip: args.skip, filter: {
                fileAbsolutePath: { regex: "/blog/" }
              },
            }
          })
          return entries
        },
      },
    },
  }
  createResolvers(resolvers)
}

const path = require(`path`)
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query {
      allBlogPosts {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          brief
        }
        html
        parent {
          ... on File {
            name
          }
        }
      }
    }
  `)
  result.data.allBlogPosts.forEach(edge => {
    createPage({
      path: `blog/${edge.parent.name}`,
      component: blogPostTemplate,
      context: {
        title: edge.frontmatter.title,
        date: edge.frontmatter.date,
        brief: edge.frontmatter.brief,
        html: edge.html
      }
    })
  })
}