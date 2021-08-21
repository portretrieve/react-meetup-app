import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";

function FavouritesPage() {
  const favoriteCtx = useContext(FavouritesContext);

  return <div>FavouritesPage</div>;
}

export default FavouritesPage;
