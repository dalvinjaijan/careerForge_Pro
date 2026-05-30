import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b">

      <h1 className="text-2xl font-bold text-indigo-600">
        CareerForge Pro
      </h1>

      <div className="flex gap-8 text-gray-700">

        <a href="#features">Features</a>

        <a href="#pricing">Pricing</a>

        <a href="#templates">Templates</a>

      </div>

      <div className="flex gap-4">

        <Link to="/login">
          <button className="px-5 py-2">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
            Get Started
          </button>
        </Link>

      </div>

    </nav>
  )
}

export default Navbar