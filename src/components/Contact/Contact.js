import './Contact.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import isValidDomain from 'is-valid-domain';

function Contact() {
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const publicKey = process.env.YOUR_PUBLIC_KEY;
  const form = useRef();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const resetForm = () => {
    form.current.reset();
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const sendEmail = (evt) => {
    evt.preventDefault();
    setLoading(true);

    const emailParts = email.split('@');
    if (emailParts.length !== 2) {
      setError('L\'email n\'est pas valide');
      return;
    }

    const domain = emailParts[1];
    if (!isValidDomain(domain)) {
      setError('Le domaine de l\'email n\'est pas valide');
    }
    else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then(() => {
          setSuccess('Message bien envoyé');
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          setLoading(false);
          resetForm();
        }, () => {
          setError("Une erreur c'est produite");
          setTimeout(() => {
            setError(false);
          }, 3000);
        });
    }
  };

  return (
    <>
      <section name="contact" className="Contact">
        <div className="Contact-container">
          <div className="Contact-header">
            <h2 className="Contact-title">Contact</h2>
            <p className="Contact-description">
              // Remplissez le formulaire ci-dessous ou envoyez-moi un email -&nbsp;
              <a
                className="Contact-email"
                href="mailto:erwann.rousseau@icloud.com"
              >erwann.rousseau@icloud.com
              </a>
            </p>
          </div>
          <form method="POST" ref={form} onSubmit={sendEmail} className="Contact-form">
            <input className="Contact-input-name" type="text" placeholder="Quel est votre prénom ?" name="user_name" />
            <input className="Contact-input-email" type="email" placeholder="Quel est votre email ?" name="user_email" onChange={handleEmailChange} />
            <textarea className="Contact-input-message" name="message" rows="10" placeholder="Quel est votre message ?" />
            <button type="submit" className="Contact-submit">{loading ? 'Envoie en cours...' : 'Envoyer'}</button>
          </form>
        </div>
      </section>
      {success && (
      <div className="bg-green-800 p-4 font-bold text-white">
        {success}
      </div>
      )}
      {error && (
      <div className="bg-red-800 p-4 font-bold text-white">
        {error}
      </div>
      )}
    </>
  );
}

export default Contact;
