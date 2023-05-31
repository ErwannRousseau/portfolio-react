import './Contact.scss';

function Contact() {
  return (
    <section name="contact" className="Contact">
      <form method="POST" action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className="Contact-form">
        <div className="Contact-header">
          <h2 className="Contact-title">Contact</h2>
          <p className="Contact-description">// Remplissez le formulaire ci-dessous ou envoyez-moi un email  -
            <a
              className="Contact-email"
              href="mailto:erwann.rousseau@icloud.com"
            >
              erwann.rousseau@icloud.com
            </a>
          </p>
        </div>
        <input className="Contact-input-name" type="text" placeholder="Nom Prénom" name="name" />
        <input className="Contact-input-email" type="email" placeholder="Email" name="email" />
        <textarea className="Contact-input-message" name="message" rows="10" placeholder="Message" />
        <button type="submit" className="Contact-submit">Envoyer</button>
      </form>
      {/* <Footer /> */}
    </section>

  );
}

export default Contact;
