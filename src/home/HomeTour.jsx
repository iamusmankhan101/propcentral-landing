import { useState } from 'react'
import AppShot from './AppShot.jsx'

const TOUR = [
  {
    id: 'dashboard',
    tab: 'Dashboard',
    url: 'app.estatecentric.pk/dashboard',
    src: '/app-dashboard.png',
    width: 1800,
    height: 1013,
    alt: 'Estate Centric dashboard showing 6 total leads, 33% within SLA and 2 booked, with agent load, pipeline composition and overdue follow-ups',
    title: 'The morning read',
    body: 'Total leads, SLA compliance, first response, verified visits and bookings, with agent load and pipeline composition for whichever source, project or agent you pick.',
  },
  {
    id: 'leads',
    tab: 'Leads',
    url: 'app.estatecentric.pk/leads',
    src: '/app-leads.png',
    width: 1800,
    height: 1018,
    alt: 'Leads board with New, Contacted, Not Reachable, Qualified and Visit Scheduled columns, each card showing phone, project, source and owner',
    title: 'One board, every stage',
    body: 'New, Contacted, Not Reachable, Qualified and Visit Scheduled. Each card carries the phone, project, source and owner, and drags between stages as the call moves.',
  },
  {
    id: 'lead',
    tab: 'Lead detail',
    url: 'app.estatecentric.pk/leads/2',
    src: '/app-lead.png',
    width: 1800,
    height: 1016,
    alt: 'Lead detail page for Ayesha Malik with call logging, next follow-up date, status update and offer recording',
    title: 'One lead, one page',
    body: 'Log the call, set the next follow-up, move the status and record an offer against a client or unit. Every touch stays on the lead\u2019s timeline.',
  },
  {
    id: 'reports',
    tab: 'Reports',
    url: 'app.estatecentric.pk/reports',
    src: '/app-reports.png',
    width: 1800,
    height: 1011,
    alt: 'Daily reports table by agent with new leads, contacted, average response, SLA breaches, calls, visits, offers, bookings, sales and commission',
    title: 'The floor, measured',
    body: 'Daily, weekly or monthly totals per agent: new leads, contact rate, average response, SLA breaches, calls, meetings, visits, offers, bookings, sales and commission.',
  },
]

export default function HomeTour() {
  const [active, setActive] = useState(0)
  const item = TOUR[active]

  return (
    <section className="hp-sec hp-tour" id="tour">
      <div className="hp-shell">
        <div className="hp-head hp-head--center hp-reveal">
          <p className="hp-label">Product tour</p>
          <h2 style={{ marginTop: 12 }}>See the day, screen by screen</h2>
          <p>
            Dashboard, leads, lead detail and reports, captured from the product itself. Ask for a
            live walkthrough on your own pipeline.
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
              <AppShot
                src={item.src}
                alt={item.alt}
                url={item.url}
                width={item.width}
                height={item.height}
              />
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
