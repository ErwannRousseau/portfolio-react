/* eslint-disable max-len */
import './About.scss';

function About() {
  return (
    <section name="about" className="About">
      <div className="About-container">
        <div className="About-header">
          <h2 className="About-header-title">
            À propos
          </h2>
        </div>
        <div className="About-content">
          <div className="About-content-details">
            <p>Bonjour, je m’appelle Erwann Rousseau et je suis ravi de vous rencontrer. N'hésitez pas à jeter un coup d'œil à mon portfolio et à mes projets.</p>
          </div>
          <div className="About-content-pres">
            <p>
              En tant que développeur junior, j'ai à cœur de continuellement améliorer mes compétences et d'apprendre de nouvelles technologies. Je trouve une réelle satisfaction dans la création d'un code bien structuré et clair, en veillant à ce qu'il soit compréhensible, maintenable et extensible. <br />
              Mon objectif est de grandir en tant que développeur web en acquérant de l'expérience pratique. Si vous recherchez un développeur web junior passionné et déterminé à fournir des produits de qualité, n'hésitez pas à me contacter. Je serais ravi de participer à des projets passionnants et de contribuer à leur succès.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
