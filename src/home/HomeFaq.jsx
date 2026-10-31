import { whatsAppLink } from './copy.js'
import { Arrow, Plus } from '../components/Icons.jsx'

const FAQS = [
  {
    q: 'What does Estate Centric actually cover?',
    a: 'Lead capture, routing and the SLA clock, GPS site visits with OTP check-in, inventory with holds and bookings, payment plans and collections, commissions, and the customer portal. All of it writes to one lead record, so a sale and its receipts stay on one timeline.',
  },
  {
    q: 'How is it priced?',
    a: 'Four monthly plans — Solo, Starter, Growth and Agency — in PKR, per company. Annual billing is 20% off. Each plan caps users, branches, projects, units and active leads; extra users and branches are available as add-ons.',
  },
  {
    q: 'Can we bring our existing leads and inventory?',
    a: 'Yes. Towers, floors and plots can be bulk-created, price lists are versioned with an effective date, and an existing lead sheet imports from CSV after a dry-run report.',
  },
  {
    q: 'How does the SLA clock work?',
    a: 'First contact is measured in working minutes from the moment of assignment. A lead escalates at 1×, 2× and 3× the target, then reassigns to the next agent with capacity. Every activity carries a next follow-up date.',
  },
  {
    q: 'Are roles and data separated?',
    a: 'Users are scoped by role, team and branch, with a permission matrix over leads, inventory, collections and reports. The Agency plan adds two-factor sign-in, an audit log and export approval.',
  },
  {
    q: 'Do buyers get their own portal?',
    a: 'Yes. Buyers sign in to see their unit, payment plan and receipts, and the same installment data drives the collection reminders your team works from.',
  },
]

export default function HomeFaq() {
  return (
    <section className="hp-sec hp-faq" id="faq">
      <div className="hp-shell">
        <div className="hp-faq__grid">
          <div className="hp-faq__head hp-reveal">
            <p className="hp-label">FAQ</p>
            <h2>Answers before the call.</h2>
            <p>
              If your question is not here, message us on WhatsApp and we will answer it
              directly.
            </p>
            <a
              href={whatsAppLink("Hi Estate Centric, I have a question about the CRM.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on WhatsApp
              <Arrow />
            </a>
          </div>

          <div className="hp-faq__list hp-reveal">
            {FAQS.map((f, i) => (
              <details className="hp-faq__item" key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="hp-faq__plus" aria-hidden="true">
                    <Plus />
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
