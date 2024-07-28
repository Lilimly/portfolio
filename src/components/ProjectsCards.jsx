import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-cib/gatsby"
import mysqlIcon from "@iconify/icons-cib/mysql"
import mongodbIcon from "@iconify/icons-cib/mongodb"
import expressIcon from "@iconify/icons-logos/express"
import graphqlIcon from "@iconify-icons/cib/graphql"
import nuxtJs from "@iconify-icons/cib/nuxt-js"
import googleAnalytics from "@iconify-icons/mdi/google-analytics"
import netlifyIcon from "@iconify/icons-cib/netlify"
import leafletIcon from "@iconify/icons-logos/leaflet"

//headers img
import HeaderGotripics from "./GatsbyImages/HeaderGotripics.js"
import HeaderVav from "./GatsbyImages/HeaderVav.js"
import HeaderPortfolio from "./GatsbyImages/HeaderPortfolio.js"
import HeaderGroupomania from "./GatsbyImages/HeaderGroupomania.js"
import HeaderPiquante from "./GatsbyImages/HeaderPiquante.js"
import HeaderOrinoco from "./GatsbyImages/HeaderOrinoco.js"

export default function ProjectsCards() {
  return (
    <>
      <div className="projects-div">
        <div className="projects-items">
          <div className="projects-content">
            <Link to="/projets/villes-a-vivre/">
              <HeaderVav />
            </Link>
            <div className="projects-text">
              <Link
                to="/projets/villes-a-vivre/"
                title="Voir le projet Villes à Vivre"
              >
                <h3>Villes à Vivre</h3>
              </Link>
              <h4>Développement du frontend du site</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "vuejs"]}
                  title="Vue JS"
                  size="2x"
                />
                <span title="Nuxt JS">
                  <Icon icon={nuxtJs} color="#eb5a77" width="36" height="36" />
                </span>
                <FontAwesomeIcon
                  icon={["fab", "algolia"]}
                  title="Algolia"
                  size="2x"
                />
                <span title="Leaflet">
                  <Icon icon={leafletIcon} width="42" height="42" />
                </span>
              </div>
              <Link
                to="/projets/villes-a-vivre/"
                title="Voir le projet Villes à Vivre"
              >
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <Link to="/projets/gotripics/">
              <HeaderGotripics />
            </Link>
            <div className="projects-text">
              <Link to="/projets/gotripics/" title="Voir le projet Gotripics">
                <h3>Gotripics</h3>
              </Link>
              <h4>Création d'un blog de voyage</h4>
              <div className="tech-icon">
                <FontAwesomeIcon
                  icon={["fab", "wordpress-simple"]}
                  title="Wordpress"
                  size="2x"
                />
                <span title="Google Analytics">
                  <Icon
                    icon={googleAnalytics}
                    color="#eb5a77"
                    width="36"
                    height="36"
                  />
                </span>
                <FontAwesomeIcon
                  icon={["fab", "mailchimp"]}
                  title="Mailchimp"
                  size="2x"
                />
              </div>
              <Link to="/projets/gotripics/" title="Voir le projet Gotripics">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <Link to="/projets/portfolio/">
              <HeaderPortfolio />
            </Link>
            <div className="projects-text">
              <Link to="/projets/portfolio/" title="Voir le projet Portfolio">
                <h3>Portfolio</h3>
              </Link>
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
                  icon={["fab", "react"]}
                  title="React JS"
                  size="2x"
                />
                <span title="Netlify">
                  <Icon
                    icon={netlifyIcon}
                    color="#eb5a77"
                    width="36"
                    height="36"
                  />
                </span>
              </div>
              <Link to="/projets/portfolio/" title="Voir le projet Portfolio">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <Link to="/projets/groupomania/">
              <HeaderGroupomania />
            </Link>
            <div className="projects-text">
              <Link
                to="/projets/groupomania/"
                title="Voir le projet Groupomania"
              >
                <h3>Groupomania</h3>
              </Link>
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
              <Link
                to="/projets/groupomania/"
                title="Voir le projet Groupomania"
              >
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <Link to="/projets/piquante/">
              <HeaderPiquante />
            </Link>
            <div className="projects-text">
              <Link to="/projets/piquante/" title="Voir le projet Piquante">
                <h3>Piquante</h3>
              </Link>
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
              <Link to="/projets/piquante/" title="Voir le projet Piquante">
                <button>
                  <span>Voir le projet</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-items">
          <div className="projects-content">
            <Link to="/projets/orinoco/">
              <HeaderOrinoco />
            </Link>
            <div className="projects-text">
              <Link to="/projets/orinoco/" title="Voir le projet Orinoco">
                <h3>Orinoco</h3>
              </Link>
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
                  icon={["fab", "html5"]}
                  title="HTML 5"
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={["fab", "git-square"]}
                  title="Git"
                  size="2x"
                />
              </div>
              <Link to="/projets/orinoco/" title="Voir le projet Orinoco">
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
