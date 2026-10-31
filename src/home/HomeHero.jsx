import { Arrow, FeatureIcon } from '../components/Icons.jsx'
import { whatsAppLink } from './copy.js'
import { MockApp, DashboardPanel, MiniLeads, MiniInventory } from './HomeMockups.jsx'

// The stages a lead moves through, strung along an arc above the app. `t` is
// the position along the curve, left to right; the centre is the one record
// every stage writes to.
const RAIL = [
  { t: 0.05, icon: 'lead', label: 'New' },
  { t: 0.2, icon: 'phone', label: 'Contacted' },
  { t: 0.35, icon: 'pin', label: 'Site visit' },
  { t: 0.5, icon: 'trail', label: 'Lead 360', hub: true },
  { t: 0.65, icon: 'ledger', label: 'Negotiation' },
  { t: 0.8, icon: 'star', label: 'Booked' },
  { t: 0.95, icon: 'cash', label: 'Sold' },
]

// Height of the arc path below at t, as a % of its 120-unit viewBox, so the
// bubbles sit exactly on the drawn line at any width.
const arcTop = (t) => ((120 - 360 * t + 360 * t * t) / 120) * 100

export default function HomeHero() {
  return (
    <section className="hp-hero" id="top">
      <h1 className="hp-hero__title">
        Every Lead, Every&nbsp;Plot, <br />
        <em>Every Payment.</em>
      </h1>

      <p className="hp-hero__sub">
        Prop Central is the real estate CRM for developers, dealers and sales teams. Capture the
        enquiry, assign it by rule, prove the site visit and collect the installment, from one
        screen.
      </p>

      <div className="hp-hero__cta">
        <a
          className="hp-btn hp-btn--orange hp-btn--lg"
          href={whatsAppLink("Hi Prop Central, I'd like to book a demo of the CRM.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a demo
          <Arrow />
        </a>
        <a className="hp-btn hp-btn--line hp-btn--lg" href="#platform">
          See the platform
        </a>
      </div>

      <div className="hp-rail">
        <svg className="hp-rail__line" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 120 Q500 -60 1000 120" />
        </svg>
        <ul aria-label="How a lead moves through Prop Central">
          {RAIL.map((r) => (
            <li
              key={r.label}
              className={`hp-rail__dot${r.hub ? ' hp-rail__dot--hub' : ''}`}
              style={{ left: `${r.t * 100}%`, top: `${arcTop(r.t)}%` }}
            >
              <FeatureIcon name={r.icon} />
              <span>{r.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hp-stage">
        <div className="hp-stage__side hp-stage__side--l" aria-hidden="true">
          <MiniLeads />
        </div>
        <div className="hp-stage__side hp-stage__side--r" aria-hidden="true">
          <MiniInventory />
        </div>

        <figure className="hp-stage__main">
          <div
            className="hp-stage__screen"
            role="img"
            aria-label="Prop Central dashboard preview: 142 open leads, a 4 minute 12 second median first response, 18 site visits and Rs 7.4 million collected, with the pipeline by stage and today's follow-ups"
          >
            <MockApp url="app.propcentral.pk/dashboard" live="Live pipeline">
              <DashboardPanel />
            </MockApp>
          </div>
        </figure>
      </div>
    </section>
  )
}
