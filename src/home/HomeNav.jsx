import { useEffect, useState } from 'react'
import { NAV, whatsAppLink } from './copy.js'
import { FEATURES } from '../data.js'
import { Arrow, FeatureIcon } from '../components/Icons.jsx'

const DEMO_LINK = whatsAppLink("Hi Estate Centric, I'd like to book a demo of the CRM.")

// The Features mega-menu: opens on hover or keyboard focus (CSS :focus-within),
// and the trigger itself still links to the section for touch.
function FeaturesMenu({ href, active }) {
  return (
    <div className={`hp-drop${active ? ' is-on' : ''}`}>
      <a className="hp-drop__trigger" href={href} aria-haspopup="true">
        Features
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <div className="hp-drop__panel">
        <div className="hp-drop__intro">
          <p className="hp-label">Features</p>
          <h3>Nine modules on one lead record</h3>
          <p>Capture, assignment, visits, inventory, collections and commission all read the same data.</p>
          <a href="#platform">
            Explore all
            <Arrow />
          </a>
        </div>

        <ul className="hp-drop__grid">
          {FEATURES.map((f) => (
            <li key={f.title}>
              <a className="hp-drop__item" href="#platform">
                <span className="hp-drop__icon">
                  <FeatureIcon name={f.icon} />
                </span>
                <span>
                  <b>{f.title}</b>
                  <small>{f.tags.join(' · ')}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Brand({ footer }) {
  return (
    <span className={`hp-brand${footer ? ' hp-brand--foot' : ''}`}>
      <img src="/estate-centric-logo.png" width="895" height="241" alt="Estate Centric" />
    </span>
  )
}

export default function HomeNav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const ids = ['platform', 'tour', 'pricing', 'start']
    const onScroll = () => {
      setStuck(window.scrollY > 24)
      let current = '#top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) current = `#${id}`
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the panel on Escape, and when the desktop layout takes over.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 981px)')
    const onChange = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  return (
    <header className={`hp-nav${stuck ? ' hp-nav--stuck' : ''}${open ? ' hp-nav--open' : ''}`}>
      <div className="hp-shell">
        <div className="hp-nav__row">
          <a className="hp-nav__mark" href="#top" aria-label="Estate Centric, back to top">
            <Brand />
          </a>

          <nav className="hp-nav__links" aria-label="Primary">
            {NAV.map((l) =>
              l.label === 'Features' ? (
                <FeaturesMenu key={l.href} href={l.href} active={active === l.href} />
              ) : (
                <a key={l.href} href={l.href} className={active === l.href ? 'is-on' : undefined}>
                  {l.label}
                </a>
              ),
            )}
          </nav>

          <div className="hp-nav__end">
            <a className="hp-btn hp-btn--line hp-btn--sm" href={DEMO_LINK} target="_blank" rel="noopener noreferrer">
              Book a demo on WhatsApp
            </a>
            <a className="hp-btn hp-btn--orange hp-btn--sm" href="#pricing">
              Get started
            </a>
            <button
              className={`hp-burger${open ? ' hp-burger--on' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>

        <div className="hp-nav__panel">
          <div>
            <nav className="hp-nav__panelInner" aria-label="Mobile">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                Book a demo on WhatsApp
              </a>
              <a href="#pricing" onClick={() => setOpen(false)}>
                Get started
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
