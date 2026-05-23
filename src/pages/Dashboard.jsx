import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-16 px-8">

        <h1 className="text-5xl font-bold text-purple-700 mb-12 text-center">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Total Bookings
            </h2>

            <p className="text-5xl font-bold text-purple-700">
              12
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Upcoming Events
            </h2>

            <p className="text-5xl font-bold text-purple-700">
              5
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Total Vendors
            </h2>

            <p className="text-5xl font-bold text-purple-700">
              20
            </p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-16 bg-white p-10 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold mb-8 text-purple-700">
            Recent Bookings
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="text-left py-4">
                  Event
                </th>

                <th className="text-left py-4">
                  Date
                </th>

                <th className="text-left py-4">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-4">
                  Wedding Event
                </td>

                <td>
                  25 May 2026
                </td>

                <td className="text-green-600 font-semibold">
                  Confirmed
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-4">
                  Birthday Party
                </td>

                <td>
                  2 June 2026
                </td>

                <td className="text-yellow-600 font-semibold">
                  Pending
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Dashboard