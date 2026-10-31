import { START_STEPS, whatsAppLink } from './copy.js'
import { Arrow, Check } from '../components/Icons.jsx'

export default function HomeStart() {
  return (
    <section className="hp-sec" id="start">
      <div className="hp-shell">
        <div className="hp-head hp-reveal">
          <p className="hp-label">Getting started</p>
          <h2 style={{ marginTop: 12 }}>Live in a week, not a quarter.</h2>
          <p>
            Your projects, price list and lead sheet go in first. The sales floor follows the same
            afternoon.
          </p>
        </div>

        <div className="hp-start">
          <ol className="hp-steps">
            {START_STEPS.map((s, i) => (
              <li className="hp-step hp-reveal" key={s.num} style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="hp-step__num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul className="hp-step__chips">
                    {s.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <aside className="hp-startCard hp-reveal">
            <p className="hp-label">Walkthrough</p>
            <h3>See it on your own pipeline.</h3>
            <p>
              A 30-minute demo on a live dataset. Bring a lead list and we will import it before
              the call.
            </p>
            <ul className="hp-startCard__list">
              <li>
                <Check width="12" height="12" />
                Your projects and price list
              </li>
              <li>
                <Check width="12" height="12" />
                Routing and SLA rules for your floor
              </li>
              <li>
                <Check width="12" height="12" />
                Collections and commission setup
              </li>
            </ul>
            <a
              className="hp-btn hp-btn--white hp-btn--lg"
              href={whatsAppLink("Hi Prop Central, I'd like a quote for our team and projects.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
              <Arrow />
            </a>
            <p className="hp-startCard__note">
              Plans start at PKR 1,999/mo. Pick one on the <a href="#pricing">pricing</a> section,
              or ask for a walkthrough first.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
