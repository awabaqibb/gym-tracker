import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex-1 bg-white">
      <Link to="/">
        <h1 className="px-12 py-6 text-3xl font-semibold ">Gym Workouts</h1>
      </Link>
    </header>
  );
};

export default Navbar;
