import { useContext } from "react";
import { NavLink } from "react-router";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const { isAdmin } = useContext(AdminContext);
  const links = (
    <>
      <li>
        <NavLink to="">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/about">About</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/information">Information</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/donarForm">Donor From</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/available">Available donor</NavLink>
      </li>
      <li>
        <NavLink to="/searchDonar">Search donor</NavLink>
      </li>
      {isAdmin && (
        <li>
          <NavLink to="/adminControl">Admin Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Donate Blood</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-white-100 space-x-4">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/admin">Admin</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
