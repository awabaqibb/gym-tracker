import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center bg-white">
      <Link to="/">
        <h1 className="px-12 py-6 text-3xl font-semibold ">Gym Workouts</h1>
      </Link>

      <nav className="flex">
        {!user ? (
          <>
            <Link to="/login">
              <h1 className="px-12 py-6 font-semibold ">Login</h1>
            </Link>

            <Link to="/signup">
              <h1 className="px-12 py-6 font-semibold ">Signup</h1>
            </Link>
          </>
        ) : (
          <button onClick={logoutHandler}>
            <h1 className="px-12 py-6 text-red-400 font-semibold ">Logout</h1>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
