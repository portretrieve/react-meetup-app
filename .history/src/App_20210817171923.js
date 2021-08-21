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
          <a to="/">All Meet Up Page</a>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/fav-page">
          <FavouritesPage />
        </Route>
        <Route path="/meet-page">
          <NewMeetupPage />
        </Route>
        <Route path="/fav-page-item">
          <ABC />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
