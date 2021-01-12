const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
        const slug = createFilePath ({ node, getNode, basePath: 'content'});
        createNodeField({
            node,
            name: `slug`,
            value: `/projets${slug}`,
        })
    }
}

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
                totalCount
            }
        }
    `)
    data.allMdx.edges.forEach(edge => {
        const { slug } = edge.node.fields;
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/template/posts.js`),
            context: {slug: slug},
        })
    })
}
