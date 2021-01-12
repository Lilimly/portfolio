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
                        <button>            
                            <Link to="/projets/villes-a-vivre/">
                                Villes à Vivre
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
                        <button>            
                            <Link to="/projets/gotripics/">
                                Gotripics
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
                        <h4>Création de ce portfolio</h4>
                        <button>            
                            <Link to="/projets/portfolio/">
                                Portfolio
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
                        <button>            
                            <Link to="/projets/groupomania/">
                                Groupomania
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
                        <button>            
                            <Link to="/projets/piquante/">
                                Piquante
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
                        <button>            
                            <Link to="/projets/orinoco/">
                                Orinoco
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
                        <h3>Chouette Agence</h3>
                        <h4>Optimisation SEO</h4>
                        <button>            
                            <Link to="/projets/chouette-agence/">
                                Chouette Agence
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
                        <button>            
                            <Link to="/projets/ohmyfood/">
                                Ohmyfood
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
                        <button>            
                            <Link to="/projets/cv-aurelie-mlynarz/">
                                Mon CV
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </Slider>
    );
}