const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blogPost.js');

  const res = await graphql(`
    {
      wpgraphql {
        posts {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  `);

  res.data.wpgraphql.posts.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
