import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About Eventify
        </h1>

        <p className="max-w-3xl mx-auto text-lg">
          Eventify is your trusted event planning platform for
          weddings, birthdays, corporate events and special
          celebrations.
        </p>
      </section>

      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
            alt="Event"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 text-purple-700">
              Who We Are
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              We help people organize memorable events within
              their budget. From luxury weddings to birthday
              parties and corporate meetings, our mission is to
              simplify event planning.
            </p>

            <button className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition">
              Explore Services
            </button>
          </div>

        </div>
      </section>

      <section className="bg-gray-100 py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-700">
              Budget Friendly
            </h3>

            <p className="text-gray-600">
              Customized event planning according to your
              budget and preferences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-700">
              Trusted Vendors
            </h3>

            <p className="text-gray-600">
              Verified decorators, caterers, photographers and
              DJs for every event.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-700">
              Professional Team
            </h3>

            <p className="text-gray-600">
              Experienced planners ensuring smooth event
              management and execution.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default About