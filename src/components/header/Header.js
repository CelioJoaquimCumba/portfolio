import './Header.scss';
import CodeTag from '../code-tags/CodeTag';
import profile from '../../assets/profile.png'
import { BsGithub, BsInstagram, BsLinkedin, } from 'react-icons/bs'
function Header() {
    return (
      <header>
        <CodeTag tag="header" className="header">
          <img src={profile} alt="profile" className="img-fluid profile" />
          <div className="info-container">
            <h1 className="info-title">
              <b className='tag'>{`<h1>`}</b>
              {`Hello World`}
              <b className='tag'>{`</h1>`}</b>
            </h1>
            <p className="info-paragraph">
              Hello and welcome to my portfolio! My name is Celio Joaquim Cumba,
              and I am a junior front-end developer with a strong passion for
              creating stunning and functional websites. As a developer, I enjoy
              working on the front end of websites to bring ideas to life. I am
              dedicated to staying up-to-date with the latest web technologies
              and trends, and I am committed to providing the best possible user
              experience for every project I work on.
            </p>
            {/* Through this portfolio, I hope to showcase my skills and experience
            as a front-end developer and demonstrate my ability to create
            visually appealing, responsive, and accessible websites. */}
            <ul className="info-items">
              <li className="info-item">Hard Worker</li>
              <li className="info-item">Constant learner</li>
            </ul>
            <ul className="social-links">
              <li className="social-link">
                <a href="https://github.com/CelioJoaquimCumba">
                  <BsGithub />
                </a>
              </li>
              <li className="social-link">
                <a href="https://www.linkedin.com/in/celio-cumba/?">
                  <BsLinkedin />
                </a>
              </li>
              <li className="social-link">
                <a href="https://www.instagram.com/celio.cumba/">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </CodeTag>
      </header>
    );
}

export default Header;