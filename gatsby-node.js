const path = require("path");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pageTemplate = path.resolve("src/templates/seoTags.tsx");
  const result = await graphql(`
    {
      allContentfulSeoAndHero {
        nodes {
          seoDescription
          seoTitle
          spaceId
          productType
          luxLabel
          heroTitle
          heroSubtitle
          contentful_id
          slug
        }
      }
    }
  `);

  result.data.allContentfulStore.edges.forEach((edge) => {
    createPage({
      path: edge.node.slug,
      component: pageTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  return;
};
