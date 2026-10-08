import './Header.css'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="site-header">
      <nav className="home-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header