import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";

function FavouritesPage() {
  const favoriteCtx = useContext(FavouritesContext);
  const array = favoriteCtx.totalFavourites;

  return <div>FavouritesPage</div>;
}

export default FavouritesPage;
