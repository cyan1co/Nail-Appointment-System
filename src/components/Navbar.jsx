import { NavLink } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-pink-800 font-bold border-b-2 border-pink-600 pb-1"
      : "hover:text-pink-800";

  return (
    <nav className="bg-pink-100 shadow-md">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">

          <Sparkles className="text-pink-600" />

          <h1 className="text-2xl font-bold text-pink-600">
            Kristy's Nailz
          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-pink-600 font-medium">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>

          <NavLink to="/gallery" className={navClass}>
            Gallery
          </NavLink>

          <NavLink to="/booking" className={navClass}>
            Book Now
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

          <NavLink to="/bookings" className={navClass}>
            Dashboard
          </NavLink>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-pink-600"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen
            ? <X size={30} />
            : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div
          className="
            md:hidden
            flex
            flex-col
            gap-4
            px-6
            pb-6
            text-pink-600
            font-medium
          "
        >

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>

          <NavLink to="/gallery" className={navClass}>
            Gallery
          </NavLink>

          <NavLink to="/booking" className={navClass}>
            Book Now
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

          <NavLink to="/bookings" className={navClass}>
            Dashboard
          </NavLink>

        </div>

      )}

    </nav>
  );
}

export default Navbar;