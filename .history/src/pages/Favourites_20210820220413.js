import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favoriteCtx = useContext(FavouritesContext);

  let content;
  if (favoriteCtx.totalFavourites === 0) {
    content = <p>You Got No Favorites yet.</p>;
  } else {
    content = <MeetupList meetupList={favoriteCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
    </section>
  );
}

export default FavouritesPage;
