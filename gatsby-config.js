module.exports = {
  siteMetadata: {
    title: "febgatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vg5hn6pg59oh`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `rjVvIw9AYzbJNKOrjvEM1kX-YWiEATrjEeURj3FNvSc`,
      },
    },
  ],
};
