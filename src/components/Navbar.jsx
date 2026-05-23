import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-purple-700 text-white p-5 flex justify-between">

      <h1 className="text-2xl font-bold">
        Eventify
      </h1>

      <ul className="flex gap-6">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar