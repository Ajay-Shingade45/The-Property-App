import './ContactComponent.css'

const ContactComponent = () => {
    return (
        <div className="contactComponent">
            <div className="contactComponent-map">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=New%20York&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>

            <div className="contactComponent-container">
                <form className="contactComponent-form">
                    <div className="contactComponent-row">
                            <input id="fullName" name="fullName" type="text" className='contactComponent-row-input' placeholder="Enter your full name" />
                            <input id="emailAddress" name="emailAddress" type="email" className='contactComponent-row-input'  placeholder="Enter your email" />
                    </div>

                        <input id="subject" name="subject" type="text" className="fullWidth" placeholder="Subject"/>
                        <textarea id="message" name="message" rows={6} className="fullWidth contactComponent-textarea" placeholder="Write your message..."/>

                    <div className="contactComponent-actions">
                        <button type="button" className="contactComponent-button">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactComponent
