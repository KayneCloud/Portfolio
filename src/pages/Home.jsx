import './Home.css'

function Home() {
  return (
    <main className='home'>
      <img src={import.meta.env.BASE_URL + 'assets/pp.png'}
      className='profile-photo'
      alt='Photo of Kayne SHAW'
      />
      <h1>Kayne SHAW</h1>
      <p className='catchphrase'>
        Étudiant en 3ᵉ année d'Epitech - À la recherche d'une alternance en Cloud / Cybersécurité
      </p>
      <p>Étudiant en 3e année à Epitech Marseille (Pré-MSc Informatique), je recherche une alternance de 33 mois, de janvier 2027 à septembre 2029, dans le Cloud ou la cybersécurité. Certifié AWS Cloud Practitioner, je prépare la certification AWS Solutions Architect - Associate. Mon parcours associe les fondamentaux du développement, des systèmes et de l'algorithmique à des projets pratiques en Python et en développement web full-stack.</p>
    </main>
  )}

export default Home