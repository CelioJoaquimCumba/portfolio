import './About.scss';
import CodeTag from '../../../code-tags/CodeTag'
import Skills from './parts/skills/Skills';
import Education from './parts/education/Education';
import Certifications from './parts/certifications/Certifications';
import Goals from './parts/goals/Goals';
function About() {
    return ( 
        <>
            <Skills/>
            <Education/>
            <Certifications/>
            <Goals/>
        </>
     );
}

export default About;