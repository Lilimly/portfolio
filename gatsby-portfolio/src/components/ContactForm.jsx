import React from "react";
import { navigate } from "gatsby"
import axios from "axios"
import * as qs from "query-string"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCat,
    faBeer,
    faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

class ContactForm extends React.Component {

    constructor(props) {
        super(props)
        this.domRef = React.createRef()
        this.state = { 
            feedbackMsg: null,
            isShowing: false
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(event) {
        event.preventDefault()
        this.setState({
            isShowing: false
        })
    }
  
    handleSubmit(event) {
        event.preventDefault()
        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))
        
        console.log(formData)

        const axiosOptions = {
            url: /localhost:8000/,
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
        }

        axios(axiosOptions)
            .then(response => {
                this.setState({
                    isShowing: true,
                    feedbackMsg: "Votre message m'a bien été envoyé ! Je vous en remercie et vous répond au plus vite. ",
                })
                this.domRef.current.reset()
            })
            .catch(err =>
                this.setState({
                    isShowing: true,
                    feedbackMsg: "Une erreur s'est produite : " + err + ". N'hésitez pas à recommencer !",
                })
        )
    }
  
    render() {
        const {isShowing} = this.state;

        return (
            <div className="big-form">
                <form 
                    ref={this.domRef}
                    name="Contact Form" 
                    method="post" 
                    data-netlify="true" 
                    action="/merci"
                    data-netlify-honeypot="bot-field" 
                    onSubmit={event => this.handleSubmit(event)}
                >
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <div className="form-div">
                        <label>
                            Nom
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Votre nom" 
                                id="name"
                                ref="name"
                                required
                            />
                        </label>
                        <label>
                            Email
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Votre adresse mail" 
                                id="email" 
                                ref="email"
                                required
                            />
                        </label>
                        <label>
                            Sujet
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Sujet du message" 
                                id="subject" 
                                ref="subject"
                                required
                            />
                        </label>
                        <label>
                            Votre message
                            <textarea 
                                name="message" 
                                placeholder="Votre message" 
                                id="message" 
                                rows="5" 
                                ref="message"
                                required
                            />
                        </label>
                    </div>
                    <div className="button-div">
                        <button type="submit">Envoyer</button>
                        <input type="reset" value="Clear" />
                    </div>
                    {isShowing === true 
                        ? <div className="modal-div">
                            <div className="modal-wrapper">
                                <div className="modal">
                                        <p>{this.state.feedbackMsg}</p>
                                        <div className="button-div">
                                            <button onClick={this.handleClick}>
                                                Retour au site
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : null
                    }    
                </form>
                <hr/>
                <div className="social-contact">
                    <h3>Retrouvez moi également ici :</h3>
                    <div className="button-div">
                        <button>
                            <a 
                                href={"https://www.linkedin.com/in/aurelie-mlynarz-1899421a1/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                alt="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faBeer} flip="both" />
                            </a>
                        </button>
                        <button>
                            <a 
                                href={"https://github.com/Lilimly"}
                                target="_blank"
                                rel="noopener noreferrer"
                                alt="GitHub"
                            >
                                <FontAwesomeIcon icon={faCat} />
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
                </div>
            </div>
        )
    }
}

export default ContactForm;

// trouver méthode pour retrouver l'url de la page
// exemple : url: this.props.location.pathname
// essayer : const url = this.props.match.params.id;