import React, { useState } from 'react';
import data from 'src/data/data';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import TypingText from '../../utils/CustomText';
import { fadeIn, slideIn, staggerContainer, zoomIn } from '../../utils/motion';
import './Skills.scss';

function Skills() {
  const { skills } = data;

  return (
    <section name="skills" className="Skills">
      {/* Container */}
      <motion.div
        className="Skills-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h2 className="Skills-title" variants={fadeIn('down', 'tween', 0, 1)}>
          Skills
        </motion.h2>
        <TypingText subtitle="// Voici les technologies avec lesquelles je travaille" textStyles="py-4 self-baseline" />

        <div className="Skills-tech-container">
          {/* Skills */}
          {skills.map((skill, index) => (
            <Tilt key={skill.id}>
              <motion.div className="Skills-tech-card" variants={zoomIn(1, 1)}>
                <div className="w-full">
                  <img className="Skills-tech-img" src={skill.image} alt={`${skill.name} icon`} />
                  <p className="Skills-tech-name">{skill.name}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
