import { useState } from 'react'
import { PLANS, PRICING_ADDONS, PRICING_INCLUDED, whatsAppLink } from './copy.js'
import { Arrow, Check } from '../components/Icons.jsx'

const pkr = (n) => n.toLocaleString('en-PK')

export default function HomePricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="hp-sec hp-price" id="pricing">
      <div className="hp-shell">
        <div className="hp-head hp-head--center hp-reveal">
          <p className="hp-label">Pricing</p>
          <h2>Four plans. One lead record.</h2>
          <p>
            Start with the floor you have and move up as it grows. Every plan runs the same lead
            record, routing and SLA clock.
          </p>

          <div className="hp-price__toggle">
            <div className="hp-priceSwitch" role="group" aria-label="Billing period">
              <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>
                Monthly
              </button>
              <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>
                Annual
                <em>Save 20%</em>
              </button>
            </div>
          </div>
        </div>

        <div className="hp-price__grid">
          {PLANS.map((p, i) => {
            const price = annual ? Math.round(p.monthly * 0.8) : p.monthly
            const yearly = Math.round(p.monthly * 12 * 0.8)
            const message = annual
              ? `Hi Estate Centric, I'd like the ${p.name} plan on annual billing (PKR ${pkr(price)}/month, billed PKR ${pkr(yearly)}/year).`
              : `Hi Estate Centric, I'd like the ${p.name} plan (PKR ${pkr(p.monthly)}/month).`

            return (
              <article
                key={p.id}
                className={`hp-priceCard hp-reveal${p.popular ? ' hp-priceCard--pop' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {p.popular && <span className="hp-priceCard__flag">Most popular</span>}

                <h3>{p.name}</h3>
                <p className="hp-priceCard__tag">{p.tagline}</p>

                <p className="hp-priceCard__price">
                  <span>PKR</span>
                  <b>{pkr(price)}</b>
                  <span>/mo</span>
                </p>
                <p className="hp-priceCard__bill">
                  {annual ? `PKR ${pkr(yearly)}/yr · save 20%` : 'Billed monthly'}
                </p>

                <ul className="hp-priceCard__list">
                  {p.points.map((point) => (
                    <li key={point}>
                      <span className="hp-priceCard__tick" aria-hidden="true">
                        <Check width="10" height="10" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="hp-priceCard__addons">
                  <p>{p.allIncluded ? 'All services included' : 'Available add-ons'}</p>
                  <ul>
                    {(p.allIncluded ? PRICING_INCLUDED : PRICING_ADDONS).map((a) => (
                      <li key={a.label ?? a}>
                        <span>{a.label ?? a}</span>
                        <b className={p.allIncluded ? 'is-free' : undefined}>
                          {p.allIncluded ? 'Included' : a.price}
                        </b>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  className={`hp-btn hp-priceCard__cta ${
                    p.popular ? 'hp-btn--white' : 'hp-btn--line'
                  }`}
                  href={whatsAppLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    p.allIncluded
                      ? 'Talk to sales about the Agency plan'
                      : `Select the ${p.name} plan`
                  }
                >
                  {p.allIncluded ? 'Talk to sales' : 'Select plan'}
                  <Arrow />
                </a>
              </article>
            )
          })}
        </div>

        <p className="hp-price__foot">
          All prices in PKR, exclusive of applicable sales tax. Annual billing is charged once and
          saves 20%. Users, branches, projects and units are capped per plan; add more without
          changing plans.
        </p>
      </div>
    </section>
  )
}
