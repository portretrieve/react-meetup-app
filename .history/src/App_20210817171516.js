import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <h1>This is app Page</h1>
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
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
