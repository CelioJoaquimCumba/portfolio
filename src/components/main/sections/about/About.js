import './About.scss';
import Skills from './parts/skills/Skills';
import Education from './parts/education/Education';
import Certifications from './parts/certifications/Certifications';
import Goals from './parts/goals/Goals';
function About() {
    return (
      <div id="about me">
        <Skills />
        <Education />
        <Certifications />
        <Goals />
      </div>
    );
}

export default About;