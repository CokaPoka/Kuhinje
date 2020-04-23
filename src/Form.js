import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'mika', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmail(e) {
        var email = e.target.value
        this.setState({
            email: email
        })
       
    }
  
    

    handleSubmit(event) {
        const templateId = 'template_NhwA5csF';

        this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
        console.log(this.state.email);
        console.log(this.state.feedback);
        
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {

        return (
            <form className="test-mailing">
                <h1>Let's see if it works</h1>
                <div>
                    <input type="email" placeholder="E-mail" required onInput={(e) => { this.handleEmail(e) }} />
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChange}
                        placeholder="Post some lorem ipsum here"
                        required
                        value={this.state.feedback}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
            </form>
        )
    }

    handleChange(event) {
        this.setState({ feedback: event.target.value })
    }

}