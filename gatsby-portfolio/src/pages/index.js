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
      <div className="section" id="section">
        <HeroBanner />
      </div>
      <div className="section" id="section1">
        <h2>Mon parcours</h2>
        <div className="presentation">
          <img
            src={image}
            className="my-photo"
            alt="Aurélie Mlynarz"
            role="presentation"
          />
          <p>
          Après une expérience de 13 ans dans le secteur de la petite enfance, j'ai décidé d'entamer une <strong>reconversion professionnelle</strong> pour me diriger vers ma passion : l'univers du web.<br />
          J'ai ainsi développé mon blog au cours d'un voyage d'<strong>un an autour du monde</strong>.<br />
          Suite à cela, j'ai suivi une <strong>formation de Développeuse Web</strong>, durant laquelle j’ai acquis la maîtrise de différentes technologies et réalisé mes
          premiers projets.<br />
          Forte des compétences que j'ai acquises, je souhaite aujourd'hui <strong>vous aider à développer vos propres projets</strong>.
          </p>
        </div>
        <TimeLine />
      </div>
      <div className="section" id="section2">
        <h2>Projets réalisés</h2>
        <p>
          Petit topo sur les différents projets, adaptabilité à la demande, responsive, moderne ...
        </p>
        <div className="projects">
          <ProjectsCards />
        </div>
      </div>
      <div className="section" id="section3">
        <h2>Me contacter</h2>
        <p>
          Une question, un devis ?<br /> 
          N'hésitez pas à m'écrire en remplissant ce formulaire et je vous répondrai aussi rapidement que possible !
        </p>
        <div className="the-form">
          <ContactForm />
        </div>
        <Button />
      </div>
    </Layout>
  )
}

export default IndexPage;
