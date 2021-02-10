import React from "react"
import { Link } from "react-scroll"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner.jsx"
import TimeLine from "../components/TimeLine"
import ProjectsCards from "../components/ProjectsCards.jsx"
import ContactForm from "../components/ContactForm.jsx"
import PhotoAurelie from "../components/GatsbyImages/PhotoAurelie.js"
import Button from "../components/Button.jsx"

const IndexPage = () => {
  const { heroBanner, contact } = useStaticQuery(
    graphql`
      query {
        heroBanner: file(relativePath: { eq: "img-header.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        contact: file(relativePath: { eq: "laptop-desk.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  if (!heroBanner?.childImageSharp?.fluid || !contact?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  const imageHeader = heroBanner.childImageSharp.fluid
  const imageContact = contact.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="" />
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
            Forte de ces nouvelles compétences, je souhaite aujourd'hui{" "}
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
          Vous avez un projet et vous souhaitez que je vous apporte mon
          expertise ?<br />
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
          et nous en discuterons !
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
