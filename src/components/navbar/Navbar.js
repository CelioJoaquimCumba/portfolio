import './Navbar.scss'
import { NavDropdown } from 'react-bootstrap'
function Navbar() {
    return (
      <nav className="nav-bar">
        <p className="nav-title">Celio Cumba</p>
        <ul className="nav-items">
          {[
            "summary",
            "about me",
            "contact  me",
          ].map((item, index) => (
            <li className="nav-item" key={index}>
              <a className='nav-link' href={`./#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <button className="nav-button">Resume</button>
        <NavDropdown className="nav-menu" title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item className="nav-item" href="./#summary">
            Summary
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-item" href="./#about">
            About me
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-item" href="./#contact">
            Contact me
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="nav-item" href="/resume">
            Resume
          </NavDropdown.Item>
        </NavDropdown>
      </nav>
    );
}

export default Navbar;