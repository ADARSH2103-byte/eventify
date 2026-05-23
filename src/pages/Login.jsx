import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Login() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
            Login
          </h1>

          <form className="space-y-6">

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-4 border rounded-xl"
            />

            <button className="w-full bg-purple-700 text-white py-4 rounded-xl hover:bg-purple-800 transition">
              Login
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?
            <span className="text-purple-700 font-semibold cursor-pointer ml-2">
              Signup
            </span>
          </p>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Login