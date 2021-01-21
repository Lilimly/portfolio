import React from "react";
import { Link } from "react-scroll";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlobeAmericas,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    const location = window.location.pathname;

    return (
        <footer>
            <div className="info-site">
                © {new Date().getFullYear()},
                {`  `}
                {location === "/" ?
                    <Link
                        title="Page d'accueil"
                        to="welcome"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        >
                        www.lilicorp.com
                    </Link> :
                    <AnchorLink to="/#welcome" title="Page d'accueil">
                        www.lilicorp.com
                    </AnchorLink>
                }       
            </div>
            <div className="button-div">
                <p>Pour me contacter :</p>
                <button>
                    {location === "/" ?    
                        <Link
                            title="Me contacter"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link> :
                        <AnchorLink to="/#contact" title="Me contacter">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </AnchorLink>
                    }
                </button>
                <button>
                    <a 
                        href={"https://www.linkedin.com/in/aurelie-mlynarz-1899421a1/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="LinkedIn"
                        title="LinkedIn"
                    >
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                </button>
                <button>
                    <a 
                        href={"https://github.com/Lilimly"}
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="GitHub"
                        title="GitHub"
                    >
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                </button>
                <button>
                    <a 
                        href={"https://www.gotripics.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Gotripics"
                        title="Gotripics"
                    >
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                    </a>
                </button>
            </div>
        </footer>
    )
}