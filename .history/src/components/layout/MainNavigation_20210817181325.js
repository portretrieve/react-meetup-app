import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <h2>React Meetups</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet Up Page</Link>
          </li>
          <li>
            <Link to="/fav">Fav Page</Link>
          </li>
          <li>
            <Link to="/meet">New Meet Page</Link>
          </li>
          <li>
            <Link to="/fav-item">Fav Item Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
