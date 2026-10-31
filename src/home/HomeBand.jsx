import { BAND_STATS, whatsAppLink } from './copy.js'
import { Arrow, Check } from '../components/Icons.jsx'

// What one captured lead touches — the claim in the headline, shown. These are
// the records a single enquiry writes in the CRM.
const FLOW = [
  ['Lead captured', 'Ayesha Khan · Facebook · Gulberg', 'now'],
  ['Routing rule fired', 'Hamza R. · under capacity', '1s'],
  ['Follow-up dated', 'Tomorrow · 10:30', 'now'],
  ['Site visit verified', 'GPS + OTP · feedback logged', 'now'],
  ['Offer on a unit', 'A-204 · Rs 8.5M', '2s'],
  ['Commission accrued', '1% agent · 2% dealer', 'now'],
]

export default function HomeBand() {
  return (
    <section className="hp-bandWrap" id="why">
      <div className="hp-band">
        <div className="hp-band__in">
          <div className="hp-band__grid">
            <div>
              <p className="hp-band__eyebrow hp-reveal">One lead, end to end</p>

              <h2 className="hp-band__title hp-reveal">
                Capture the lead. Everything else is already written.
              </h2>

              <p className="hp-band__sub hp-reveal">
                The assignment, the SLA clock, the visit, the offer, the booking and the commission
                all move on the same record. Nothing is typed twice, and nothing waits for the
                month-end sheet to be true.
              </p>

              <div className="hp-ctaRow hp-reveal" style={{ justifyContent: 'flex-start', marginTop: 26 }}>
                <a
                  className="hp-btn hp-btn--white hp-btn--lg"
                  href={whatsAppLink("Hi Estate Centric, I'd like to see the CRM running on our own leads.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it on your leads
                  <Arrow />
                </a>
              </div>
            </div>

            <div className="hp-flow hp-reveal">
              <div className="hp-flow__head">
                <b>Lead · Ayesha Khan</b>
                <span>12:04:22</span>
              </div>

              {FLOW.map(([title, meta, t]) => (
                <div className="hp-flow__row" key={title}>
                  <span className="hp-flow__tick" aria-hidden="true">
                    <Check width="12" height="12" />
                  </span>
                  <p>
                    {title}
                    <small>{meta}</small>
                  </p>
                  <em>{t}</em>
                </div>
              ))}

              <div className="hp-flow__foot">
                <span className="hp-flow__pulse" aria-hidden="true" />
                One timeline, audited from capture to receipt
              </div>
            </div>
          </div>

          <div className="hp-band__stats">
            {BAND_STATS.map(([figure, label], i) => (
              <div className="hp-band__stat hp-reveal" key={label} style={{ transitionDelay: `${i * 80}ms` }}>
                <b>{figure}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
