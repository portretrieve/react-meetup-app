import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addUserFav: (favMeetUp) => {},
  removeUserFav: (meetUpId) => {},
  checkIfIsFavorite: () => {}
});

export const FavouritesContextProvider = (props) => {
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
    return false;
  };

  const context = {
    favourites: userFavorites,
    totalFavourites: userFavorites.length,
    addFavorite: addUserFav,
    removeFavorite: removeUserFav,
    checkFavorite: checkIfIsFavorite
  };

  return (
    <FavouritesContext.Provider value={context}>
      props.children;
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
