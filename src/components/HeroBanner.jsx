import React from "react"
import { Link } from "react-scroll"

const HeroBanner = () => {
  return (
    <div className="section-content">
      <h1>Bienvenue</h1>
      <p>
        Je suis Aurélie, <strong>développeuse fullstack web et mobile</strong>.
      </p>
      {/* <p>
        <strong>Ma mission</strong> : vous aider à créer un site web qui vous
        correspond.
      </p> */}
      <p>
        Consultez{" "}
        <Link
          title="Parcours"
          to="parcours"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          mon parcours
        </Link>{" "}
        ainsi que {" "}
        <Link
          title="Projets"
          to="projets"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          les projets
        </Link>{" "}
        que j'ai réalisés.
      </p>
      <div className="button-div">
        <Link
          title="Contactez-moi !"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <button>
            <span>Contactez-moi !</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner
