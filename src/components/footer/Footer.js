import CodeTag from '../code-tags/CodeTag';
import './Footer.scss'
function Footer() {
    return (
      <footer id="footer">
        <CodeTag tag="footer" className={"footer"}>
          <p className="footer-caption">
            Designed and built by
            <b className="footer-highlight">
              <a
                href="https://www.linkedin.com/in/celio-cumba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Célio Joaquim Cumba
              </a>
            </b>
          </p>
          <p className="footer-caption">
            Inspired by
            <a
              href="https://brittanychiang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brittany Chiang
            </a>
          </p>
        </CodeTag>
      </footer>
    );
}

export default Footer;