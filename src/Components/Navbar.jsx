import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between lg:max-w-screen-lg lg:mx-auto lg:my-5">
      <Link to={"/"} className="text-2xl font-bold">
        Book Vibe
      </Link>
      <div className="flex items-center gap-4 text-gray-900/80 font-medium">
        <NavLink to="/" className="lg:px-5 lg:py-2">
          Home
        </NavLink>
        <NavLink to="/linked-books" className="lg:px-5 lg:py-2">
          Linked Books
        </NavLink>
        <NavLink to="/pages-to-read" className="lg:px-5 lg:py-2">
          Pages To Read
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 text-white bg-green-600 rounded-lg font-semibold">
          Sign In
        </button>
        <button className="px-6 py-3 text-white bg-cyan-400 rounded-lg font-semibold">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
