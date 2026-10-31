// Illustrative app previews, built in HTML and CSS rather than screenshots so
// the page stays sharp at any width. Every figure and label mirrors a real
// Estate Centric screen: dashboard, leads, inventory and collections.

const PIPELINE = [
  { name: 'New', n: 42, pct: 100 },
  { name: 'Contacted', n: 36, pct: 86 },
  { name: 'Qualified', n: 28, pct: 67 },
  { name: 'Site visit', n: 18, pct: 43 },
  { name: 'Negotiation', n: 11, pct: 26 },
  { name: 'Booked', n: 7, pct: 17 },
]

const FOLLOW_UPS = [
  ['AK', 'Ayesha Khan', 'Gulberg Heights · 3-bed', '10:30'],
  ['BR', 'Bilal Raza', 'DHA Phase 6 · plot', '11:15'],
  ['SN', 'Sana Noor', 'Site visit · Tower B', '13:00'],
  ['MH', 'M. Hamza', 'Offer follow-up', '15:45'],
]

const LEADS = [
  ['AK', 'Ayesha Khan', '0301 2345678', 'Facebook', 'Hamza R.', 'New', 'new', '4m'],
  ['BR', 'Bilal Raza', '0333 8890123', 'Walk-in', 'Sana N.', 'Contacted', 'contacted', '12m'],
  ['SN', 'Sana Noor', '0321 5567890', 'Instagram', 'Adeel K.', 'Site visit', 'visit', '18m'],
  ['MH', 'M. Hamza', '0345 1122334', 'Website', 'Hamza R.', 'Negotiation', 'negotiation', '2h'],
  ['ZA', 'Zara Ahmed', '0300 4455667', 'Facebook', 'Sana N.', 'Booked', 'booked', '—'],
  ['FR', 'Faraz Iqbal', '0312 7788990', 'Inbound API', 'Adeel K.', 'Contacted', 'contacted', '26m'],
]

const UNIT_STATUS = ['avail', 'hold', 'sold', 'avail', 'booked', 'avail', 'sold', 'hold']
const UNITS = Array.from({ length: 32 }, (_, i) => {
  const floor = 1 + Math.floor(i / 8)
  const num = i % 8 + 1
  return {
    id: `A-${floor}0${num}`,
    size: ['2 bed', '3 bed', '4 bed'][i % 3],
    status: UNIT_STATUS[(i + floor) % UNIT_STATUS.length],
  }
})

const VISITS = [
  ['SN', 'Sana Noor', 'Gulberg · Tower B', '13:00', 'Verified'],
  ['MH', 'M. Hamza', 'DHA 6 · plot 214', '15:45', 'Next'],
  ['FR', 'Faraz Iqbal', 'Bahria · C-102', '17:15', 'Next'],
]

const SOURCES = [
  ['Facebook', 46],
  ['Instagram', 22],
  ['Walk-in', 18],
  ['Inbound API', 14],
]

const COLLECTIONS = [
  ['Ayesha Khan', 'A-204 · Gulberg Heights', '28 Sep', 'Rs 450,000', 'overdue'],
  ['Bilal Raza', 'B-110 · DHA Phase 6', '02 Oct', 'Rs 375,000', 'overdue'],
  ['Sana Noor', 'A-307 · Gulberg Heights', '05 Oct', 'Rs 620,000', 'due'],
  ['M. Hamza', 'C-102 · Bahria Orchard', '09 Oct', 'Rs 290,000', 'due'],
  ['Zara Ahmed', 'A-108 · Gulberg Heights', '12 Oct', 'Rs 410,000', 'paid'],
]

function Kpi({ label, value, delta, tone }) {
  return (
    <div className="mk-kpi">
      <small>{label}</small>
      <b>{value}</b>
      {delta && <em className={tone}>{delta}</em>}
    </div>
  )
}

function PanelHead({ sub, title, pill }) {
  return (
    <div className="mk-head">
      <div>
        <span>{sub}</span>
        <b>{title}</b>
      </div>
      <span className="mk-pill">{pill}</span>
    </div>
  )
}

