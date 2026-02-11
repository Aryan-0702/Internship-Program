const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;