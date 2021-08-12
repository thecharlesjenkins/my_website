exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/about_me`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
