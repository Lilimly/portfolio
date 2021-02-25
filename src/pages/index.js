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
            Développeuse web fullstack, spécialisée dans le frontend, je met mes compétences à votre service pour {' '}<br/>
            <Link
              title="contact"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              créer un site web qui vous corresponde.
            </Link><br />
            <strong>100% autonome</strong>, <strong>à l'écoute</strong> de mes clients, et <strong>force de proposition</strong>, je suis prête à m'investir pleinement dans votre projet et à m'adapter à vos besoins.<br />
            Je vous apporte mon expertise pour : <strong>l'intégration de maquettes</strong>, la création de votre <strong>site vitrine</strong> / <strong>e-commerce</strong>, ou encore le <strong>rafraîchissement</strong> et l'<strong>optimisation du référencement SEO d'un site existant</strong>.<br />
            N'hésitez pas à consulter l'ensemble des {' '}
            <Link
              title="contact"
              to="projets"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              projets 
            </Link>
            {' '} sur lesquels j'ai travaillé !
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
          Écrivez-moi et je vous répondrai aussi rapidement que
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
