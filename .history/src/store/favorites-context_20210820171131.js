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
      return userFavorites.filter(
        (userFavorite) => userFavorite.id !== meetUpId
      );
    });
  };

  const checkIfIsFavorite = (meetUpId) => {
    userFavorites.forEach((meetup) => {
      if (meetup.id === meetUpId) {
        return true;
      }
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
