import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-lg">
          We'd love to help you plan your next event.
        </p>
      </section>

      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold mb-8 text-purple-700">
              Send Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-xl"
              />

              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 border rounded-xl"
              ></textarea>

              <button className="bg-purple-700 text-white px-8 py-4 rounded-xl hover:bg-purple-800 transition">
                Send Message
              </button>

            </form>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold mb-8 text-purple-700">
              Contact Information
            </h2>

            <div className="space-y-6 text-lg">

              <p>
                📍 Delhi, India
              </p>

              <p>
                📞 +91 7310136943
              </p>

              <p>
                📧 support@eventify.com
              </p>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact