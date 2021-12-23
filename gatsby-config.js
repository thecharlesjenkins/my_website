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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}\\src\\sections\\blog\\`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(
          `./src/components/page_items/NavigationLayout.js`
        ),
      },
    },
  ],
}
