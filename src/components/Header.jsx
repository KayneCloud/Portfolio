import './Header.css'
import { Link, NavLink } from 'react-router'
import Flag from './Flag'

function Header({ lang, setLang }) {
    const fr = lang === 'fr'

    function switchLanguage() {
        setLang(fr ? 'en' : 'fr')
    }

    return (
        <header className="site-header">
            <nav className="nav" aria-label={fr ? 'Navigation principale' : 'Main navigation'}>
                <Link to="/" className="logo" aria-label={fr ? 'Kayne Shaw, accueil' : 'Kayne Shaw, home'}>KS</Link>
                <ul>
                    <li><NavLink to="/" className="link">{fr ? 'Accueil' : 'Home'}</NavLink></li>
                    <li><NavLink to="/resume" className="link">{fr ? 'Parcours' : 'Resume'}</NavLink></li>
                    <li><NavLink to="/projects" className="link">{fr ? 'Projets' : 'Projects'}</NavLink></li>
                    <li><NavLink to="/contact" className="link">Contact</NavLink></li>
                    <li>
                        <button
                            type="button"
                            className="link lang-toggle"
                            onClick={switchLanguage}
                            aria-label={fr ? 'Switch the site to English' : 'Passer le site en français'}
                        >
                            <Flag country={fr ? 'fr' : 'uk'} />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
