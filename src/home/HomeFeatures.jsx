import HomeServices from './HomeServices.jsx'

export default function HomeFeatures() {
  return (
    <section className="hp-sec" id="features">
      <HomeServices>
        <h2 className="hp-svc__title">
          Run The Whole Sale,
          <br />
          Not Just <mark>The Lead</mark>
        </h2>
        <p className="hp-svc__sub">
          From the first Facebook enquiry to the final installment receipt, every call, visit,
          offer and payment lands on the same lead record.
        </p>
      </HomeServices>
    </section>
  )
}
