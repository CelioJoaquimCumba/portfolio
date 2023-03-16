import './Skills.scss'
function Skills() {
    const skillSet = [
      {
        title: "Front-end Development",
        skills: [
          {
            name: "React",
            progress: 80,
          },
          {
            name: "Html",
            progress: 70,
          },
          {
            name: "Css",
            progress: 80,
          },
          {
            name: "JavaScript",
            progress: 70,
          },
          {
            name: "TypeScript",
            progress: 80,
          },
        ],
      },
      {
        title: "Back-end Development",
        skills: [
          {
            name: "Node.js",
            progress: 20,
          },
          {
            name: "Django",
            progress: 30,
          }
        ],
      },
      {
        title: "Language",
        skills: [
          {
            name: "Portuguese",
            progress: 95,
          },
          {
            name: "English",
            progress: 80,
          }
        ],
      },
      {
        title: "Additional",
        skills: [
          {
            name: "Version control",
            progress: 50,
          },
          {
            name: "UX/UI design",
            progress: 10,
          }
        ],
      },
    ];
    return (
      <div className="skills-section">
        <div className="skills-heading-container">
          <h1 className="skills-heading">Skills</h1>
        </div>
        <div className="skills-list">
            { skillSet.map(({skills, title}, index) => {
                return (
                <div key={title} className="skills">
                    <div className="skills-header">
                    <div className="skills-title">{title}</div>
                    </div>
                    {skills.map(({ name, progress }) => {
                    return (
                        <div key={name} className="skills-body">
                        <label className="skill-name" htmlFor="id">
                            {name}
                        </label>
                        <progress
                            className="skill-progress"
                            id={name}
                            value={progress}
                            max="100"
                        ></progress>
                        </div>
                    );
                    })}
                </div>
                );
            })}
        </div>
      </div>
    );
}

export default Skills;