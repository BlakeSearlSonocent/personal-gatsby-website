/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Test website',
    author: 'Blake Searl',
    description: 'Nothing interesting...',
    data: ["item1", "item2"],
    person: {name: "peter", age: 32 }
    },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
