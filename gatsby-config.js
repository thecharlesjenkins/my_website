module.exports = {
  siteMetadata: {
    title: `Charles Jenkins | Software Engineer`,
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
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charles Jenkins, Software Engineer`,
        short_name: `Charles Jenkins`,
        start_url: `/`,
        background_color: `#24305E`,
        theme_color: `#333F58`,
        display: `standalone`,
        icon: `src/styles/best_charlemagne.jpg`,
        lang: `en`
      }
    },

    `gatsby-plugin-offline`,
  ],
}
