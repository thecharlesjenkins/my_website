module.exports = {
  siteMetadata: {
    title: `Charles Jenkins | Software Engineer`,
    url: `https://www.thecharlesjenkins.com`,
    image: `favicon.ico`,
    description: `Main page for the personal website for Charles Jenkins. He is a computer science student at Georgia Tech and is passionate about programming.`,
    social: [
      {
        name: "LinkedIn",
        url: `https://linkedin.com/in/charles--jenkins`,
      },
      {
        name: "Github",
        url: `https://github.com/thecharlesjenkins`,
      },
      {
        name: "Email",
        url: `mailto:thecharlesjenkins@gmail.com`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charles Jenkins, Software Engineer`,
        short_name: `Charles Jenkins`,
        start_url: `/`,
        background_color: `#24305E`,
        theme_color: `#333F58`,
        display: `standalone`,
        icon: `static/me.png`,
        lang: `en`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
};
