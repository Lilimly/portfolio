import React from "react"
import { Link } from "react-scroll"
import loadable from "@loadable/component"
import ContactForm from "../components/ContactForm.jsx"

const Layout = loadable(() => import("../components/layout"))
const TimeLine = loadable(() => import("../components/TimeLine"))
const SEO = loadable(() => import("../components/seo"))
const HeroBanner = loadable(() => import("../components/HeroBanner.jsx"))
const ProjectsCards = loadable(() => import("../components/Projectscards.jsx"))
const Button = loadable(() => import("../components/Button.jsx"))
const PhotoAurelie = loadable(() =>
  import("../components/GatsbyImages/PhotoAurelie.js")
)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Présentation" />
      <section className="section" id="welcome">
        <HeroBanner />
      </section>
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
      <section className="section" id="contact">
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
      </section>
    </Layout>
  )
}

export default IndexPage
