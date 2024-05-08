import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="main">
      <div className="maindiv">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/admin" className="link">
          Admin
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
