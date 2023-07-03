import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from './motion';

export default function TypingText({ subtitle, textStyles, link, linkStyle }) {
  return (
    <motion.p variants={textContainer} className={`${textStyles}`}>
      {Array.from(subtitle).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
      {link && (
        <motion.a href={`mailto:${link}`} className={linkStyle}>
          {Array.from(link).map((linkLetter, linkIndex) => (
            <motion.span variants={textVariant2} key={linkIndex}>
              {linkLetter}
            </motion.span>
          ))}
        </motion.a>
      )}
    </motion.p>
  );
}
