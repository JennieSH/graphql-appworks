module.exports = {
    // https://v4.apollo.vuejs.org/guide/installation.html#visual-studio-code
    client: {
      service: {
        name: 'server-js',
        // URL to the GraphQL API
        url: 'http://localhost:4000/graphql"',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }