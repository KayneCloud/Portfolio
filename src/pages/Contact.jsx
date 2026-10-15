import './Contact.css'

function Contact() {
  return (
    <main className="contact">
      <h1>Contact</h1>
      <p className="contact-intro">
        Want to talk about a work-study position or a project? Send me a message below,
        or email me at <a href="mailto:kayne.shaw@epitech.eu">kayne.shaw@epitech.eu</a>.
      </p>

      <div className="terminal-window">
        <div className="terminal-titlebar" aria-hidden="true">
          <span>▣</span>
          <span>CONTACT FORM</span>
          <span className="terminal-controls">— □ ✕</span>
        </div>

        <div className="terminal-content">
          <p className="terminal-command">PS C:\Contact&gt; contact --new-message</p>

          <form className="terminal-form" action="https://api.web3forms.com/submit" method="post">
            <input type="hidden" name="access_key" value="53f51a52-8c60-41ca-8c8d-65be3cfa2619" />
            <input type="hidden" name="subject" value="New message from my portfolio" />

            <div className="terminal-field name-step">
              <label htmlFor="name">PS C:\Contact&gt; Enter-your-name:<span className="terminal-cursor" aria-hidden="true">_</span></label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
            </div>

            <div className="terminal-field email-step">
              <label htmlFor="email">PS C:\Contact&gt; Enter-your-email:<span className="terminal-cursor" aria-hidden="true">_</span></label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="your.email@example.com" required />
            </div>

            <div className="terminal-field message-step">
              <label htmlFor="message">PS C:\Contact&gt; Enter-your-message:<span className="terminal-cursor" aria-hidden="true">_</span></label>
              <textarea id="message" name="message" rows="3" placeholder="Write your message" required></textarea>
            </div>

            <div className="confirmation-step">
              <p className="terminal-confirmation">PS C:\Contact&gt; Message ready. Send it? [Y/N]:</p>
              <div className="terminal-confirm-buttons">
                <button className="terminal-submit" type="submit" aria-label="Yes, send the message">Y</button>
                <button className="terminal-cancel" type="reset" aria-label="No, clear the form">N</button>
              </div>
            </div>

            <p className="terminal-response">PS C:\Contact&gt; Waiting for input...</p>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact