import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-scroll";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";
import Button from "../components/Button";
import image from "../images/aurelie-mlynarz-photo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom
} from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => (
  <Layout>
    <SEO title="Aurélie Mlynarz - Développeuse Web" />
    <div className="section" id="section">
      <div className="section-content">
        <h2>Welcome !</h2>
        <p>Je suis Aurélie, Développeuse Web Fullstack.</p>
        <p>Mon but : vous aider à créer votre site web moderne et responsive.</p>
        <p>Pour en savoir plus, consultez {" "}
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            mon parcours
          </Link> 
          {" "} et {" "}
          <Link
              to="section2"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
          >
            les différents projets
          </Link> 
          {" "} que j'ai réalisés.
        </p>
        <div className="button-div">
          <button>            
            <Link
              to="section3"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contactez-moi !
            </Link>
          </button>
        </div>
      </div>
    </div>
    <div className="section" id="section1">
      <h2>Mon parcours</h2>
      <div className="presentation">
      <img
          src={image}
          className="my-photo"
          alt="Photo Aurélie Mlynarz"
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
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          icon={<FontAwesomeIcon icon={faAtom} />}
        >
          <h3 className="vertical-timeline-element-title">Développeuse Web Freelance</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris</h4>
          <div>
          <p>
            Développeuse web Fullstack, appétence pour le front.<br />
            <ul>
              <li><strong>Technologies maitrisées coté front</strong> : JavaScript, HTML5, CSS3, SASS.</li>
              <li><strong>Framework front</strong> : ReactJS, Bootstrap.</li>
              <li><strong>Technologies maitrisées coté back</strong> : NodeJS.</li>
              <li><strong>Framework back</strong> : ExpressJS.</li>
              <li><strong>Base de données</strong> : MongoDB, mySQL.</li>
              <li><strong>ORM</strong> : Wordpress.</li>
              <li><strong>Logiciel de versioning utilisé</strong> : Git et GitHub.</li>
            </ul>
          </p>
            <button>            
              <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Voir les projets en cours
              </Link>
            </button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
        >
          <h3 className="vertical-timeline-element-title">Formation Développeuse Web</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris</h4>
          <div>
            <p>
            6 projets réalisés au cours de la formation : <br />
            <ul>
              <li><strong>Intégration d'une maquette</strong> en site web ( HTML / CSS )</li>
              <li><strong>Dynamisation d'une page web</strong> - animations CSS ( HTML / SASS )</li>
              <li><strong>Optimisation du référencement SEO</strong> d'un site web existant</li>
              <li><strong>Création d'un de site e-commerce</strong> ( JavaScript )</li>
              <li><strong>Construction d'une API sécurisée</strong> pour une application d'avis gastronomiques ( Node, Express, MongoDB )</li>
              <li><strong>Création d'un réseau social</strong> d’entreprise ( ReactJS, Node / Express, mySQL )</li>
            </ul>
            </p>
            <button>            
              <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Voir les projets réalisés
              </Link>
            </button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
        >
          <h3 className="vertical-timeline-element-title">Tour du monde !</h3>
          <div>
            <p>
              Un an de voyage autour du monde durant lequel j'ai développé mon blog : <strong>gotripics.com</strong><br />
              <ul>
                <li>Développement du site avec le CMS Wordpress</li>
                <li>Optimisation du référencement SEO</li>
                <li>Définition de la stratégie, des objectifs et du planning éditorial</li>
                <li>Création de contenu</li>
                <li>Veille concurrentielle et évolutions Web et réseaux sociaux</li>
                <li>Animation et modération sur l'ensemble des plateformes</li>
                <li>Suivi et analyse de l'évolution des chiffres d'audience</li>
                <li>Élaboration et suivi des newsletters</li>
              </ul>
            </p>
            <button>
              <a 
                href={"https://www.gotripics.com/"}
                target="_blank"
                rel="noopener"
              >
                Découvrez mon blog
              </a>
            </button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2018"
        >
          <h3 className="vertical-timeline-element-title">Obtention du CAFERUIS</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris</h4>
          <p>
            Obtention du Certificat d'Aptitude aux Fonctions d'Encadrement et de Responsable d'Unité d'Intervention Sociale.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2018"
        >
          <h3 className="vertical-timeline-element-title">Directrice de crèche</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris</h4>
          <p>
          Encadrement et évaluation d’une équipe pluridisciplinaire : <br />
            <ul>
              <li>Elaboration et mise en place du projet pédagogique en collaboration avec l’équipe éducative</li>
              <li>Accompagnement et éveil d’un groupe d’enfants de 6 mois à 3 ans</li>
              <li>Animation des réunions pédagogiques et informatives</li>
              <li>Travail en lien avec nos partenaires (Mairie, Psychologue, Pédiatre...)</li>
              <li>Accompagnement et encadrement de stagiaires</li>
              <li>Gestion du planning et des congés de l’équipe</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2005 - 2010"
        >
          <h3 className="vertical-timeline-element-title">Educatrice de Jeunes Enfants</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris</h4>
          <p>
            <ul>
            <li>Accompagnement et éveil d’un groupe d’enfants de 6 mois à 3 ans</li>
              <li>Elaboration et mise en place du projet pédagogique en collaboration avec l’équipe éducative</li>
              <li>Animation des réunions pédagogiques et informatives</li>
              <li>Accompagnement et encadrement de stagiaires</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2004"
        >
          <h3 className="vertical-timeline-element-title">Obtention du Diplôme d'Etat d'EJE</h3>
          <h4 className="vertical-timeline-element-subtitle">Bordeaux</h4>
          <p>
          Obtention du Diplôme d'Etat d'Educatrice de Jeunes Enfants.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <Section
      title="Projets"
      icon={faAtom} 
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
      Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at.
      Pellentesque id nibh tortor id aliquet lectus proin. Blandit cursus risus at ultrices mi. Iaculis eu non diam phasellus vestibulum lorem. Et odio pellentesque diam volutpat commodo. Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit. Bibendum enim facilisis gravida neque convallis a cras. Duis at consectetur lorem donec massa sapien faucibus et molestie. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non odio euismod lacinia at quis risus sed vulputate odio. Vel turpis nunc eget lorem dolor sed viverra ipsum. A lacus vestibulum sed arcu.
      Odio aenean sed adipiscing diam. Volutpat ac tincidunt vitae semper quis lectus. Tristique magna sit amet purus. Euismod in pellentesque massa placerat duis. Tellus molestie nunc non blandit massa enim nec dui nunc. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ac felis donec et odio pellentesque diam volutpat commodo sed. Orci sagittis eu volutpat odio. Purus faucibus ornare suspendisse sed nisi lacus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Habitant morbi tristique senectus et netus et. Porta non pulvinar neque laoreet suspendisse. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tellus integer feugiat scelerisque varius. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Pharetra et ultrices neque ornare aenean euismod. Proin sagittis nisl rhoncus mattis rhoncus.
      Nisi quis eleifend quam adipiscing vitae. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Non arcu risus quis varius quam quisque id diam. Pharetra magna ac placerat vestibulum. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Sed id semper risus in hendrerit gravida. Ultrices eros in cursus turpis massa. Non tellus orci ac auctor augue mauris augue. Arcu vitae elementum curabitur vitae nunc. Convallis a cras semper auctor neque vitae tempus quam. Varius quam quisque id diam vel."
      id="section2"
    />
    <Link to="/blog/">Le blog</Link>
    <Section
      title="Contact"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
      Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at.
      Pellentesque id nibh tortor id aliquet lectus proin. Blandit cursus risus at ultrices mi. Iaculis eu non diam phasellus vestibulum lorem. Et odio pellentesque diam volutpat commodo. Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit. Bibendum enim facilisis gravida neque convallis a cras. Duis at consectetur lorem donec massa sapien faucibus et molestie. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non odio euismod lacinia at quis risus sed vulputate odio. Vel turpis nunc eget lorem dolor sed viverra ipsum. A lacus vestibulum sed arcu.
      Odio aenean sed adipiscing diam. Volutpat ac tincidunt vitae semper quis lectus. Tristique magna sit amet purus. Euismod in pellentesque massa placerat duis. Tellus molestie nunc non blandit massa enim nec dui nunc. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ac felis donec et odio pellentesque diam volutpat commodo sed. Orci sagittis eu volutpat odio. Purus faucibus ornare suspendisse sed nisi lacus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Habitant morbi tristique senectus et netus et. Porta non pulvinar neque laoreet suspendisse. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Tellus integer feugiat scelerisque varius. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Pharetra et ultrices neque ornare aenean euismod. Proin sagittis nisl rhoncus mattis rhoncus.
      Nisi quis eleifend quam adipiscing vitae. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Non arcu risus quis varius quam quisque id diam. Pharetra magna ac placerat vestibulum. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Sed id semper risus in hendrerit gravida. Ultrices eros in cursus turpis massa. Non tellus orci ac auctor augue mauris augue. Arcu vitae elementum curabitur vitae nunc. Convallis a cras semper auctor neque vitae tempus quam. Varius quam quisque id diam vel."
      id="section3"
    />
    <Button />
  </Layout>
)

export default IndexPage;
