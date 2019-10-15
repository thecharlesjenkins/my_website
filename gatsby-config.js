/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Charles Jenkins`,
    social: [
      {
        name: "LinkedIn",
        url: `https://linkedin.com/in/charles--jenkins`,
      },
      {
        name: "Github",
        url: `https://github.com/BestCharlemagne`,
      },
      {
        name: "Email",
        url: `mailto:thecharlesjenkins@gmail.com`,
      },
    ]
  },
    
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-dark-mode`
  ],
}
