import { Arrow } from '../components/Icons.jsx'
import { whatsAppLink } from './copy.js'
import { MockApp, DashboardPanel } from './HomeMockups.jsx'

export default function HomeHero() {
  return (
    <section className="hp-hero" id="top">
      <span className="hp-hero__eyebrow hp-reveal">
        <i aria-hidden="true" />
        Built for developers, dealers and sales floors
      </span>

      <h1 className="hp-hero__title hp-reveal">
        Every Lead, Every Plot,{' '}
        <br />
        <em>Every Payment.</em>
      </h1>

      <p className="hp-hero__sub hp-reveal">
        Estate Centric is the real estate CRM for developers, dealers and sales teams. Capture the
        enquiry, assign it by rule, prove the site visit and collect the installment, from one
        screen.
      </p>

      <div className="hp-hero__cta hp-reveal">
        <a
          className="hp-btn hp-btn--orange hp-btn--lg"
          href={whatsAppLink("Hi Estate Centric, I'd like to book a demo of the CRM.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a demo on WhatsApp
          <Arrow />
        </a>
        <a className="hp-btn hp-btn--line hp-btn--lg" href="#platform">
          See the platform
        </a>
      </div>

      <p className="hp-hero__note hp-reveal">
        <span>30-minute walkthrough</span>
        <span>Your lead list imported before the call</span>
        <span>No credit card to start</span>
      </p>

      <figure className="hp-heroShot">
        <div className="hp-heroShot__frame">
          <div
            role="img"
            aria-label="Estate Centric dashboard preview: 142 open leads, a 4 minute 12 second median first response, 18 site visits and Rs 7.4 million collected, with the pipeline by stage and today's follow-ups"
          >
            <MockApp url="app.estatecentric.pk/dashboard" live="Live pipeline">
              <DashboardPanel />
            </MockApp>
          </div>
        </div>
      </figure>
    </section>
  )
}
