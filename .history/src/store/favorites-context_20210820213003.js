import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addUserFav: (favMeetUp) => {},
  removeUserFav: (meetUpId) => {},
  checkIfIsFavorite: (meetUpId) => {}
});

export const FavouritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavHandler = (favMeetUp) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favMeetUp);
    });
  };

  const removeFavHandler = (meetUpId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetUpId);
    });
  };

  const itemIsFavHandler = (meetUpId) => {
    return userFavorites.some((meetup) => meetup.id === meetUpId);
  };

  const context = {
    favourites: userFavorites,
    totalFavourites: userFavorites.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemIsFavorite: itemIsFavHandler
  };

  return (
    <FavouritesContext.Provider value={context}>
      props.children;
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
