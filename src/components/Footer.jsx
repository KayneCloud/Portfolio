import './Footer.css'

function Footer({ lang }) {
  return (
    <footer className="site-footer">
      <p>© 2026 Kayne Shaw. {lang === 'fr' ? 'Réalisé avec React.' : 'Built with React.'}</p>
    </footer>
  )
}

export default Footer
