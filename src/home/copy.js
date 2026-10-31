// Voice and sales copy for the homepage. Product facts stay in ../data.js.

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#platform' },
  { label: 'Product tour', href: '#tour' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Getting started', href: '#start' },
]

// Capability figures, not usage claims — each one is something the build does.
export const BAND_STATS = [
  ['4', 'ways a lead arrives'],
  ['3×', 'SLA escalations, then reassign'],
  ['1', 'record per lead, end to end'],
  ['24/7', 'portal and inventory links'],
]

// ─── Pricing ────────────────────────────────────────────────────────────────
// Monthly figures in PKR, per company. Annual billing is 20% off. Limits and
// add-on prices are commercial packaging; the app does not enforce them yet.
export const PLANS = [
  {
    id: 'solo',
    name: 'Solo',
    tagline: 'For a one-person desk.',
    monthly: 1999,
    points: [
      '1 user · 1 branch',
      '3 active projects · 300 units',
      '1,000 active leads',
      'Lead capture, routing and SLA',
      'GPS site visits with OTP',
      'Inventory, holds and bookings',
      'Core dashboards and CSV import',
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For a small sales floor.',
    monthly: 6499,
    points: [
      '5 users · 1 branch',
      '10 active projects · 1,500 units',
      '5,000 active leads',
      'Everything in Solo',
      'Collections and payment plans',
      'Customer portal and commissions',
      'Guided setup and WhatsApp support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For a growing team.',
    monthly: 12499,
    popular: true,
    points: [
      '15 users · 3 branches',
      '30 active projects · 5,000 units',
      '25,000 active leads',
      'Everything in Starter',
      'Dealer rates, targets and recovery',
      'Full reports and exports',
      'Priority support and two onboarding sessions',
    ],
  },
  {
    id: 'agency',
    name: 'Agency',
    tagline: 'For multi-branch agencies.',
    monthly: 19999,
    allIncluded: true,
    points: [
      'Unlimited users and branches',
      'Unlimited projects, units and leads',
      'Everything in Growth',
      'Two-factor sign-in, audit log and export approval',
      'Custom roles and permissions',
      'Dedicated account manager',
      'Full implementation and response SLA',
    ],
  },
]

export const PRICING_ADDONS = [
  { label: 'Extra 5 users', price: '+PKR 1,499/mo' },
  { label: 'Extra branch', price: '+PKR 2,499/mo' },
  { label: 'Guided onboarding', price: 'PKR 9,999 once' },
  { label: 'Data migration', price: 'PKR 19,999 once' },
]

export const PRICING_INCLUDED = [
  'Guided onboarding',
  'Data migration',
  'On-site training',
]

// ─── Contact ─────────────────────────────────────────────────────────────────
// Sales runs through WhatsApp, on the same line as the rest of the group.
// Replace the number when Estate Centric gets its own sales line.
export const WHATSAPP_NUMBER = '923029646928'

/** A wa.me deep link that opens the chat with `message` already typed. */
export function whatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// ─── Getting started ────────────────────────────────────────────────────────
// Four steps from an empty account to a running sales floor. No prices: plans
// are quoted per team, project count and branch count.
export const START_STEPS = [
  {
    num: '01',
    title: 'Bring your projects and leads across',
    body: 'Bulk-create towers, floors and plots, version the price list with its effective date, and import an existing lead sheet from CSV after a dry-run report.',
    chips: ['Bulk units', 'CSV import', 'Price list versions'],
  },
  {
    num: '02',
    title: "Set the floor's rules",
    body: 'Roles, teams, branches and the permission matrix. Routing rules decide who gets which lead, and capacity decides when an agent stops receiving them.',
    chips: ['Role scoping', 'Routing rules', 'Capacity'],
  },
  {
    num: '03',
    title: 'Connect where leads come from',
    body: 'Facebook and Instagram lead ads, website forms through the inbound API, and walk-ins entered at the desk. Every enquiry keeps its campaign and ad set.',
    chips: ['FB & IG', 'Inbound API', 'Walk-ins'],
  },
  {
    num: '04',
    title: 'Start the SLA clock',
    body: 'First contact counted in working minutes, escalated at 1×, 2× and 3×. Every activity carries a next follow-up date, and every site visit needs a verified check-in.',
    chips: ['Working minutes', 'Escalations', 'Verified visits'],
  },
]
