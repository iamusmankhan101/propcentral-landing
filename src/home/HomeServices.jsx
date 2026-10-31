// The features section's opening: five flows, each on a CSS-built phone, in a
// strip that scrolls without end. The figures follow the dashboard in the hero
// (142 open leads, 18 visits, Rs 7.4M collected) so the page tells one story.

const RINGS = [0, 1, 2, 3, 4]

function Rings({ className }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      {RINGS.map((i) => (
        <circle key={i} cx="200" cy="200" r={70 + i * 32} stroke="currentColor" strokeWidth="1" />
      ))}
    </svg>
  )
}

function StatusBar() {
  return (
    <div className="hp-phone__status" aria-hidden="true">
      <span>9:41</span>
      <span className="hp-phone__notch" />
      <span className="hp-phone__sys">
        <i />
        <i />
        <b />
      </span>
    </div>
  )
}

function Row({ label, value, tone, dot }) {
  return (
    <div className={`hp-mrow${tone ? ` hp-mrow--${tone}` : ''}`}>
      <span>
        {dot && <i style={{ background: dot }} />}
        {label}
      </span>
      <b>{value}</b>
    </div>
  )
}

const LEADS = [
  ['AK', 'Ayesha Khan', 'Facebook · Gulberg', 'New', 'new'],
  ['BR', 'Bilal Raza', 'Walk-in · DHA', 'Contacted', 'contacted'],
  ['SN', 'Sana Noor', 'Instagram · Ad set B', 'Site visit', 'visit'],
  ['MH', 'M. Hamza', 'Website form', 'Negotiation', 'negotiation'],
]

function LeadsScreen() {
  return (
    <div className="hp-phone__screen">
      <StatusBar />
      <div className="hp-app__bar">
        <b>New leads</b>
        <span className="hp-app__pill">Today</span>
      </div>
      {LEADS.map(([initials, name, source, stage, tone]) => (
        <div className="hp-lead" key={name}>
          <span className="hp-ava">{initials}</span>
          <p>
            {name}
            <small>{source}</small>
          </p>
          <em className={`hp-tag hp-tag--${tone}`}>{stage}</em>
        </div>
      ))}
      <p className="hp-sent__note">Repeat enquiries attach to the open lead</p>
      <div className="hp-app__btn">Assign by rules</div>
    </div>
  )
}

const STAGES = [
  ['New', 42, 100],
  ['Contacted', 36, 86],
  ['Qualified', 28, 67],
  ['Site visit', 18, 43],
  ['Negotiation', 11, 26],
  ['Booked', 7, 17],
]

function PipelineScreen() {
  return (
    <div className="hp-phone__screen">
      <StatusBar />
      <div className="hp-app__bar">
        <b>Pipeline</b>
        <span className="hp-app__pill">142 open</span>
      </div>
      {STAGES.map(([name, n, pct]) => (
        <div className="hp-pstage" key={name}>
          <span>{name}</span>
          <em>{n}</em>
          <i>
            <b style={{ width: `${pct}%` }} />
          </i>
        </div>
      ))}
      <p className="hp-sent__note">Routed by source, city, project and load</p>
    </div>
  )
}

function VisitScreen() {
  return (
    <div className="hp-phone__screen hp-phone__screen--grey">
      <StatusBar />
      <div className="hp-sent">
        <span className="hp-sent__tick" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <b>Site visit verified</b>
        <small>Gulberg Heights · within 80 m</small>
      </div>
      <div className="hp-sent__card">
        <p className="hp-sent__title">Visit · V-2208</p>
        <Row label="Customer OTP" value="Verified" />
        <Row label="Agent" value="Hamza R." />
        <Row label="Feedback" value="4.8 / 5" />
        <Row label="Next follow-up" value="2 Nov" tone="total" />
        <div className="hp-mchips">
          <span>GPS</span>
          <span>OTP</span>
          <span>Photos</span>
        </div>
        <div className="hp-app__btn">Log offer</div>
      </div>
    </div>
  )
}

