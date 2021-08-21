import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">MeetUp List</Link>
          </li>
          <li>
            <Link to="/meet">New Meetup</Link>
          </li>
          <li>
            <Link to="/fav">My Favoutites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
