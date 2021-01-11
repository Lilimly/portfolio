import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider( ) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <h3 className="carousel-items"><Link to="/projets/new/">New</Link></h3>
            </div>
            <div>
                <h3 className="carousel-items"><Link to="/projets/coucou/">Coucou !</Link></h3>
            </div>
            <div>
                <h3 className="carousel-items"><Link to="/projets/dernier/">Dernier</Link></h3>
            </div>
            <div>
                <h3 className="carousel-items"><Link to="/projets/hello/">Hello</Link></h3>
            </div>
            <div>
                <h3 className="carousel-items"><Link to="/projets/post-2/">Post 2</Link></h3>
            </div>
            <div>
                <h3 className="carousel-items"><Link to="/projets/post/">Post</Link></h3>
            </div>
            <div>
                <h3 className="carousel-items"><Link to="/projets/salut/">Salut</Link></h3>
            </div>
        </Slider>
    );
}