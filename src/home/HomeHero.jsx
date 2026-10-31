import { Arrow } from '../components/Icons.jsx'
import { whatsAppLink } from './copy.js'
import AppShot from './AppShot.jsx'

export default function HomeHero() {
  return (
    <section className="hp-hero" id="top">
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
          <AppShot
            src="/app-dashboard.png"
            url="app.estatecentric.pk/dashboard"
            live="Live app"
            width={1800}
            height={1013}
            eager
            alt="Estate Centric dashboard showing 6 total leads, 33% within SLA and 2 booked, with agent load, pipeline composition and overdue follow-ups"
          />
        </div>
      </figure>
    </section>
  )
}
