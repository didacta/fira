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
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ]
}
