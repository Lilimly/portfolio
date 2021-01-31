import React from "react";
import axios from "axios";
import * as qs from "query-string";

class ContactForm extends React.PureComponent {

    constructor(props) {
        super(props)
        this.domRef = React.createRef()
        this.state = { 
            feedbackMsg: null,
            isShowing: false,
            rows: 3,
			minRows: 3,
			maxRows: 20,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
		const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	    event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
            
            if (currentRows >= maxRows) {
                event.target.rows = maxRows;
                event.target.scrollTop = event.target.scrollHeight;
            }
        
        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
	};

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
                    feedbackMsg: "Votre message m'a bien été envoyé ! Je vous remercie et vous réponds au plus vite. ",
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
                    action="/"
                    data-netlify-honeypot="bot-field" 
                    onSubmit={event => this.handleSubmit(event)}
                >
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <div className="form-div">
                        <label>
                            Nom
                            <input 
                                title="Votre nom"
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
                                title="Votre adresse mail" 
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
                                title="Sujet de votre mail" 
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
                                title="Votre message"        
                                name="message" 
                                placeholder="Votre message" 
                                id="message" 
                                rows={this.state.rows}
                                ref="message"
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        
                    </div>
                    <div className="button-div">
                        <button type="submit" title="Envoyer le mail !">
                            <span>
                                Envoyer !
                            </span>
                        </button>
                    </div>
                    {isShowing === true 
                        ? <div className="modal-div">
                            <div className="modal-wrapper">
                                <div className="modal">
                                        <p>{this.state.feedbackMsg}</p>
                                        <div className="button-div">
                                            <button onClick={this.handleClick} title="Retour au site">
                                                <span>
                                                    Retour au site
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : null
                    }    
                </form>
            </div>
        )
    }
}

export default ContactForm;