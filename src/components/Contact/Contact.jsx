import './Contact.scss';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import isValidDomain from 'is-valid-domain';
import ToastNotif from './ToastNotif/ToastNotif';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import TypingText from '../../utils/CustomText';

function Contact() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      }, 5000);
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
          setSuccess('Votre message a bien été envoyé, je reviendrais vers vous le plus vite possible');
          resetForm();
          setLoading(false);
        },
        () => {
          setError("Une erreur c'est produite");
          setLoading(false);
        }
      );
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setSuccess(null);
      setError(null);
    }, 5000);
  };

  return (
    <>
      <section name="contact" className="Contact">
        <motion.div
          className="Contact-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h2 variants={fadeIn('up', 'tween', 0, 1)} className="self-baseline Contact-title">
            Contact
          </motion.h2>
          <TypingText
            subtitle="// Remplissez le formulaire ci-dessous ou envoyez-moi un email - "
            textStyles="py-4"
            link="erwann.rousseau@icloud.com"
            linkStyle="link-style"
          />

          <form method="POST" ref={form} onSubmit={sendEmail} className="Contact-form">
            <motion.input
              variants={textVariant(1.2)}
              className="Contact-input-name"
              type="text"
              placeholder="Quel est votre prénom ?"
              name="user_name"
              onChange={(e) => setName(e.target.value)}
            />
            <motion.input
              variants={textVariant(1.3)}
              className="Contact-input-email"
              type="email"
              placeholder="Quel est votre email ?"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.textarea
              variants={textVariant(1.4)}
              className="Contact-input-message"
              name="message"
              rows="10"
              placeholder="Quel est votre message ?"
              onChange={(e) => setMessage(e.target.value)}
            />
            <motion.button variants={textVariant(1.2)} type="submit" className="Contact-submit" disabled={isSubmitted}>
              {loading ? 'Envoie en cours...' : 'Envoyer'}
            </motion.button>
          </form>
        </motion.div>
      </section>
      <ToastNotif
        success={success}
        toggleToast={() => {
          setSuccess(null);
        }}
      />
      <ToastNotif
        error={error}
        toggleToast={() => {
          setError(null);
        }}
      />
    </>
  );
}

export default Contact;
