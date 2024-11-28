import "./headercss.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="containerHeader">
      <Link to="Home">Home</Link>
      <Link to="Login">Login</Link>
    </div>
  );
}

export default Header;
