import React from "react"
import { Link } from "react-scroll"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import loadable from "@loadable/component"
import ContactForm from "../components/ContactForm.jsx"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TimeLine = loadable(() => import("../components/TimeLine"))
const HeroBanner = loadable(() => import("../components/HeroBanner.jsx"))
const ProjectsCards = loadable(() => import("../components/Projectscards.jsx"))
const Button = loadable(() => import("../components/Button.jsx"))
const PhotoAurelie = loadable(() =>
  import("../components/GatsbyImages/PhotoAurelie.js")
)

const IndexPage = () => {
  const { heroBanner, contact } = useStaticQuery(
    graphql`
      query {
        heroBanner: file(relativePath: { eq: "img-header.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        contact: file(relativePath: { eq: "laptop-desk.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  if (!heroBanner?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  if (!contact?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  const imageHeader = heroBanner.childImageSharp.fluid

  const imageContact = contact.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Présentation" />
      <BackgroundImage
        Tag="section"
        id="welcome"
        className="section"
        fluid={imageHeader}
        backgroundAttachment="fixed"
      >
        <HeroBanner />
      </BackgroundImage>
      <section className="section" id="parcours">
        <h2>Mon parcours</h2>
        <div className="presentation">
          <PhotoAurelie />
          <p>
            Après une expérience de 13 ans dans le secteur de la petite enfance,
            j'ai décidé d'entamer une{" "}
            <strong>reconversion professionnelle</strong>.<br />
            C'est au cours d'un voyage d'<strong>
              un an autour du monde
            </strong>{" "}
            que j'ai développé mon premier blog.
            <br />
            Suite à cela, j'ai suivi une{" "}
            <strong>formation de développeuse web</strong> durant laquelle j’ai
            acquis la maîtrise de différentes technologies et réalisé mes
            premiers projets.
            <br />
            Forte des compétences acquises, je souhaite aujourd'hui{" "}
            <Link
              title="contact"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              vous aider à développer vos propres projets
            </Link>
            .
          </p>
        </div>
        <TimeLine />
      </section>
      <section className="section" id="projets">
        <h2>Projets réalisés</h2>
        <p>
          Pour mieux comprendre <strong>ce que je peux vous apporter</strong>,
          voici les différents <strong>projets</strong> que j'ai réalisés.
          <br />
          Vous avez une question ? <br />
          <Link
            title="contact"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Écrivez-moi
          </Link>{" "}
          et nous pourrons en discuter !
        </p>
        <div className="projects">
          <ProjectsCards />
        </div>
      </section>
      <BackgroundImage
        Tag="section"
        id="contact"
        className="section"
        fluid={imageContact}
        backgroundAttachment="fixed"
      >
        <h2>Me contacter</h2>
        <p>
          Une question, un devis ?<br />
          N'hésitez pas à m'écrire et je vous répondrai aussi rapidement que
          possible !
        </p>
        <div className="the-form">
          <ContactForm />
        </div>
        <Button />
      </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
