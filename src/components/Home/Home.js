import './Home.scss';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section name="home" className="Home">
      <div className="Home-container">
        <div className="left">
          <p className="Home-hello">Bonjour, je m'appelle</p>
          <h2 className="Home-name">Erwann Rousseau</h2>
          <h1 className="Home-title">Je suis développeur web Full-Stack.</h1>
          <p className="Home-pres">
            {/* eslint-disable-next-line max-len */}
            Je suis un développeur web full-stack junior passionné par la création d'expériences interactives en ligne.
            J'ai une préférence marquée pour React, que j'utilise avec enthousiasme pour développer des applications web
            dynamiques.
          </p>
          <div>
            <Link to="work" smooth duration={500} offset={-80}>
              <button type="button" className="Home-btn">
                Voir mes travaux
                <span className="Home-arrow">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-img" />
      </div>
    </section>
  );
}

export default Home;
