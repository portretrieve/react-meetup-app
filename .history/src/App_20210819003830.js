import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

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
      </Switch>
    </div>
  );
}

export default App;
