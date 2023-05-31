import './Skills.scss';

import data from 'src/data/data';

function Skills() {
  const { skills } = data;
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
            <div className="Skills-tech-card" key={skill.id}>
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
