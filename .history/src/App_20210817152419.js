import { BrowserRouter}

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <h1>This is app Page</h1>
      <AllMeetupsPage />
      <FavouritesPage />
      <NewMeetupPage />
    </div>
  );
}

export default App;
