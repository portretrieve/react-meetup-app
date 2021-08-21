import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import ABC from "./pages/ABC";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
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
