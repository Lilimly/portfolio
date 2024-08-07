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
            Développeuse fullstack d'applications mobiles, spécialisée en{" "}
            <strong>React Native, React</strong> et <strong>TypeScript</strong>, 
            <br />
            je mets mes compétences au service de{" "}
            <Link
              title="contact"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              vos projets.
            </Link>
            <br />
            <strong>Autonome</strong> et <strong>à l'écoute</strong>,{" "}
            je suis <strong>proactive</strong> et{" "}
            constamment en quête<strong> de nouveaux défis</strong>.
            <br />
            Je suis prête à m'investir pleinement dans votre entreprise et à m'adapter à vos besoins spécifiques.
            <br />
            N'hésitez pas à consulter les{" "}
            <Link
              title="contact"
              to="projets"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              projets
            </Link>{" "}
            sur lesquels j'ai travaillé !
          </p>
        </div>
        <TimeLine />
      </section>
      <section className="section" id="projets">
        <h2>Projets réalisés</h2>
        {/* <p>
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
          et nous pourrons en discuter !
        </p> */}
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
          Des questions ?<br />
          Écrivez-moi et je vous répondrai aussi rapidement que possible !
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
