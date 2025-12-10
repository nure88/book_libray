import React, { use, useContext, useEffect, useState } from "react";
import Container from "../../others/container/Container";
import NavItems from "./NavItems";
import { Link } from "react-router";
import userIcon from "../../../../../public/profile.png";
import AuthContext from "../../authContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";
const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Your Logged Out Successfully!");
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  return (
    <Container>
      <Toaster position="top-center"/>
      <nav className="navbar bg-base-200 shadow-sm rounded-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 flex justify-center items-center gap-x-6"
            >
              <NavItems />
            </ul>
          </div>
          <Link
            className="flex items-center justify-center font-bold text-4xl"
            to="/"
          >
            Book<p className="text-amber-400">Libray</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-x-6">
            <NavItems />
          </ul>
        </div>
        <div className="navbar-end">
          {/*  */}
          <div className="navbar bg-base-100">
            <div className="flex-1"></div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  <div className="card-body"></div>
                </div>
              </div>

      <div className="flex justify-center items-center gap-x-5">
  <img
    className="h-10 w-10 rounded-full"
    src={`${user ? user.photoURL : userIcon}`}
    alt="user"
  />

  {user ? (
    <div className="relative group">
      {/* LogOut Button */}
      <button
        onClick={handleLogOut}
        className="btn btn-active lg:banner-btn btn-sm hover:font-bold"
      >
        LogOut
      </button>

      {/* Hover Tooltip: displayName and email (নিচে দেখানো) */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-10 pointer-events-none mt-2">
        <p className="font-semibold">{user.displayName}</p>
        <p className="text-sm">{user.email}</p>
        
      </div>
    </div>
  ) : (
    <Link
      className="btn btn-active btn-sm hover:font-bold"
      to="/login"
    >
      Login
    </Link>
  )}
<input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" value="synthwave" className="toggle theme-controller" />
</div>

            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
