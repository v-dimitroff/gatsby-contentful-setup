const path = require("path");

const createSeoTags = async ({ graphql, actions: { createPage } }) => {
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
};

const createPageSections = async ({ graphql, actions: { createPage } }) => {
  const pageTemplate = path.resolve("src/templates/pageSection.tsx");
  const result = await graphql(`
    {
      allContentfulPageSectionParagraphsTextNode {
        nodes {
          paragraphs
          slug
        }
      }
    }
  `);

  result.data.allContentfulPageSectionParagraphsTextNode.nodes.forEach(
    (node) => {
      createPage({
        path: node.slug,
        component: pageTemplate,
        context: {
          slug: node.slug,
          data: node,
        },
      });
    }
  );
};

exports.createPages = async (gatsby) => {
  await createSeoTags(gatsby);
  await createPageSections(gatsby);

  return;
};
