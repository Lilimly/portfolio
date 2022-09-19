import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faGlobeAmericas,
  faGraduationCap,
  faBaby,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"

const TimeLine = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2021 - present"
      icon={<FontAwesomeIcon icon={["fab", "react"]} title="React Icon" />}
    >
      <h3 className="vertical-timeline-element-title">
        Développeuse web et mobile fullstack
      </h3>
      <h4 className="vertical-timeline-element-subtitle">KOJI | Paris</h4>
      <div>
        {/* <p>Développeuse fullstack, web et mobile.</p> */}
        <p className="strong-p">Compétences développées :</p>
        <ul>
          <li>
            <strong>Technologies front - web</strong> :
            React, VueJS, TypeScript, Tailwind, SASS.
          </li>
          <li>
            <strong>Technologies front - mobile</strong> : React Native <br />
            <strong>IOS : </strong>XCode / Apple Store Connect / TestFlight<br />
            <strong>Android : </strong>Android Studio / Google Play Console.
          </li>
          <li>
            <strong>Technologie back</strong> : NestJS.
          </li>
          <li>
            <strong>Base de données</strong> : PostgreSQL, mySQL, Maria DB.
          </li>
          <li>
            <strong>Logiciel de versioning utilisé</strong> : Git et GitHub.
          </li>
        </ul>
        <p>
          Consultez{" "}
          <a
            href={"https://lilimly.github.io/cv_aurelie_mlynarz/"}
            target="_blank"
            rel="noopener noreferrer"
            alt="CV"
            title="CV"
          >
            mon CV
          </a>
        </p>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2020 - 2021"
      icon={<FontAwesomeIcon icon={faLaptopCode} title="React Icon" />}
    >
      <h3 className="vertical-timeline-element-title">
      Développeuse web fullstack 
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Freelance | Paris</h4>
      <div>
        {/* <p>Développeuse web fullstack.</p> */}
        <p className="strong-p">Compétences développées :</p>
        <ul>
          <li>
            <strong>Technologies maitrisées coté front</strong> : JavaScript,
            HTML5, CSS3, SASS.
          </li>
          <li>
            <strong>Framework front</strong> : ReactJS, Bootstrap.
          </li>
          <li>
            <strong>Technologies maitrisées coté back</strong> : NodeJS.
          </li>
          <li>
            <strong>Framework back</strong> : ExpressJS.
          </li>
          <li>
            <strong>Base de données</strong> : MongoDB, mySQL.
          </li>
          <li>
            <strong>CMS</strong> : Wordpress.
          </li>
          <li>
            <strong>Logiciel de versioning utilisé</strong> : Git et GitHub.
          </li>
        </ul>
        <div className="button-timeline">
          <Link
            title="Voir les projets"
            to="projets"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>
              <span>Voir les projets</span>
            </button>
          </Link>
        </div>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2020"
      icon={<FontAwesomeIcon icon={faCode} title="Code Icon" />}
    >
      <h3 className="vertical-timeline-element-title">
        Formation Développeuse Web
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        OpenClassrooms | Paris
      </h4>
      <div>
        <p>6 mois - 6 projets réalisés</p>
        <p className="strong-p">Compétences développées :</p>
        <ul>
          <li>
            <strong>Intégration d'une maquette</strong> en site web <br />(
            HTML5 / CSS3 )
          </li>
          <li>
            <strong>Dynamisation d'une page web</strong> - animations CSS <br />
            ( HTML5 / SASS )
          </li>
          <li>
            <strong>Optimisation du référencement SEO</strong> d'un site web
            existant <br />( HTML5 / CSS3 / JavaScript )
          </li>
          <li>
            <strong>Création d'un site de e-commerce</strong> <br />( JavaScript
            )
          </li>
          <li>
            <strong>Construction d'une API sécurisée</strong> pour une
            application d'avis gastronomiques <br />( Node JS, Express JS, Mongo
            DB )
          </li>
          <li>
            <strong>Création d'un réseau social</strong> d’entreprise <br />(
            React JS, Node JS / Express JS, mySQL )
          </li>
        </ul>
        <div className="button-timeline">
          <Link
            to="projets"
            title="Voir les projets"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>
              <span>Voir les projets</span>
            </button>
          </Link>
        </div>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2018 - 2019"
      icon={<FontAwesomeIcon icon={faGlobeAmericas} title="World icon" />}
    >
      <h3 className="vertical-timeline-element-title">Tour du monde !</h3>
      <h4 className="vertical-timeline-element-subtitle">Année sabbatique</h4>
      <div>
        <p>
          Un an de voyage autour du monde durant lequel j'ai développé mon blog
          : <strong>gotripics.com</strong>
        </p>
        <p className="strong-p">Compétences développées :</p>
        <ul>
          <li>Développement du site avec le CMS Wordpress</li>
          <li>Optimisation du référencement SEO</li>
          <li>
            Définition de la stratégie, des objectifs et du planning éditorial
          </li>
          <li>Création de contenu</li>
          <li>Veille concurrentielle et évolutions Web et réseaux sociaux</li>
          <li>Animation et modération sur l'ensemble des plateformes</li>
          <li>Suivi et analyse de l'évolution des chiffres d'audience</li>
          <li>Élaboration et suivi des newsletters</li>
        </ul>
        <div className="button-timeline">
          <a
            href={"https://www.gotripics.com/"}
            target="_blank"
            rel="noopener noreferrer"
            title="Voir mon blog"
          >
            <button>
              <span>Voir mon blog</span>
            </button>
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2018"
      icon={<FontAwesomeIcon icon={faGraduationCap} title="Graduation icon" />}
    >
      <h3 className="vertical-timeline-element-title">Formation CAFERUIS</h3>
      <h4 className="vertical-timeline-element-subtitle">ETSUP | Paris</h4>
      <p>
        Obtention du Certificat d'Aptitude aux Fonctions d'Encadrement et de
        Responsable d'Unité d'Intervention Sociale.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2018"
      icon={<FontAwesomeIcon icon={faBaby} title="Baby icon" />}
    >
      <h3 className="vertical-timeline-element-title">Directrice de crèche</h3>
      <h4 className="vertical-timeline-element-subtitle">ABC Puériculture | Paris</h4>
      <p>Créche associative de 30 berceaux.</p>
      <p className="strong-p">Compétences développées :</p>
      <ul>
        <li>
          Encadrement et évaluation d'une équipe pluridisciplinaire de 10
          personnes
        </li>
        <li>Accompagnement et éveil d’un groupe d’enfants de 6 mois à 3 ans</li>
        <li>
          Elaboration et mise en place du projet pédagogique en collaboration
          avec l’équipe éducative
        </li>
        <li>Animation des réunions pédagogiques et informatives</li>
        <li>
          Travail en lien avec nos partenaires (Mairie, Psychologue,
          Pédiatre...)
        </li>
        <li>Accompagnement et encadrement de stagiaires</li>
        <li>Gestion du planning et des congés de l’équipe</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2005 - 2010"
      icon={<FontAwesomeIcon icon={faBaby} title="Baby icon" />}
    >
      <h3 className="vertical-timeline-element-title">
        Educatrice de Jeunes Enfants
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Am Stram Gram | Paris</h4>
      <p>Halte garderie privée de 30 berceaux.</p>
      <p className="strong-p">Compétences développées :</p>
      <ul>
        <li>Accompagnement et éveil d’un groupe d’enfants de 6 mois à 3 ans</li>
        <li>
          Elaboration et mise en place du projet pédagogique en collaboration
          avec l’équipe éducative
        </li>
        <li>Animation des réunions pédagogiques et informatives</li>
        <li>Accompagnement et encadrement de stagiaires</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2004"
      icon={<FontAwesomeIcon icon={faGraduationCap} title="Graduation icon" />}
    >
      <h3 className="vertical-timeline-element-title">Formation Diplôme d'Etat d'EJE</h3>
      <h4 className="vertical-timeline-element-subtitle">IRTS | Talence</h4>
      <p>Obtention du Diplôme d'Etat d'Educatrice de Jeunes Enfants.</p>
    </VerticalTimelineElement>
  </VerticalTimeline>
)

export default TimeLine
