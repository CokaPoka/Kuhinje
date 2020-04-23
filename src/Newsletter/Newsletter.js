import React from 'react'
import './Newsletter.css'
import newsletterImg from '../img/newsletterDiscount.png'



class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'site-nikola-kuhinje', email: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmail(e) {
        var email = e.target.value
        this.setState({
            email: email
        })

    }

    sendEmail(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }



    handleSubmit() {
        const templateId = 'template_NhwA5csF';
        this.sendEmail(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
        console.log(this.state.email);

    }


    render() {

        return (
            <>
                <div className="newsletter-wrapper">
                    <div className="newsletter">
                        <img className="newsletter-img" src={newsletterImg} alt="newsletter-img"></img>

                    </div>
                    <form className="test-mailing">
                        <h3>Join The List </h3>
                        <h6>SIGN UP FOR NIKOLA KIKOVIC-KUHINJE NEWSLETTER</h6>
                        <div className="newsletter-form">
                            <input type="email" placeholder="enter your e-mail address" required onInput={(e) => { this.handleEmail(e) }} />
                            <input type="button" value="SIGN UP" className="btn-submit" onClick={this.handleSubmit} />
                        </div>
                    </form>
                </div>
            </>
        )
    }



}

export default Newsletter