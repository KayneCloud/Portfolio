import './Header.css'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="logo" aria-label="Kayne Shaw, home">KS</Link>
        <ul>
          <li><NavLink to="/" className="link">Home</NavLink></li>
          <li><NavLink to="/about" className="link">About</NavLink></li>
          <li><NavLink to="/projects" className="link">Projects</NavLink></li>
          <li><NavLink to="/contact" className="link">Contact</NavLink></li>
          <li className="hide-sm">
            <a href={import.meta.env.BASE_URL + 'cv-kayne-shaw.pdf'} className="link cv" download>CV ↓</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
