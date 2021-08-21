import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

const FavouritesContextProvider = () => {
  return <FavouritesContext.Provider></FavouritesContext.Provider>;
};
