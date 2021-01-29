import React from "react";
import { Link } from "react-scroll";
import Layout from "../components/layout";
import TimeLine from "../components/TimeLine";
import SEO from "../components/seo";
import HeroBanner from "../components/HeroBanner.jsx";
import ProjectsCards from "../components/Projectscards.jsx";
import ContactForm from "../components/ContactForm.jsx";
import image from "../images/aurelie-mlynarz-photo.jpg";
import Button from "../components/Button.jsx";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Présentation" />
      <section className="section" id="welcome">
        <HeroBanner />
      </section>
      <section className="section" id="parcours">
        <h1>Mon parcours</h1>
        <div className="presentation">
          <img
            src={image}
            className="my-photo"
            alt="Aurélie Mlynarz"
            role="presentation"
          />
          <p>
          Après une expérience de 13 ans dans le secteur de la petite enfance, j'ai décidé d'entamer une <strong>reconversion professionnelle</strong> pour me plonger dans l'<strong>univers du web</strong>.<br />
          C'est au cours d'un voyage d'<strong>un an autour du monde</strong> que j'ai développé mon premier blog.<br />
          Suite à cela, j'ai suivi une <strong>formation de développeuse web</strong> durant laquelle j’ai acquis la maîtrise de différentes technologies et réalisé mes
          premiers projets.<br />
          Forte des compétences acquises, je souhaite aujourd'hui {' '}
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
        <h1>Projets réalisés</h1>
        <p>
          Pour mieux comprendre <strong>ce que je peux vous apporter</strong>, voici les différents <strong>projets</strong> que j'ai réalisés.<br />
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
          </Link>
          {' '} et nous pourrons en discuter !
        </p>
        <div className="projects">
          <ProjectsCards />
        </div>
      </section>
      <section className="section" id="contact">
        <h1>Me contacter</h1>
        <p>
          Une question, un devis ?<br /> 
          N'hésitez pas à m'écrire et je vous répondrai aussi rapidement que possible !
        </p>
        <div className="the-form">
          <ContactForm />
        </div>
        <Button />
      </section>
    </Layout>
  )
}

export default IndexPage;
