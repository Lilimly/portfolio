import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images/aurelie-mlynarz-photo.jpg";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                    />
                    <div className="carousel-text">
                        <h3>Villes à Vivre</h3>
                        <h4>Projet en cours !</h4>
                        <p>
                            Développement d'une partie du Frontend de ce site de comparaisons de villes<br />
                            développé en <strong>Vue.JS</strong>
                        </p>
                        <button>            
                            <Link to="/projets/villes-a-vivre/">
                                Voir Villes à Vivre
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>Mon portfolio</h3>
                        <h4>Création de mon portfolio</h4>
                        <p>
                            Développement global de ce site :<br />
                            Gatsby<br />
                            React.JS<br />
                            GraphQL
                        </p>
                        <button>            
                            <Link to="/projets/portfolio/">
                                Voir mon portfolio
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>Groupomania</h3>
                        <h4>Création d'un réseau social d’entreprise</h4>
                        <p>
                            Développement Fullstack : <br />
                            <strong>Coté front</strong> : JavaScript / React<br />
                            <strong>Coté Back</strong> : Node.JS / Express.JS<br />
                            <strong>Base de données</strong>: mySQL / Sequelize
                        </p>
                        <button>            
                            <Link to="/projets/groupomania/">
                                Voir Groupomania
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>Piquante</h3>
                        <h4>Construction d'une API sécurisée</h4>
                        <p>
                            Développement du Backend de cette application d'avis gastronomiques : <br />
                            <strong>Coté serveur</strong> : Node.JS / Express.JS<br />
                            <strong>Base de données</strong>: MongoDB
                        </p>
                        <button>            
                            <Link to="/projets/piquante/">
                                Voir Piquante
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>Orinoco</h3>
                        <h4>Création d'un de site e-commerce</h4>
                        <p>
                            Développement du Frontend du site  :<br />
                            JavaScript (ES6)<br />
                            HTML5<br />
                            CSS3<br />
                            SASS
                        </p>
                        <button>            
                            <Link to="/projets/orinoco/">
                                Voir Orinoco
                            </Link>
                        </button>
                    </div>   
                </div>        
            </div>
            <div className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>La Chouette Agence</h3>
                        <h4>Optimisation du référencement SEO</h4>
                        <p>
                            Optimisation du code d'un site existant :<br />
                            vitesse<br />
                            taille<br /> 
                            accessibilité<br />
                            respect des normes W3C
                        </p>
                        <button>            
                            <Link to="/projets/chouette-agence/">
                                Voir La Chouette Agence
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>Ohmyfood</h3>
                        <h4>Dynamisation d'une page web</h4>
                        <p>
                            Développement du Frontend du site :<br />
                            HTML5<br />
                            animations CSS<br />
                            SASS
                        </p>
                        <button>            
                            <Link to="/projets/ohmyfood/">
                                Voir Ohmyfood
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div  className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>Mon CV</h3>
                        <h4>Intégration web</h4>
                        <p>
                            Transformation d'une maquette en site web :<br/>
                            réalisation de mon CV en HTML5 / CSS3
                        </p>
                        <button>            
                            <Link to="/projets/cv-aurelie-mlynarz/">
                                Voir mon CV
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div  className="carousel-items">
                <div className="carousel-div">
                    <img
                    src={image}
                    className="my-photo"
                    alt="Aurélie Mlynarz"
                    role="presentation"
                />
                    <div className="carousel-text">
                        <h3>Gotripics</h3>
                        <h4>Création d'un blog de voyage</h4>
                        <p>
                            Développement du site avec le CMS Wordpress et<br />
                            optimisation du référencement SEO
                        </p>
                        <button>            
                            <Link to="/projets/gotripics/">
                                Voir Gotripics
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </Slider>
    );
}