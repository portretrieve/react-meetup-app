import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import ABC from "./pages/ABC";

function App() {
  return (
    <div>
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
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/fav">
          <FavouritesPage />
        </Route>
        <Route path="/meet">
          <NewMeetupPage />
        </Route>
        <Route path="/fav-item">
          <ABC />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
