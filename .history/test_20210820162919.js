import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

console.log(FavouritesContext);
