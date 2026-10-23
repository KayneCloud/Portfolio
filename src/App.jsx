import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import Background from './components/Background'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  // the site's language: 'en' or 'fr' (starts in English on every visit)
  const [lang, setLang] = useState('en')

  // tells the browser (and screen readers) which language the page is in
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Background />
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/resume" element={<About lang={lang} />} />
        <Route path="/projects" element={<Projects lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        {/* any other address (a typo, an old link) shows the Home page */}
        <Route path="*" element={<Home lang={lang} />} />
      </Routes>
      <Footer lang={lang} />
    </>
  )
}

export default App
