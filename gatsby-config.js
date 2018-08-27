module.exports = {
  siteMetadata: {
    title: 'Fira',
    description: 'Igor Yermak'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/assets/img/`
        }
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet'
  ]
}
