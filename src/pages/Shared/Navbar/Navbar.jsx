import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
  const navMenu = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>All Toys</Link>
      </li>
      <li>
        <Link to={"/"}>My Toys</Link>
      </li>
      <li>
        <Link to={"/"}>Add A Toy</Link>
      </li>
      <li>
        <Link to={"/"}>Blogs</Link>
      </li>

      {user?.email ? (
        <>
          <li onClick={handleLogout}>
            <Link>Logout</Link>
          </li>

          <li>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar font-bold bg-[#dfd8d0] justify-between">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu items-center menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Robots
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1">{navMenu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