export function MockApp({ url, live, active = 0, children, className = '' }) {
  return (
    <div className={`mk ${className}`}>
      <div className="mk__bar">
        <span className="mk__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mk__url">{url}</span>
        {live && (
          <span className="mk__live">
            <i />
            {live}
          </span>
        )}
      </div>
      <div className="mk__app">
        <aside className="mk-rail" aria-hidden="true">
          <img src="/estate-mark.png" alt="" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`mk-rail__item${i === active ? ' is-on' : ''}`} />
          ))}
        </aside>
        <div className="mk-main">{children}</div>
      </div>
    </div>
  )
}

export function DashboardPanel() {
  return (
    <>
      <PanelHead sub="Saturday, 31 October · 9:12 AM" title="Dashboard" pill="All branches" />

      <div className="mk-kpis">
        <Kpi label="Open leads" value="142" delta="+18 today" tone="up" />
        <Kpi label="First response" value="4m 12s" delta="SLA 15m" />
        <Kpi label="Site visits" value="18" delta="6 tomorrow" />
        <Kpi label="Collected" value="Rs 7.4M" delta="92% of plan" tone="up" />
      </div>

      <div className="mk-split">
        <div className="mk-card">
          <header>
            <b>Pipeline</b>
            <small>142 open</small>
          </header>
          {PIPELINE.map((s) => (
            <div className="mk-funnel" key={s.name}>
              <span>{s.name}</span>
              <i>
                <b style={{ width: `${s.pct}%` }} />
              </i>
              <em>{s.n}</em>
            </div>
          ))}
        </div>

        <div className="mk-card">
          <header>
            <b>Follow-ups today</b>
            <small>9 due</small>
          </header>
          {FOLLOW_UPS.map(([initials, name, note, time]) => (
            <div className="mk-frow" key={name}>
              <span className="mk-ava">{initials}</span>
              <p>
                {name}
                <small>{note}</small>
              </p>
              <em>{time}</em>
            </div>
          ))}
        </div>
      </div>

      <div className="mk-split mk-split--low">
        <div className="mk-card">
          <header>
            <b>Site visits today</b>
            <small>18 booked</small>
          </header>
          {VISITS.map(([initials, name, project, time, state]) => (
            <div className="mk-frow" key={name}>
              <span className="mk-ava">{initials}</span>
              <p>
                {name}
                <small>{project}</small>
              </p>
              <em className={state === 'Verified' ? 'mk-state mk-state--ok' : 'mk-state'}>{state}</em>
              <em>{time}</em>
            </div>
          ))}
        </div>

        <div className="mk-card">
          <header>
            <b>Source mix</b>
            <small>This month</small>
          </header>
          {SOURCES.map(([name, pct]) => (
            <div className="mk-funnel" key={name}>
              <span>{name}</span>
              <i>
                <b style={{ width: `${pct}%` }} />
              </i>
              <em>{pct}%</em>
            </div>
          ))}
        </div>
      </div>

      <div className="mk-foot">
        <span>
          <i className="mk-dot mk-dot--up" /> 4 agents on the floor
        </span>
        <span>
          SLA breaches <b>0</b>
        </span>
        <span>
          Top source <b>Facebook · 46%</b>
        </span>
      </div>
    </>
  )
}

export function LeadsPanel() {
  return (
    <>
      <PanelHead sub="One queue, ranked by the response clock" title="Leads" pill="142 open" />

      <div className="mk-filters">
        <span className="on">All</span>
        <span>New</span>
        <span>Contacted</span>
        <span>Site visit</span>
        <span>Negotiation</span>
        <span>Booked</span>
      </div>

      <div className="mk-table mk-table--leads">
        <div className="mk-trow head">
          <span>Lead</span>
          <span>Source</span>
          <span>Agent</span>
          <span>Stage</span>
          <span>Response</span>
        </div>
        {LEADS.map(([initials, name, phone, source, agent, stage, tone, response]) => (
          <div className="mk-trow" key={name}>
            <span className="mk-leadcell">
              <span className="mk-ava">{initials}</span>
              <span>
                <b>{name}</b>
                <small>{phone}</small>
              </span>
            </span>
            <span>{source}</span>
            <span>{agent}</span>
            <span>
              <em className={`mk-chip mk-chip--${tone}`}>{stage}</em>
            </span>
            <span className="mk-mono">{response}</span>
          </div>
        ))}
      </div>

      <div className="mk-foot">
        <span>
          <i className="mk-dot mk-dot--up" /> 0 unassigned
        </span>
        <span>
          Duplicates attached <b>6</b>
        </span>
        <span>
          Oldest open <b>14 days</b>
        </span>
      </div>
    </>
  )
}

