import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <h1>This is app Page</h1>
      <AllMeetupsPage />
      <Route></Route>
      <Route></Route>
      <Route></Route>

      <FavouritesPage />
      <NewMeetupPage />
    </div>
  );
}

export default App;
