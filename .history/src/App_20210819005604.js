import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/meet">
          <NewMeetupPage />
        </Route>
        <Route path="/fav">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
