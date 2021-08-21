import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet Ups</Link>
          </li>
          <li>
            <Link to="/fav">Fav Page</Link>
          </li>
          <li>
            <Link to="/meet">New Meet Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
