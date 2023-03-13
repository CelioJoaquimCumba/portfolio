import './Navbar.scss'
function Navbar() {
    return ( 
        <nav className="nav-bar">
            <p className="nav-title">Celio Cumba</p>
            <ul className="nav-items">
                <li className="nav-item">Summary</li>
                <li className="nav-item">About me</li>
                <li className="nav-item">Personal</li>
                <li className="nav-item">Professional</li>
                <li className="nav-item">Contact me</li>
            </ul>
            <button className="nav-button">Resume</button>
        </nav>
     );
}

export default Navbar;