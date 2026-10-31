// Product facts for Estate Centric, kept close to the CRM's README so the site
// never promises something the build does not do.

// `short` and `tags` feed the module grid; `body` is the longer description.
export const FEATURES = [
  {
    title: 'Lead capture',
    body: 'Facebook and Instagram lead ads, website forms through the inbound API, and walk-ins at the desk all land in one inbox. Repeat enquiries are matched to the open lead instead of piling up as duplicates.',
    icon: 'lead',
    short: 'Facebook and Instagram lead ads, inbound API and walk-ins in one inbox, with duplicates attached to the open lead.',
    tags: ['FB & IG ads', 'Inbound API', 'Duplicate check'],
  },
  {
    title: 'Assignment & routing',
    body: 'Prioritised rules read the source, city, project, budget and hour, then hand the lead to a round-robin, load-based or performance queue, or to a named agent. Capacity and availability are respected, and a returning contact goes back to its previous owner.',
    icon: 'route',
    short: 'Rules route each lead by source, city, project and budget, with capacity-aware round-robin and returning-owner memory.',
    tags: ['Routing rules', 'Round-robin', 'Capacity'],
  },
  {
    title: 'SLA & follow-ups',
    body: 'First contact is counted in working minutes per source. At 1× the agent is reminded, at 2× the team lead is alerted and at 3× the lead is reassigned. Every activity needs a next follow-up date, so nothing goes quiet.',
    icon: 'clock',
    short: 'Working-minute SLA with reminders, team-lead alerts and reassignment when the clock runs out.',
    tags: ['Working minutes', 'Escalations', 'Stale alerts'],
  },
  {
    title: 'Site visits',
    body: 'Check in inside the project radius with GPS, confirm the customer with an SMS OTP, and record feedback before the visit closes. Unverified and overdue visits flag themselves for the team lead.',
    icon: 'pin',
    short: 'GPS radius check-in, customer OTP and mandatory feedback, so every site visit can be proven.',
    tags: ['GPS check-in', 'OTP', 'Feedback'],
  },
  {
    title: 'Projects & inventory',
    body: 'Run land and building projects with phases, blocks, streets, towers, floors and units. Bulk-create inventory, colour the map by live status, version price lists with effective dates, and hold or book a unit without a race.',
    icon: 'building',
    short: 'Plots, towers and units on a colour-coded map, with versioned price lists and race-safe holds.',
    tags: ['Plot & unit maps', 'Holds', 'Price lists'],
  },
  {
    title: 'Collections',
    body: 'A payment plan per allotment, installments, payments and refunds with printable receipts. The customer ledger applies payments oldest-first, marks what is overdue, and can transfer a unit to a new owner with a receipted fee.',
    icon: 'cash',
    short: 'Plans, installments, receipts and an overdue ledger that applies every payment to the right installment.',
    tags: ['Payment plans', 'Receipts', 'Overdue'],
  },
  {
    title: 'Sales & commissions',
    body: 'Dealers carry their own rate or the default. When a unit is allotted, commission is created for the agent and the dealer, then marked paid, adjusted, cancelled or flagged for recovery. Monthly targets show sales against plan per agent.',
    icon: 'award',
    short: 'Agent and dealer commission created at allotment, with balances, targets and recovery flags.',
    tags: ['Dealer rates', 'Targets', 'Payouts'],
  },
  {
    title: 'Dashboards & reports',
    body: 'KPI tiles against the targets, the funnel, the agent leaderboard with response times and SLA breaches, source and campaign performance, and daily, weekly or monthly reports with drill-down, CSV and print.',
    icon: 'chart',
    short: 'KPI tiles, funnel, leaderboard and source performance, with daily to monthly agent reports.',
    tags: ['Funnel', 'Leaderboard', 'CSV & print'],
  },
  {
    title: 'Roles & security',
    body: 'Role-scoped data, an editable permission matrix, two-factor sign-in, login lockout, rate limits and an append-only audit log. Exports need approval, and every exported file is watermarked.',
    icon: 'shield',
    short: 'Scoped roles, editable permissions, two-factor sign-in and an append-only audit log on every change.',
    tags: ['2FA', 'Audit log', 'Export approval'],
  },
]

export const FOOTER = [
  {
    title: 'Product',
    links: [
      ['Lead capture', '#platform'],
      ['Assignment & routing', '#platform'],
      ['SLA & follow-ups', '#platform'],
      ['Site visits', '#platform'],
      ['Projects & inventory', '#platform'],
      ['Collections', '#platform'],
    ],
  },
  {
    title: 'Platform',
    links: [
      ['Dashboards', '#platform'],
      ['Reports', '#platform'],
      ['Customer portal', '#platform'],
      ['Roles & permissions', '#platform'],
      ['Audit log', '#platform'],
      ['Security', '#faq'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Pricing', '#pricing'],
      ['Book a demo', 'wa'],
      ['WhatsApp', 'wa'],
      ['Support', 'wa'],
      ['Back to top', '#top'],
    ],
  },
]
