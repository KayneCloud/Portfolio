import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <nav className="home-nav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header