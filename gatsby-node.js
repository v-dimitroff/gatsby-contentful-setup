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
          slug
        }
      }
    }
  `);

  console.log(result.data.allContentfulSeoAndHero.nodes);

  result.data.allContentfulSeoAndHero.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: pageTemplate,
      context: {
        slug: node.slug,
        data: node,
      },
    });
  });

  return;
};
