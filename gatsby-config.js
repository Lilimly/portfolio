module.exports = {
  siteMetadata: {
    title: `Aurélie Mlynarz - Développement Web`,
    description: `Développeuse web et mobile fullstack, je mets mes compétences au service de votre projet.`,
    author: `Aurélie Mlynarz`,
    siteUrl: `https://www.aureliemlynarz.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-X9K4ZGPXV9",
          cookieName: "ga-cookie-secure",
          anonymize: true,
        },
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-X9K4ZGPXV9", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
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
        description: `Développeuse web et mobile fullstack, je mets mes compétences au service de votre projet.`,
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
