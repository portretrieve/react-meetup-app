import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favoriteCtx = useContext(FavouritesContext);
  const array = ;

  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetupList={favoriteCtx.favorites} />
    </section>
  );
}

export default FavouritesPage;
