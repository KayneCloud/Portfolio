import './ContactTerminal.css'
import { useEffect, useRef, useState } from 'react'

const ACCESS_KEY = '53f51a52-8c60-41ca-8c8d-65be3cfa2619'
const PROMPT = 'PS C:\\Contact> '

// each question, and what the terminal says when the answer is valid
const STEPS = [
  { key: 'name', ask: 'Enter-your-name: ', done: (v) => `Name set to '${v}'.` },
  { key: 'email', ask: 'Enter-your-email: ', done: (v) => `Email address validated: ${v}` },
  { key: 'message', ask: 'Enter-your-message: ', done: (v) => `Message saved (${v.length} characters).` },
  { key: 'confirm', ask: 'Send this message? [Y/N]: ' },
]

function ContactTerminal() {
  const [lines, setLines] = useState([])      // everything already printed
  const [step, setStep] = useState(0)         // which question we are on
  const [answers, setAnswers] = useState({})  // { name, email, message }
  const [value, setValue] = useState('')      // what is being typed right now
  const [sending, setSending] = useState(false)
  const inputRef = useRef(null)
  const bodyRef = useRef(null)

  // after every new line: scroll to the bottom and put the cursor back
  useEffect(() => {
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    if (lines.length > 0) inputRef.current?.focus()
  }, [lines])

  function print(...newLines) {
    setLines((prev) => [...prev, ...newLines])
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      submit(value)
    }
  }

  function submit(raw) {
    const answer = raw.trim()
    const current = STEPS[step]
    setValue('')

    // after the message is sent: just an empty prompt, like a real terminal
    if (!current) {
      print({ type: 'input', prompt: PROMPT, text: raw })
      return
    }

    const echo = { type: 'input', prompt: PROMPT + current.ask, text: raw }

    if (current.key === 'confirm') {
      const choice = answer.toLowerCase()
      if (choice === 'y') {
        print(echo, { type: 'dim', text: 'Sending...' })
        send()
      } else if (choice === 'n') {
        print(echo, { type: 'dim', text: 'Message cancelled. Starting again...' }, { type: 'blank' })
        setAnswers({})
        setStep(0)
      } else {
        print(echo, { type: 'error', text: 'Please answer Y or N.' })
      }
      return
    }

    if (!answer) {
      print(echo, { type: 'error', text: 'Error: this field cannot be empty.' })
      return
    }
    if (current.key === 'email' && !/^\S+@\S+\.\S+$/.test(answer)) {
      print(echo, { type: 'error', text: 'Error: please enter a valid email address.' })
      return
    }

    setAnswers((prev) => ({ ...prev, [current.key]: answer }))
    print(echo, { type: 'ok', text: current.done(answer) })
    setStep(step + 1)
  }

  // sends the answers to your email through web3forms (same service as before)
  async function send() {
    setSending(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'New message from my portfolio',
          name: answers.name,
          email: answers.email,
          message: answers.message,
        }),
      })
      const result = await response.json()

      if (result.success) {
        print({ type: 'good', text: `Message sent. Thank you, ${answers.name}! I will reply soon.` }, { type: 'blank' })
        setAnswers({})
        setStep(STEPS.length)
      } else {
        print({ type: 'error', text: 'Error: the message could not be sent. Answer Y to try again.' })
      }
    } catch {
      print({ type: 'error', text: 'Error: no connection. Answer Y to try again.' })
    }
    setSending(false)
  }

  // clicking anywhere in the terminal puts the cursor in the current line
  function focusInput(event) {
    if (!event.target.closest('button')) inputRef.current?.focus()
  }

  const current = STEPS[step]

  return (
    <div className="term" onClick={focusInput}>
      <div className="term-bar" aria-hidden="true">
        <span className="term-tab">
          <span className="term-tab-icon">&gt;_</span>
          Contact Shell
          <span className="term-tab-x">✕</span>
        </span>
        <span className="term-bar-btns">
          <span>+</span>
          <span className="term-sep"></span>
          <span>⌄</span>
        </span>
        <span className="term-win">
          <span>—</span>
          <span>☐</span>
          <span>✕</span>
        </span>
      </div>

      <div className="term-body" ref={bodyRef} aria-live="polite">
        <p>Kayne Shaw Contact Shell</p>
        <p className="term-dim">Type your answer and press Enter.</p>
        <p className="term-blank">&nbsp;</p>

        {lines.map((line, index) => {
          if (line.type === 'input') {
            return <p key={index}>{line.prompt}<span className="term-typed">{line.text}</span></p>
          }
          if (line.type === 'ok') {
            return <p key={index}><span className="term-good">[OK] </span><span className="term-dim">{line.text}</span></p>
          }
          return <p key={index} className={'term-' + line.type}>{line.text || '\u00A0'}</p>
        })}

        {!sending && (
          <div className="term-row">
            <span className="term-prompt">{PROMPT + (current ? current.ask : '')}</span>

            {current?.key === 'confirm' && (
              <span className="term-yn-wrap">
                <button className="term-yn" type="button" onClick={() => submit('Y')}>Y</button>
                <button className="term-yn" type="button" onClick={() => submit('N')}>N</button>
              </span>
            )}

            <span className="term-live">
              <span className="term-mirror" aria-hidden="true">{value}</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
                aria-label={current ? current.ask : 'Terminal'}
                autoComplete="off"
                spellCheck="false"
              />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactTerminal
