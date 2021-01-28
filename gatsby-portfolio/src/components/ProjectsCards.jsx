import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import gatsbyIcon from '@iconify/icons-cib/gatsby';
import mysqlIcon from '@iconify/icons-cib/mysql';
import mongodbIcon from '@iconify/icons-cib/mongodb';
import expressIcon from '@iconify/icons-logos/express';
import graphqlIcon from '@iconify-icons/cib/graphql';

import cvImg from "../images/header-cv.png";
import ohmyfoodImg from "../images/header-ohmyfood.png";
import chouetteImg from "../images/header-chouette-agence.png";
import orinocoImg from "../images/header-orinoco.png";
import piquanteImg from "../images/header-piquante.png";
import portfolioImg from "../images/header-portfolio.png";
import groupomaniaImg from "../images/header-groupomania.png";
import gotripicsImg from "../images/header-gotripics.png";
import vavImg from "../images/hearder-vav.png";

export default function ProjectsCards() {  

    return (
        <>
            <div className="projects-div">
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                            src={vavImg}
                            title="Projet Villes à vivre"
                            className="my-photo"
                            alt="Villes à vivre"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Villes à Vivre</h2>
                            <h3>Projet en cours !</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "vuejs"]} title="Vue JS" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "sass"]} title="SASS" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "git-square"]} title="Git" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "github"]} title="GitHub" size="2x"/>
                            </div>
                            <button>    
                                <span>
                                    <Link to="/projets/villes-a-vivre/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span>        
                            </button>
                        </div>
                    </div>
                </div>
                <div  className="projects-items">
                    <div className="projects-content">
                        <img
                            src={gotripicsImg}
                            title="Projet Gotipics"
                            className="my-photo"
                            alt="gotripics"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Gotripics</h2>
                            <h3>Création d'un blog de voyage</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "wordpress-simple"]} title="Wordpress" size="2x"/>
                            </div>
                            <button>   
                                <span>        
                                    <Link to="/projets/gotripics/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-div">
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                            src={portfolioImg}
                            title="Projet Portfolio"
                            className="my-photo"
                            alt="portfolio"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Portfolio</h2>
                            <h3>Création de mon portfolio</h3>
                            <div className="tech-icon">
                                <span title="Gatsby"><Icon icon={gatsbyIcon} className="icon-special" width={36} height={36} color="#ee738b" /></span>
                                <FontAwesomeIcon icon={["fab", "react"]} title="React JS" size="2x"/>
                                <span title="GraphQL"><Icon icon={graphqlIcon} className="icon-special" color="#ee738b" width="36" height="36" /></span>
                                <FontAwesomeIcon icon={["fab", "sass"]} title="SASS" size="2x"/>
                            </div>
                            <button>       
                                <span>   
                                    <Link to="/projets/portfolio/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span>  
                            </button>
                        </div>
                    </div>
                </div>
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                            src={groupomaniaImg}
                            title="Projet Groupomania"
                            className="my-photo"
                            alt="groupomania"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Groupomania</h2>
                            <h3>Création d'un réseau social d’entreprise</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "react"]} title="React JS" size="2x"/>
                                <span title="mySQL"><Icon icon={mysqlIcon} title="mySQL" color="#ee738b" width="42" height="42"  /></span>
                                <FontAwesomeIcon icon={["fab", "node"]} title="Node JS" size="2x"/>
                                <span title="Express JS"><Icon icon={expressIcon} title="Express JS" width="42" height="42" /></span>
                            </div>
                            <button>  
                                <span>        
                                    <Link to="/projets/groupomania/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-div">
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                            src={piquanteImg}
                            title="Projet Piquante"
                            className="my-photo"
                            alt="Aurélie Mlynarz"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Piquante</h2>
                            <h3>Construction d'une API sécurisée</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "node"]} title="Node JS" size="2x"/>
                                <span title="Express JS"><Icon icon={expressIcon} title="Express JS" width="42" height="42"/></span>
                                <span title="Mongo DB"><Icon icon={mongodbIcon} title="Mongo DB" color="#ee738b" width="36" /></span>
                                <FontAwesomeIcon icon={["fab", "git-square"]} title="Git" size="2x"/>
                            </div>
                            <button>  
                                <span>         
                                    <Link to="/projets/piquante/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                            src={orinocoImg}
                            title="Projet Orinoco"
                            className="my-photo"
                            alt="orinoco"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Orinoco</h2>
                            <h3>Création d'un de site e-commerce</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "sass"]} title="SASS" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "js-square"]} title="JavaScript" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "git-square"]} title="Git" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "github"]} title="GitHub" size="2x"/>
                            </div>
                            <button>     
                                <span>     
                                    <Link to="/projets/orinoco/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span>  
                            </button>
                        </div>   
                    </div>        
                </div>
            </div>
            <div className="projects-div">
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                            src={chouetteImg}
                            title="Projet Chouette Agence"
                            className="my-photo"
                            alt="Chouette Agence"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Chouette Agence</h2>
                            <h3>Optimisation SEO</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "js-square"]} title="JavaScript" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "html5"]} title="HTML 5" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "css3-alt"]} title="CSS 3" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "git-square"]} title="Git" size="2x"/>
                            </div>
                            <button>   
                                <span>        
                                    <Link to="/projets/chouette-agence/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                            src={ohmyfoodImg}
                            title="Projet Ohmyfood"
                            className="my-photo"
                            alt="ohmyfood"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>Ohmyfood</h2>
                            <h3>Dynamisation d'une page web</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "sass"]} title="SASS" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "html5"]} title="HTML 5" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "css3-alt"]} title="CSS 3" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "git-square"]} title="Git" size="2x"/>
                            </div>
                            <button>  
                                <span>         
                                    <Link to="/projets/ohmyfood/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-div-one">
                <div  className="projects-items">
                    <div className="projects-content">
                        <img
                            src={cvImg}
                            title="Projet CV"
                            className="my-photo"
                            alt="cv Aurélie Mlynarz"
                            role="presentation"
                        />
                        <div className="projects-text">
                            <h2>CV</h2>
                            <h3>Intégration d'une maquette</h3>
                            <div className="tech-icon">
                                <FontAwesomeIcon icon={["fab", "html5"]} title="HTML 5" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "css3-alt"]} title="CSS 3" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "git-square"]} title="Git" size="2x"/>
                                <FontAwesomeIcon icon={["fab", "github"]} title="GitHub" size="2x"/>
                            </div>
                            <button>   
                                <span>        
                                    <Link to="/projets/cv-aurelie-mlynarz/" title="Plus de détails">
                                        Plus de détails
                                    </Link>
                                </span> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}