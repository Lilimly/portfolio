import React from "react";
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
      <SEO title="Aurélie Mlynarz - Développeuse Web" />
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
          Après une expérience de 13 ans dans le secteur de la petite enfance, j'ai décidé d'entamer une <strong>reconversion professionnelle</strong> pour me diriger vers ma passion : l'univers du web.<br />
          C'est au cours d'un voyage d'<strong>un an autour du monde</strong> que j'ai développé mon blog.<br />
          Suite à cela, j'ai suivi une <strong>formation de Développeuse Web</strong>, durant laquelle j’ai acquis la maîtrise de différentes technologies et réalisé mes
          premiers projets.<br />
          Forte des compétences que j'ai acquises, je souhaite aujourd'hui <strong>vous aider à développer vos propres projets</strong>.
          </p>
        </div>
        <TimeLine />
      </section>
      <section className="section" id="projets">
        <h1>Projets réalisés</h1>
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
