import React from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

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
      user: "",
      email: "",
      subject: "",
      message: "",
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    const textareaLineHeight = 24
    const { minRows, maxRows } = this.state

    const previousRows = event.target.rows
    event.target.rows = minRows // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
      event.target.scrollTop = event.target.scrollHeight
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
      [event.target.name]: event.target.value,
    })
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({
      isShowing: false,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = this.state.user
    const email = this.state.email
    const subject = this.state.subject
    const message = this.state.message

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-form",
        user,
        email,
        subject,
        message,
      }),
    })
      .then(response => {
        this.setState({
          isShowing: true,
          feedbackMsg:
            "Votre message m'a bien été envoyé ! Je vous remercie et vous réponds au plus vite. ",
          user: "",
          email: "",
          subject: "",
          message: "",
        })
      })
      .catch(error =>
        this.setState({
          isShowing: true,
          feedbackMsg:
            "Une erreur s'est produite : " +
            error +
            ". N'hésitez pas à recommencer !",
        })
      )
  }

  render() {
    const { isShowing } = this.state
    const { user, email, message, subject } = this.state
    return (
      <div className="big-form">
        <form
          ref={this.domRef}
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={event => this.handleSubmit(event)}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="form-div">
            <label>
              Nom
              <input
                title="Votre nom"
                type="text"
                name="user"
                value={user}
                onChange={this.handleChange}
                placeholder="Votre nom"
                id="name"
                ref="user"
                required
              />
            </label>
            <label>
              Email
              <input
                title="Votre adresse mail"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
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
                value={subject}
                onChange={this.handleChange}
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
                value={message}
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
              <span>Envoyer !</span>
            </button>
          </div>
          {isShowing === true ? (
            <div className="modal-div">
              <div className="modal-wrapper">
                <div className="modal">
                  <p>{this.state.feedbackMsg}</p>
                  <div className="button-div">
                    <button
                      className="modal-button"
                      onClick={this.handleClick}
                      title="Retour au site"
                    >
                      <span>Retour au site</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    )
  }
}

export default ContactForm
