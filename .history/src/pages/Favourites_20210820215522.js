import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favoriteCtx = useContext(FavouritesContext);
  const array = favoriteCtx.favorites;

  return <section>{array}</section>;
}

export default FavouritesPage;
