import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Button from "../components/Button.jsx";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Posts = ({ data }) => {
    const post = data.mdx;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <section className="project-page">
                {
                    post.frontmatter.img && (
                        <Img 
                            fluid={post.frontmatter.img.childImageSharp.fluid}
                        />
                    )
                }
                <div className="project-content">
                    <p className="date">Projet réalisé le {post.frontmatter.date}</p>
                    <h1>{post.frontmatter.title}</h1>
                    <MDXRenderer>{post.body}</MDXRenderer>
                    <button>
                        <span>
                            <Link to={'/#section2'}>
                                Retour à l'accueil
                            </Link>
                        </span>
                    </button>
                </div>
                <Button />
            </section>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
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