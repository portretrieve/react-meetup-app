import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <h1>This is app Page</h1>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/fav-page">
        <FavouritesPage />
      </Route>
      <Route path="/meet-page">
        <NewMeetupPage />
      </Route>
    </div>
  );
}

export default App;
