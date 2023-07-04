import './Home.scss';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { slideIn, staggerContainer, textVariant } from '../../utils/motion';

function Home() {
  return (
    <section name="home" className="Home">
      <motion.div
        className="Home-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="left">
          <motion.div variants={textVariant(1.1)}>
            <p className="Home-hello">Bonjour, je m&apos;appelle</p>
            <h2 className="Home-name">Erwann Rousseau</h2>
            <h1 className="Home-title">Je suis développeur web Full-Stack.</h1>
          </motion.div>
          <motion.p variants={textVariant(1.2)} className="Home-pres">
            {/* eslint-disable-next-line max-len */}
            Je suis un développeur web full-stack junior passionné par la création d&apos;expériences interactives en
            ligne. J&apos;ai une préférence marquée pour React, que j&apos;utilise avec enthousiasme pour développer des
            applications web dynamiques.
          </motion.p>
          <motion.div variants={textVariant(1.3)}>
            <Link to="work" smooth duration={500}>
              <button type="button" className="Home-btn">
                Voir mes travaux
                <span className="Home-arrow">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div variants={slideIn('right', 'spring', 0.2, 1)} className="hero-img" />
      </motion.div>
    </section>
  );
}

export default Home;
