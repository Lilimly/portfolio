import React from "react";
import { Link } from "gatsby";
import image from "../images/img-header.jpg";

export default function ProjectsCards() {

    return (
        <>
            <div className="projects-div">
                <div className="projects-items">
                    <div className="projects-content">
                        <img
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                        />
                        <div className="projects-text">
                            <h3>Villes à Vivre</h3>
                            <h4>Projet en cours !</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>    
                                <span>
                                    <Link to="/projets/villes-a-vivre/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                    />
                        <div className="projects-text">
                            <h3>Gotripics</h3>
                            <h4>Création d'un blog de voyage</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>   
                                <span>        
                                    <Link to="/projets/gotripics/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                    />
                        <div className="projects-text">
                            <h3>Portfolio</h3>
                            <h4>Création de mon portfolio</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>       
                                <span>   
                                    <Link to="/projets/portfolio/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                    />
                        <div className="projects-text">
                            <h3>Groupomania</h3>
                            <h4>Création d'un réseau social d’entreprise</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>  
                                <span>        
                                    <Link to="/projets/groupomania/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                    />
                        <div className="projects-text">
                            <h3>Piquante</h3>
                            <h4>Construction d'une API sécurisée</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>  
                                <span>         
                                    <Link to="/projets/piquante/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                    />
                        <div className="projects-text">
                            <h3>Orinoco</h3>
                            <h4>Création d'un de site e-commerce</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>     
                                <span>     
                                    <Link to="/projets/orinoco/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                    />
                        <div className="projects-text">
                            <h3>Chouette Agence</h3>
                            <h4>Optimisation SEO</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>   
                                <span>        
                                    <Link to="/projets/chouette-agence/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                    />
                        <div className="projects-text">
                            <h3>Ohmyfood</h3>
                            <h4>Dynamisation d'une page web</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>  
                                <span>         
                                    <Link to="/projets/ohmyfood/">
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
                        src={image}
                        className="my-photo"
                        alt="Aurélie Mlynarz"
                        role="presentation"
                        />
                        <div className="projects-text">
                            <h3>CV</h3>
                            <h4>Intégration web</h4>
                            <p>Petites lignes d'introduction sur le projet.</p>
                            <button>   
                                <span>        
                                    <Link to="/projets/cv-aurelie-mlynarz/">
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