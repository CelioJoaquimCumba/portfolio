import './About.scss';
import Skills from './parts/skills/Skills';
import Education from './parts/education/Education';
import Certifications from './parts/certifications/Certifications';
import Goals from './parts/goals/Goals';
import Projects from './parts/projects/Projects';
function About() {
    return (
      <div id="about">
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Goals />
      </div>
    );
}

export default About;