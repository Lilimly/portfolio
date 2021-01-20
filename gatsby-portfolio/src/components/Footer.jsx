import React from "react";
import { Link } from "react-scroll";
import { Link as LinkTo } from "gatsby";
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
                        to="section"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        >
                        www.lilicorp.com
                    </Link> :
                    <LinkTo to={'/#section'}>
                        www.lilicorp.com
                    </LinkTo>
                }       
            </div>
            <div className="button-div">
                <p>Mes contacts :</p>
                <button>
                    {location === "/" ?    
                        <Link
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link> :
                        <LinkTo to={'/#section3'}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </LinkTo>
                    }
                </button>
                <button>
                    <a 
                    href={"https://www.linkedin.com/in/aurelie-mlynarz-1899421a1/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="LinkedIn"
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
                    >
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                    </a>
                </button>
            </div>
        </footer>
    )
}