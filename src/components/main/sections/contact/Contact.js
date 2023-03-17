import './Contact.scss'
function Contact() {
    return (
      <div id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header-container">
            <h2 className="contact-header">Get To know Me</h2>
          </div>
          <div className="contact-caption-container">
            <p className="contact-caption">
              I am available to work remotely and in-place. I am more than happy
              to start as an intern and make my way to the top
            </p>
          </div>
          <div className="contact-buttons-container">
            <button className="contact-button">
              <a
                href="mailto:celio.joaquim.cumba@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email me
              </a>
            </button>
            <p>or</p>
            <button className="contact-button">
              <a
                href="https://wa.me/258849383897"
                target="blank"
                rel="noopener noreferrer"
              >
                Chat on whatsapp
              </a>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Contact;