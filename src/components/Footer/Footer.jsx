import './Footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footerVariants } from '../../utils/motion';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className="Footer">
      <div className="Footer-container">
        <div className="Footer-top">
          <div className="Footer-link">
            <div>
              <a className=" block " href="https://www.linkedin.com/in/erwannrousseauwebdev/" target="blank">
                <FaLinkedin size={30} />
              </a>
            </div>
            <div>
              <a href="https://github.com/ErwannRousseau" target="blank">
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <a href="mailto:erwann.rousseau@icloud.com">
                <HiOutlineMail size={30} />
              </a>
            </div>
            <div>
              <a
                href="http://localhost/GitHub/portfolio-react/public/CV_Erwann_Rousseau.pdf"
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
            <NavLink to="/legal/conditions" onClick={handleScrollToTop}>
              Conditions d&apos;utilisation
            </NavLink>
            <NavLink to="/legal/confidentialite" onClick={handleScrollToTop}>
              Confidentialité
            </NavLink>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
