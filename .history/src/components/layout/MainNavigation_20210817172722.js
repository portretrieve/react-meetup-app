import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header>
      <h2>React Meetups</h2>
      <nav>
        <ul>
          <li>
            <a href="/">All Meet Up Page</a>
          </li>
          <li>
            <a href="/fav">Fav Page</a>
          </li>
          <li>
            <a href="/meet">New Meet Page</a>
          </li>
          <li>
            <a href="/fav-item">Fav Item Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
