import './About.scss';
import CodeTag from '../../../code-tags/CodeTag'
import Skills from './parts/skills/Skills';
import Education from './parts/education/Education';
import Certifications from './parts/certifications/Certifications';
import Goals from './parts/goals/Goals';
function About() {
    return ( 
        <CodeTag tag={"section"} idAtr={"about"}>
            <Skills/>
            <Education/>
            <Certifications/>
            <Goals/>
        </CodeTag>
     );
}

export default About;