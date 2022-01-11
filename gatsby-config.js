module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Contentful",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "j8cjwgqmzKnQjuXdtomRoFn--jNzyE7mbZfKmWXzqrQ",
        spaceId: "t7wftfwur85p",
      },
    },
    "gatsby-plugin-image",
  ],
};
