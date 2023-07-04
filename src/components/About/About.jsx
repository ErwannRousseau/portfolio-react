/* eslint-disable max-len */
import './About.scss';
import { motion } from 'framer-motion';

import { fadeIn, slideIn, staggerContainer } from 'src/utils/motion';

function About() {
  return (
    <section name="about" className="About">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="About-container"
      >
        <motion.div className="About-header" variants={fadeIn('down', 'spring', 0.2, 1)}>
          <h2 className="About-header-title">À propos</h2>
        </motion.div>
        <div className="About-content">
          <motion.div className="About-content-details" variants={slideIn('left', 'tween', 0.3, 1)}>
            <p>
              Bonjour, je m’appelle Erwann Rousseau et je suis ravi de vous rencontrer. N&apos;hésitez pas à jeter un
              coup d&apos;œil à mon portfolio et à mes projets.
            </p>
          </motion.div>
          <motion.div className="About-content-pres" variants={slideIn('right', 'tween', 0.3, 1)}>
            <p>
              En tant que développeur junior, j&apos;ai à cœur de continuellement améliorer mes compétences et
              d&apos;apprendre de nouvelles technologies. Je trouve une réelle satisfaction dans la création d&apos;un
              code bien structuré et clair, en veillant à ce qu&apos;il soit compréhensible, maintenable et extensible.{' '}
              <br />
              Mon objectif est de grandir en tant que développeur web en acquérant de l&apos;expérience pratique. Si
              vous recherchez un développeur web junior passionné et déterminé à fournir des produits de qualité,
              n&apos;hésitez pas à me contacter. Je serais ravi de participer à des projets passionnants et de
              contribuer à leur succès.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
