function Services() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-xl p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Birthday Party
          </h3>

          <p>Complete birthday planning.</p>
        </div>

        <div className="bg-white shadow-xl p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Wedding Event
          </h3>

          <p>Luxury wedding planning.</p>
        </div>

        <div className="bg-white shadow-xl p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Corporate Event
          </h3>

          <p>Corporate event management.</p>
        </div>
      </div>
    </section>
  )
}

export default Services