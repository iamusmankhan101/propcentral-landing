import { Arrow, FeatureIcon } from '../components/Icons.jsx'

const INBOX = [
  ['AK', 'Ayesha Khan', 'Facebook · Gulberg Heights', 'New'],
  ['BA', 'Bilal Ahmed', 'Website form · DHA Phase 6', 'Routed'],
  ['SM', 'Sana Malik', 'Walk-in · Model home', 'Visit'],
  ['UT', 'Usman Tariq', 'Instagram · Johar Town', 'New'],
]

const UNITS = [
  ['A-201', 'is-sold'],
  ['A-202', ''],
  ['A-203', ''],
  ['A-204', 'is-booked'],
  ['A-205', ''],
  ['A-206', 'is-hold'],
  ['A-207', ''],
  ['A-208', ''],
  ['A-301', 'is-booked'],
  ['A-302', ''],
  ['A-303', 'is-sold'],
  ['A-304', ''],
]

export default function HomeFeatures() {
  return (
    <section className="hp-sec hp-challenge" id="features">
      <div className="hp-shell">
        <div className="hp-challenge__top">
          <div className="hp-reveal">
            <p className="hp-label">Where it breaks</p>
            <h2>Your leads live in five places. None of them know about each other.</h2>
          </div>

          <div className="hp-challenge__aside hp-reveal">
            <p>
              A Facebook form here, a WhatsApp thread there, the site-visit register on paper and
              the ledger in Excel. By the time the month closes, nobody agrees on the number.
            </p>
            <a className="hp-challenge__link" href="#platform">
              See how one record fixes it
              <span aria-hidden="true">
                <Arrow />
              </span>
            </a>
          </div>
        </div>

        <div className="hp-challenge__grid">
          <article className="hp-ccard hp-ccard--light hp-reveal">
            <span className="hp-ccard__icon">
              <FeatureIcon name="lead" />
            </span>
            <h3>Four doors, one queue</h3>
            <p>
              Facebook and Instagram lead ads, website forms and walk-ins at the desk all land in
              the same queue, campaign and ad set intact.
            </p>

            <div className="hp-ccard__viz">
              <div className="hp-vizInbox">
                {INBOX.map(([initials, name, meta, chip]) => (
                  <div className="hp-vizInbox__row" key={name}>
                    <span className="hp-vizInbox__ava">{initials}</span>
                    <p>
                      {name}
                      <small>{meta}</small>
                    </p>
                    <em>{chip}</em>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article
            className="hp-ccard hp-ccard--hot hp-reveal"
            style={{ transitionDelay: '80ms' }}
          >
            <span className="hp-ccard__icon">
              <FeatureIcon name="clock" />
            </span>
            <h3>The clock starts at assignment</h3>
            <p>
              First contact is counted in working minutes. At 1×, 2× and 3× the lead escalates,
              then reassigns to the next agent with capacity.
            </p>

            <div className="hp-ccard__viz">
              <div className="hp-vizSla">
                <div className="hp-vizSla__top">
                  <small>Median first response</small>
                  <b>4m 12s</b>
                </div>
                <div className="hp-vizSla__bar" aria-hidden="true">
                  <i />
                </div>
                <div className="hp-vizSla__steps">
                  <span>
                    Escalation 1 <b>15 min</b>
                  </span>
                  <span>
                    Escalation 2 <b>30 min</b>
                  </span>
                  <span>
                    Reassigned <b>45 min</b>
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article
            className="hp-ccard hp-ccard--pale hp-reveal"
            style={{ transitionDelay: '160ms' }}
          >
            <span className="hp-ccard__icon">
              <FeatureIcon name="building" />
            </span>
            <h3>Every unit has a status</h3>
            <p>
              Holds, bookings and sold plots move the moment a deal moves, always against the
              current price-list version.
            </p>

            <div className="hp-ccard__viz">
              <div className="hp-vizUnits">
                <div className="hp-vizUnits__head">
                  <b>Gulberg Heights</b>
                  <span>Tower A · 24 units</span>
                </div>
                <div className="hp-vizUnits__grid">
                  {UNITS.map(([label, state]) => (
                    <span className={state || undefined} key={label}>
                      {label}
                    </span>
                  ))}
                </div>
                <div className="hp-vizUnits__foot">
                  <span>Updated 12:04</span>
                  <em>GPS verified</em>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