export function InventoryPanel() {
  return (
    <>
      <PanelHead sub="Tower A · 32 units" title="Inventory" pill="Gulberg Heights" />

      <div className="mk-legend">
        <span>
          <i style={{ background: '#c9ebd9' }} /> Available
        </span>
        <span>
          <i style={{ background: '#f8e5b7' }} /> On hold
        </span>
        <span>
          <i style={{ background: '#c9d9f7' }} /> Booked
        </span>
        <span>
          <i style={{ background: '#e6e2dd' }} /> Sold
        </span>
        <span className="mk-legend__end">Price list v4 · 1 Sep</span>
      </div>

      <div className="mk-units">
        {UNITS.map((u) => (
          <span className={`mk-unit is-${u.status}`} key={u.id}>
            <b>{u.id}</b>
            <small>{u.size}</small>
          </span>
        ))}
      </div>

      <div className="mk-foot">
        <span>
          Available <b>12</b>
        </span>
        <span>
          On hold <b>8</b>
        </span>
        <span>
          Booked <b>4</b>
        </span>
        <span>
          Sold <b>8</b>
        </span>
      </div>
    </>
  )
}

export function CollectionsPanel() {
  return (
    <>
      <PanelHead sub="October installments" title="Collections" pill="All projects" />

      <div className="mk-kpis mk-kpis--3">
        <Kpi label="Due this month" value="Rs 12.8M" delta="184 accounts" />
        <Kpi label="Collected" value="Rs 9.6M" delta="75% of due" tone="up" />
        <Kpi label="Overdue" value="Rs 1.2M" delta="23 accounts" tone="down" />
      </div>

      <div className="mk-table mk-table--plans">
        <div className="mk-trow mk-trow--plan head">
          <span>Customer</span>
          <span>Unit</span>
          <span>Due</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        {COLLECTIONS.map(([name, unit, due, amount, tone]) => (
          <div className="mk-trow mk-trow--plan" key={unit}>
            <span>
              <b>{name}</b>
            </span>
            <span>{unit}</span>
            <span>{due}</span>
            <span className="mk-mono">{amount}</span>
            <span>
              <em className={`mk-chip mk-chip--${tone}`}>{tone === 'due' ? 'Due' : tone === 'paid' ? 'Paid' : 'Overdue'}</em>
            </span>
          </div>
        ))}
      </div>

      <div className="mk-foot">
        <span>
          Receipts issued <b>61</b>
        </span>
        <span>
          Plans active <b>208</b>
        </span>
        <span>
          Portal shared <b>184</b>
        </span>
      </div>
    </>
  )
}

// --- compact panels fanned out behind the dashboard in the hero ------------
export function MiniLeads() {
  return (
    <div className="mk-mini">
      <div className="mk-mini__head">
        <b>Leads</b>
        <span>142 open</span>
      </div>
      {LEADS.slice(0, 4).map(([initials, name, , source, , stage, tone]) => (
        <div className="mk-mini__row" key={name}>
          <span className="mk-ava">{initials}</span>
          <p>
            {name}
            <small>{source}</small>
          </p>
          <em className={`mk-chip mk-chip--${tone}`}>{stage}</em>
        </div>
      ))}
      <div className="mk-mini__foot">
        <span>
          <i className="mk-dot mk-dot--up" /> 0 unassigned
        </span>
        <span>6 duplicates attached</span>
      </div>
    </div>
  )
}

export function MiniInventory() {
  return (
    <div className="mk-mini">
      <div className="mk-mini__head">
        <b>Gulberg Heights</b>
        <span>Plot map</span>
      </div>
      <div className="mk-units mk-units--mini">
        {UNITS.slice(0, 16).map((u) => (
          <span className={`mk-unit is-${u.status}`} key={u.id}>
            <b>{u.id}</b>
          </span>
        ))}
      </div>
      <div className="mk-mini__foot">
        <span>
          <i className="mk-dot mk-dot--up" /> 12 available
        </span>
        <span>8 on hold · 4 booked</span>
      </div>
    </div>
  )
}
