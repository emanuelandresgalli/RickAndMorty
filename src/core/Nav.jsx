import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
   <nav>
    <ul>
       <Link to="">Home</Link>
       <Link to="/gallery">Gallery</Link>
    </ul>
   </nav>
  )
}

export default Nav;
