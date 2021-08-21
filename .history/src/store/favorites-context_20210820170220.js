import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

const FavouritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addUserFav = (favMeetUp) => {
    setUserFavorites((userFavorites) => {
      return userFavorites.concat(favMeetUp);
    });
  };

  const removeUserFav = (meetUpId) => {
    setUserFavorites((userFavorites) => {
      userFavorites.filter;
    });
  };

  const context = {
    favourites: userFavorites,
    totalFavourites: userFavorites.length
  };

  return (
    <FavouritesContext.Provider value={context}>
      props.children;
    </FavouritesContext.Provider>
  );
};
