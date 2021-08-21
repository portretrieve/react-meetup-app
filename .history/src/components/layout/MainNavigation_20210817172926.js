import { Link } from "react-router-dom";

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
            <a to="/fav">Fav Page</a>
          </li>
          <li>
            <a to="/meet">New Meet Page</a>
          </li>
          <li>
            <a to="/fav-item">Fav Item Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
