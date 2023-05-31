import './Footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-top">
          <div className="Footer-link">
            <div>
              <a
                className=" block "
                href="https://www.linkedin.com/in/erwannrousseauwebdev/"
                target="blank"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/ErwannRousseau"
                target="blank"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <a
                href="mailto:erwann.rousseau@icloud.com"
              >
                <HiOutlineMail size={30} />
              </a>
            </div>
            <div>
              <a
                className=" "
                href="http://localhost/Spe-React/portolio-react/public/assets/CV_ErwannRousseau.pdf"
                target="_blank"
                download="CV_ErwannRousseau.pdf"
                rel="noreferrer"
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="Footer-bottom">
          <div className="Footer-legal">
            <span>Copyright © 2023 Erwann Rousseau</span>
            <NavLink
              to="/legal/conditions"
              onClick={handleScrollToTop}
            >Conditions d'utilisation
            </NavLink>
            <NavLink to="/legal/confidentialite" onClick={handleScrollToTop}>Confidentialité</NavLink>
          </div>
        </div>
      </div>

    </footer>

  );
}

export default Footer;
