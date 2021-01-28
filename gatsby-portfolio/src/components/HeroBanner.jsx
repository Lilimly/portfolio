import React from "react";
import { Link } from "react-scroll";

const HeroBanner = () => (
    <div className="section-content">
      <h1>Welcome !</h1>
      <p>Je suis Aurélie, <strong>développeuse web fullstack</strong>.</p>
      <p>Mon but : vous aider à créer votre site web moderne et responsive.</p>
      <p>Pour en savoir plus, consultez {" "}
        <Link
          title="Parcours"
          to="parcours"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          mon parcours
        </Link> 
        {" "} et {" "}
        <Link
          title="Projets"
            to="projets"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
        >
          les projets
        </Link> 
        {" "} que j'ai réalisés.
      </p>
      <div className="button-div">
        <button> 
          <span>          
            <Link
              title="Contactez-moi !"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contactez-moi !
            </Link>
          </span> 
        </button>
      </div>
    </div>
)

export default HeroBanner;