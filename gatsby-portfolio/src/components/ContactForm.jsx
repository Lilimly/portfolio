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
      
        const axiosOptions = {
          url: this.props.location.pathname,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData),
        }

        axios(axiosOptions)
          .then(response => {
            this.setState({
              feedbackMsg: "Form submitted successfully!",
            })
            this.domRef.current.reset()
          })
          .catch(err =>
            this.setState({
              feedbackMsg: "Form could not be submitted.",
            })
          )
      }
  
    render() {
        return (
            <>
                {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
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
                            />
                        </label>
                        <label>
                            Email
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                ref="email"
                            />
                        </label>
                        <label>
                            Sujet
                            <input 
                                type="text" 
                                name="subject" 
                                id="subject" 
                                ref="subject"
                            />
                        </label>
                        <label>
                            Votre message
                            <textarea 
                                name="message" 
                                id="message" 
                                rows="5" 
                                ref="message"
                            />
                        </label>
                    </div>
                    <div className="button-div">
                        <button type="submit">Envoyer</button>
                        <input type="reset" value="Clear" />
                    </div>
                </form>
            </>
        )
    }
}

export default ContactForm;