function LeadScreen() {
  return (
    <div className="hp-phone__screen">
      <StatusBar />
      <div className="hp-app__bar hp-app__bar--center">
        <span aria-hidden="true">‹</span>
        <b>Lead 360</b>
        <span aria-hidden="true">⋮</span>
      </div>
      <div className="hp-lcard">
        <div className="hp-lcard__top">
          <small>Open lead</small>
          <span>Gulberg Heights</span>
        </div>
        <p className="hp-lcard__pts">Rs 8.5M</p>
        <small className="hp-lcard__sub">Budget · 3-bed apartment</small>
        <div className="hp-lcard__foot">
          <span>Ayesha Khan</span>
          <span>18 days</span>
        </div>
      </div>
      <div className="hp-lstats">
        <div>
          <small>Calls</small>
          <b>6</b>
        </div>
        <div>
          <small>Visits</small>
          <b>2</b>
        </div>
        <div>
          <small>Offers</small>
          <b>1</b>
        </div>
      </div>
      <div className="hp-lnext">
        <small>Next follow-up</small>
        <b>Tomorrow · 10:30</b>
        <span aria-hidden="true">
          <i style={{ width: '72%' }} />
        </span>
      </div>
      <p className="hp-sent__note">Every call, visit and note on one timeline</p>
    </div>
  )
}

function CollectionsScreen() {
  return (
    <div className="hp-phone__screen hp-phone__screen--grey">
      <StatusBar />
      <div className="hp-sent__card">
        <p className="hp-mhead">
          Collections <span>October</span>
        </p>
        <p className="hp-mbig">Rs 9.6M</p>
        <Row label="Collected this month" value="75%" dot="#16a34a" />
        <Row label="Overdue · 23 accounts" value="Rs 1.2M" dot="#dc2626" />
        <Row label="Next installment" value="3 Nov" />
        <div className="hp-mchips">
          <span>Receipt</span>
          <span>Ledger</span>
          <span>Portal</span>
        </div>
        <div className="hp-app__btn">Open ledger</div>
      </div>
      <p className="hp-sent__note">Payments apply to the oldest installment first</p>
    </div>
  )
}

const FEATURES = [
  {
    title: ['Every enquiry', 'lands in one inbox'],
    body: 'Facebook and Instagram lead ads, website forms and walk-ins, with duplicates attached to the open lead.',
    Screen: LeadsScreen,
  },
  {
    title: ['A pipeline the', 'floor can trust'],
    body: 'Rules assign by source, city, project and budget, then respect capacity and availability.',
    Screen: PipelineScreen,
  },
  {
    title: ['A site visit', 'you can prove'],
    body: 'GPS radius check-in, a customer OTP and mandatory feedback before the visit can close.',
    Screen: VisitScreen,
  },
  {
    title: ['One lead,', 'the whole story'],
    body: 'Calls, visits, offers and notes on one timeline, with the next follow-up always dated.',
    Screen: LeadScreen,
  },
  {
    title: ['Collections that', 'know the plan'],
    body: 'Plans, installments and receipts, with every payment applied oldest-first and overdue marked.',
    Screen: CollectionsScreen,
  },
]

// One loop is the features twice over, alternating bottom/top by position.
// With an odd number of features that puts each one in both orientations, and
// an even-length loop keeps the alternation unbroken across the seam.
const LOOP = [...FEATURES, ...FEATURES].map((f, i) => ({
  ...f,
  place: i % 2 ? 'top' : 'bottom',
  repeat: i >= FEATURES.length,
}))

function Card({ title, body, Screen, place, hidden }) {
  return (
    <article className={`hp-svcCard hp-svcCard--${place}`} aria-hidden={hidden || undefined}>
      <div className="hp-svcCard__copy">
        <h3>
          {title[0]}
          <br />
          {title[1]}
        </h3>
        <p>{body}</p>
      </div>
      <div className="hp-svcCard__stage">
        <Rings className="hp-svcCard__rings" />
        <div className="hp-phone">
          <Screen />
        </div>
      </div>
    </article>
  )
}

// The dark opening block of the Features section: its heading (passed in as
// children) over the strip. The strip is rendered twice and slid by exactly one
// copy's width, so the loop never jumps. Only the first pass through the five
// features is exposed to assistive tech; every repeat is aria-hidden.
export default function HomeServices({ children }) {
  return (
    <div className="hp-svcWrap">
      <div className="hp-svc">
        <Rings className="hp-svc__arcs" />

        <div className="hp-svc__head hp-reveal">{children}</div>

        <div className="hp-svc__rail hp-reveal">
          <div className="hp-svc__track">
            {[0, 1].map((copy) => (
              <div className="hp-svc__set" key={copy}>
                {LOOP.map((c, i) => (
                  <Card key={i} {...c} hidden={copy > 0 || c.repeat} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
