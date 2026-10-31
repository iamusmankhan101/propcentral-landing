import { useState } from 'react'
import {
  MockApp,
  DashboardPanel,
  LeadsPanel,
  InventoryPanel,
  CollectionsPanel,
} from './HomeMockups.jsx'

const TOUR = [
  {
    id: 'dashboard',
    tab: 'Dashboard',
    active: 0,
    url: 'app.estatecentric.pk/dashboard',
    title: 'The morning read',
    body: 'Open leads, first response, site visits and collections, with the funnel and today\u2019s follow-ups in one view. Every tile filters by branch, source and period.',
    Panel: DashboardPanel,
  },
  {
    id: 'leads',
    tab: 'Leads',
    active: 1,
    url: 'app.estatecentric.pk/leads',
    title: 'One queue, ranked',
    body: 'Source, agent, stage and the response clock on every row. Duplicate enquiries attach to the open lead instead of creating another record.',
    Panel: LeadsPanel,
  },
  {
    id: 'inventory',
    tab: 'Inventory',
    active: 2,
    url: 'app.estatecentric.pk/projects/gulberg-heights',
    title: 'Every plot, its status',
    body: 'Colour-coded units across towers, floors and plots, with live holds, bookings and the price-list version behind each one.',
    Panel: InventoryPanel,
  },
  {
    id: 'collections',
    tab: 'Collections',
    active: 3,
    url: 'app.estatecentric.pk/collections',
    title: 'Who owes what',
    body: 'Installments, receipts and overdue balances, applied to the right payment plan and shared to the buyer\u2019s portal.',
    Panel: CollectionsPanel,
  },
]

export default function HomeTour() {
  const [active, setActive] = useState(0)
  const item = TOUR[active]
  const Panel = item.Panel

  return (
    <section className="hp-sec hp-tour" id="tour">
      <div className="hp-shell">
        <div className="hp-head hp-head--center hp-reveal">
          <p className="hp-label">Product tour</p>
          <h2 style={{ marginTop: 12 }}>See the day, screen by screen</h2>
          <p>
            Dashboard, leads, inventory and collections, laid out the way a sales floor actually
            works. Product preview; live demo on request.
          </p>
        </div>

        <div className="hp-shots hp-reveal">
          <div className="hp-shots__tabs" role="tablist" aria-label="Product screens">
            {TOUR.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                id={`tour-tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`tour-panel-${t.id}`}
                className={`hp-shots__tab${i === active ? ' is-on' : ''}`}
                onClick={() => setActive(i)}
              >
                {t.tab}
              </button>
            ))}
          </div>

          <div
            className="hp-shots__stage"
            role="tabpanel"
            id={`tour-panel-${item.id}`}
            aria-labelledby={`tour-tab-${item.id}`}
          >
            <div className="hp-shots__frame" key={item.id}>
              <MockApp url={item.url} active={item.active}>
                <Panel />
              </MockApp>
            </div>

            <div className="hp-shots__cap">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
