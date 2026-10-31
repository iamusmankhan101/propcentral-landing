import { FOOTER } from '../data.js'
import { whatsAppLink } from './copy.js'
import { Brand } from './HomeNav.jsx'

const CONTACT = whatsAppLink("Hi Prop Central, I'd like to talk about the CRM.")

export default function HomeFooter() {
  return (
    <footer className="hp-foot">
      <div className="hp-shell">
        <div className="hp-foot__top">
          <div>
            <a className="hp-nav__mark" href="#top" aria-label="Prop Central, back to top">
              <Brand footer />
            </a>
            <p className="hp-foot__blurb">
              The real estate CRM for developers, dealers and sales teams. Leads, inventory,
              collections and commission on one login.
            </p>
          </div>

          {FOOTER.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href === 'wa' ? CONTACT : href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hp-foot__rule" aria-hidden="true" />

        <div className="hp-foot__base">
          <span>© {new Date().getFullYear()} Prop Central</span>
          <span>Lahore · Karachi · Islamabad</span>
        </div>
      </div>
    </footer>
  )
}
