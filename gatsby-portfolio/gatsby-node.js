const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath ({ node, getNode, basePath: 'content'});
        createNodeField({
            node,
            name: `slug`,
            value: `/blog${slug}`,
        })
    }
}

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allMarkdownRemark {
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
    data.allMarkdownRemark.edges.forEach(edge => {
        const { slug } = edge.node.fields;
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/template/posts.js`),
            context: {slug: slug},
        })
    })

    const perPage =2;
    const nbPage = Math.ceil(data.allMarkdownRemark.totalCount / perPage);

    // creation page index des posts
   for (let i = 0; i < nbPage; i++) { 
        actions.createPage({
            path: i < 1 ? "/blog" : `/blog/${i + 1}` ,
            component: require.resolve(`./src/template/list.js`),
            context: {
                limit: perPage,
                skip: i * perPage,
            },
        })
    }
}
