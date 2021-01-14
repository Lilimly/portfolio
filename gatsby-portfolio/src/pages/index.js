import React from "react";
import Layout from "../components/layout";
import TimeLine from "../components/TimeLine";
import SEO from "../components/seo";
import HeroBanner from "../components/HeroBanner.jsx";
import SimpleSlider from "../components/Carousel.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Button from "../components/Button.jsx";
import image from "../images/aurelie-mlynarz-photo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCat,
    faBeer,
    faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

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
        <div className="carousel">
          <SimpleSlider />
        </div>
      </div>
      <div className="section" id="section3">
        <div className="social-contact">
          <div className="social-content">
            <h3>Me contacter, c'est très simple !</h3>
            <p>
              Une question, un devis ?<br /> 
              N'hésitez pas à m'écrire en remplissant ce formulaire et je vous répondrai aussi rapidement que possible !
            </p>
            <h3>Retrouvez-moi également sur les réseaux sociaux !</h3>
            <div className="button-div">
              <button>
                <a 
                  href={"https://www.linkedin.com/in/aurelie-mlynarz-1899421a1/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="LinkedIn"
                >
                  <FontAwesomeIcon icon={faBeer} flip="both" />
                </a>
              </button>
              <button>
                <a 
                  href={"https://github.com/Lilimly"}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="GitHub"
                >
                  <FontAwesomeIcon icon={faCat} />
                </a>
              </button>
              <button>
                <a 
                  href={"https://www.gotripics.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Gotripics"
                >
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="the-form">
          <h2>Contact</h2>
          <ContactForm />
          <Button />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
