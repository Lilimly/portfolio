import React from "react";
import axios from "axios"
import * as qs from "query-string"

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
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
                feedbackMsg: "Votre message a bien été envoyé !",
            })
            this.domRef.current.reset()
            })
            .catch(err =>
            this.setState({
                feedbackMsg: "Une erreur s'est produite : " + err,
            })
        )
    }
  
    render() {
        return (
            <>
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
                                id="subject" 
                                ref="subject"
                                required
                            />
                        </label>
                        <label>
                            Votre message
                            <textarea 
                                name="message" 
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
                    {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
                </form>
            </>
        )
    }
}

export default ContactForm;

// trouver méthode pour retrouver l'url de la page
// exemple : url: this.props.location.pathname