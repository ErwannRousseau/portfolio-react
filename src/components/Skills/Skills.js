import './Skills.scss';
import { useState } from 'react';
import data from 'src/data/data';

function Skills() {
  const { skills } = data;

  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (isFocused) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    console.log('leave');
    setOpacity(0);
  };
  return (
    <section name="skills" className="Skills">
      {/* Container */}
      <div className="Skills-container">
        <div className="Skills-header">
          <h2 className="Skills-header-title">Skills</h2>
          <p className="Skills-header-subtitle">// Voici les technologies avec lesquelles je travaille</p>
        </div>
        <div className="Skills-tech-container">
          {/* Skills */}
          {skills.map((skill) => (
            <div
              className="Skills-tech-card"
              key={skill.id}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <div
                className="gradient-bg"
                style={{
                  opacity,
                  background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                }}
              />
              <img className="Skills-tech-img" src={skill.image} alt={`${skill.name} icon`} />
              <p className="Skills-tech-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
