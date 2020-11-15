import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Posts = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div>
                {
                    post.frontmatter.img && (
                        <Img 
                            placeholderStyle={{ backgroungColor: 'red'}}
                            fluid={post.frontmatter.img.childImageSharp.fluid}
                        />
                    )
                }
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html}} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                img {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default Posts;