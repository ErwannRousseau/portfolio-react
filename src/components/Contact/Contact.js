import './Contact.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import isValidDomain from 'is-valid-domain';
import ToastNotif from './ToastNotif/ToastNotif';

function Contact() {
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const publicKey = process.env.YOUR_PUBLIC_KEY;
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (evt) => {
    evt.preventDefault();
    setLoading(true);

    if (!email.trim() || !name.trim() || !message.trim()) {
      setError('Veuillez remplir tous les champs');
      setTimeout(() => {
        setError(null);
      }, 7000);
      setLoading(false);
      return;
    }

    const emailParts = email.split('@');
    if (emailParts.length !== 2) {
      setError("L'email n'est pas valide");
      setTimeout(() => {
        setError(null);
      }, 7000);
      setLoading(false);
      return;
    }

    const domain = emailParts[1];
    if (!isValidDomain(domain)) {
      setError("Le domaine de l'email n'est pas valide");
      setLoading(false);
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setSuccess('Votre essage a bien été envoyé, je reviendrais vers vous le plus vite possible');
          resetForm();
          setLoading(false);
        },
        () => {
          setError("Une erreur c'est produite");
          setLoading(false);
        }
      );
    }
    setTimeout(() => {
      setSuccess(null);
      setError(null);
    }, 7000);
  };

  return (
    <>
      <section name="contact" className="Contact">
        <div className="Contact-container">
          <div className="Contact-header">
            <h2 className="Contact-title">Contact</h2>
            <p className="Contact-description">
              // Remplissez le formulaire ci-dessous ou envoyez-moi un email -&nbsp;
              <a className="Contact-email" href="mailto:erwann.rousseau@icloud.com">
                erwann.rousseau@icloud.com
              </a>
            </p>
          </div>
          <form method="POST" ref={form} onSubmit={sendEmail} className="Contact-form">
            <input
              className="Contact-input-name"
              type="text"
              placeholder="Quel est votre prénom ?"
              name="user_name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="Contact-input-email"
              type="email"
              placeholder="Quel est votre email ?"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="Contact-input-message"
              name="message"
              rows="10"
              placeholder="Quel est votre message ?"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="Contact-submit">
              {loading ? 'Envoie en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </section>
      <ToastNotif
        success={success}
        toggleToast={() => {
          setSuccess();
        }}
      />
      <ToastNotif
        error={error}
        toggleToast={() => {
          setError();
        }}
      />
    </>
  );
}

export default Contact;
