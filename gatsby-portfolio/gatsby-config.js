module.exports = {
  siteMetadata: {
    title: `Aurélie Mlynarz - Développement Web Freelance`,
    description: `Développeuse web freelance, je vous aide à créer un site web qui vous corresponde et améliore la visibilité de votre entreprise.`,
    author: `Aurélie Mlynarz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-X9K4ZGPXV9", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aurélie Mlynarz - développeuse web`,
        short_name: `Développement web`,
        description: `Développeuse web freelance, je vous aide à créer un site web qui vous corresponde et améliore la visibilité de votre entreprise.`,
        lang: `fr`,
        icon: `src/images/icon.png`,
        legacy: false,
        start_url: `/`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -60,
      },
    },
  ],
}
