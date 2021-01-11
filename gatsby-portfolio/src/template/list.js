import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
    const { nodes, pageInfo } = data.allMdx;
    return (
        <Layout>
            <SEO title="Aurélie Mlynarz | Mes projets" />
            <h1>Projets</h1>
            {nodes.map((e) => 
                <div key={"div" + e.frontmatter.title}>
                    <h2 key={"h2" + e.frontmatter.title}>{e.frontmatter.title}</h2>
                    <p key={"p" + e.frontmatter.title}>{e.excerpt}</p>
                    <Link to={e.fields.slug} key={"link" + e.frontmatter.title}>{e.frontmatter.title}</Link>
                </div>
            )}
            <div
                style={{
                    padding: "20px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {pageInfo.hasPreviousPage ? (
                    <Link
                        to={`${pageInfo.currentPage === 2 ? "/projets/" : `/projets/${pageInfo.currentPage - 1}`}`}
                    >
                        Previous
                    </Link>
                ) : (
                        <div />
                    )}
                {pageInfo.hasNextPage && (
                    <Link to={`/projets/${pageInfo.currentPage + 1}`}>Next</Link>
                )}
            </div>
            <Link to={'/'}>Retour à l'accueil</Link>
        </Layout>
    )
}

export const query = graphql`
    query getPosts($skip: Int!, $limit: Int!) {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            nodes { 
                frontmatter {
                    title
                    date(formatString: "DD MM YYYY")
                }
                excerpt
                fields {
                    slug
                }
            }
            pageInfo {
                currentPage
                hasNextPage
                hasPreviousPage
                itemCount
                pageCount
                perPage
            }
        }
    }
`

export default IndexPage;