import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-cib/gatsby"
import mysqlIcon from "@iconify/icons-cib/mysql"
import mongodbIcon from "@iconify/icons-cib/mongodb"
import expressIcon from "@iconify/icons-logos/express"
import graphqlIcon from "@iconify-icons/cib/graphql"

//headers img
import HeaderVav from "./GatsbyImages/HeaderVav.js"
import HeaderGotripics from "./GatsbyImages/HeaderGotripics.js"
import HeaderPortfolio from "./GatsbyImages/HeaderPortfolio.js"
import HeaderGroupomania from "./GatsbyImages/HeaderGroupomania.js"
import HeaderPiquante from "./GatsbyImages/HeaderPiquante.js"
import HeaderOrinoco from "./GatsbyImages/HeaderOrinoco.js"
import HeaderChouette from "./GatsbyImages/HeaderChouette.js"
import HeaderOhmyfood from "./GatsbyImages/HeaderOhmyfood.js"
import HeaderCv from "./GatsbyImages/HeaderCv.js"

export default function ProjectsCards() {
  return (
    <>
      <div className="projects-div">
        <div className="projects-items">
          <div className="projects-content">
            <HeaderVav />
            <div className="projects-text">
              <h3>Villes à Vivre</h3>
              <h4>Développement du frontend du site</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "vuejs"]}
                  title="Vue JS"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  title="SASS"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "git-square"]}
                  title="Git"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  title="GitHub"
                  size="2x"
                />
              </div>
              <Link to="/projets/villes-a-vivre/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <HeaderGotripics />
            <div className="projects-text">
              <h3>Gotripics</h3>
              <h4>Création d'un blog de voyage</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "wordpress-simple"]}
                  title="Wordpress"
                  size="2x"
                />
              </div>
              <Link to="/projets/gotripics/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-div">
        <div className="projects-items">
          <div className="projects-content">
            <HeaderPortfolio />
            <div className="projects-text">
              <h3>Portfolio</h3>
              <h4>Création de mon portfolio</h4>
              <div className="tech-icon">
                <span title="Gatsby">
                  <Icon
                    icon={gatsbyIcon}
                    className="icon-special"
                    width={36}
                    height={36}
                    color="#ee738b"
                  />
                </span>
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  title="React JS"
                  size="2x"
                />
                <span title="GraphQL">
                  <Icon
                    icon={graphqlIcon}
                    className="icon-special"
                    color="#ee738b"
                    width="36"
                    height="36"
                  />
                </span>
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  title="SASS"
                  size="2x"
                />
              </div>
              <Link to="/projets/portfolio/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <HeaderGroupomania />
            <div className="projects-text">
              <h3>Groupomania</h3>
              <h4>Création d'un réseau social d’entreprise</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  title="React JS"
                  size="2x"
                />
                <span title="mySQL">
                  <Icon
                    icon={mysqlIcon}
                    title="mySQL"
                    color="#ee738b"
                    width="42"
                    height="42"
                  />
                </span>
                <FontAwesomeIcon
                  icon={["fab", "node"]}
                  title="Node JS"
                  size="2x"
                />
                <span title="Express JS">
                  <Icon
                    icon={expressIcon}
                    title="Express JS"
                    width="42"
                    height="42"
                  />
                </span>
              </div>
              <Link to="/projets/groupomania/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-div">
        <div className="projects-items">
          <div className="projects-content">
            <HeaderPiquante />
            <div className="projects-text">
              <h3>Piquante</h3>
              <h4>Construction d'une API sécurisée</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "node"]}
                  title="Node JS"
                  size="2x"
                />
                <span title="Express JS">
                  <Icon
                    icon={expressIcon}
                    title="Express JS"
                    width="42"
                    height="42"
                  />
                </span>
                <span title="Mongo DB">
                  <Icon
                    icon={mongodbIcon}
                    title="Mongo DB"
                    color="#ee738b"
                    width="36"
                  />
                </span>
                <FontAwesomeIcon
                  icon={["fab", "git-square"]}
                  title="Git"
                  size="2x"
                />
              </div>
              <Link to="/projets/piquante/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <HeaderOrinoco />
            <div className="projects-text">
              <h3>Orinoco</h3>
              <h4>Création d'un de site e-commerce</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "js-square"]}
                  title="JavaScript"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  title="SASS"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "git-square"]}
                  title="Git"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  title="GitHub"
                  size="2x"
                />
              </div>
              <Link to="/projets/orinoco/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-div">
        <div className="projects-items">
          <div className="projects-content">
            <HeaderChouette />
            <div className="projects-text">
              <h3>Chouette Agence</h3>
              <h4>Optimisation SEO</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "js-square"]}
                  title="JavaScript"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  title="HTML 5"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "css3-alt"]}
                  title="CSS 3"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "git-square"]}
                  title="Git"
                  size="2x"
                />
              </div>
              <Link to="/projets/chouette-agence/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <HeaderOhmyfood />
            <div className="projects-text">
              <h3>Ohmyfood</h3>
              <h4>Dynamisation d'une page web</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  title="SASS"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  title="HTML 5"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "css3-alt"]}
                  title="CSS 3"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "git-square"]}
                  title="Git"
                  size="2x"
                />
              </div>
              <Link to="/projets/ohmyfood/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-div-one">
        <div className="projects-items">
          <div className="projects-content">
            <HeaderCv />
            <div className="projects-text">
              <h3>CV</h3>
              <h4>Intégration d'une maquette</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  title="HTML 5"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "css3-alt"]}
                  title="CSS 3"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "git-square"]}
                  title="Git"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  title="GitHub"
                  size="2x"
                />
              </div>
              <Link to="/projets/cv-aurelie-mlynarz/" title="Plus de détails">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
