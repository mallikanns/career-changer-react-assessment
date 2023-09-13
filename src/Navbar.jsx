import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/owner"}>Owner</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
