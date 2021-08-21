import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

const FavouritesContextProvider = (props) => {
  return (
    <FavouritesContext.Provider>props.children;</FavouritesContext.Provider>
  );
};
