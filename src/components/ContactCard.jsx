import './SkillCard.css'

function ContactCard() {
  return (
    <article className="card">
      <div className="card-title">
        <img src={import.meta.env.BASE_URL + 'assets/aboutimage.png'} className="card-icon" alt="" />
        <h2>Contact</h2>
      </div>
      <ul className="contact-list">
        <li><a href="mailto:kayne.shaw@epitech.eu">kayne.shaw@epitech.eu</a></li>
        <li><a href="tel:+33607868633">06 07 86 86 33</a></li>
        <li>Marseille / Mobile (driving licence)</li>
      </ul>

      <div className="card-title">
        <img src={import.meta.env.BASE_URL + 'assets/linkimage.png'} className="card-icon" alt="" />
        <h2>Links</h2>
      </div>
      <ul className="contact-list">
        <li><a href="https://www.linkedin.com/in/kayne-shaw-3bb96635a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/KayneCloud" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linktr.ee/kayneshaw" target="_blank" rel="noopener noreferrer">Linktree</a></li>
      </ul>
    </article>
  )
}

export default ContactCard