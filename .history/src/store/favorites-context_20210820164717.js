import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

const FavouritesContextProvider = (props) => {
  const context = {
    favourites: null,
    totalFavourites: null
  };

  return (
    <FavouritesContext.Provider value={context}>
      props.children;
    </FavouritesContext.Provider>
  );
};
