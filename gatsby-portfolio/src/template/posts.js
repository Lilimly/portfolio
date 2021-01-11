import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Posts = ({ data }) => {
    const post = data.mdx;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div>
                {
                    post.frontmatter.img && (
                        <Img 
                            placeholderStyle={{ backgroundColor: `blue`}}
                            fluid={post.frontmatter.img.childImageSharp.fluid}
                        />
                    )
                }
                <h1>{post.frontmatter.title}</h1>
                <MDXRenderer>{post.body}</MDXRenderer>
            </div>
            <Link to={'/'}>Retour à l'accueil</Link>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                img {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default Posts;