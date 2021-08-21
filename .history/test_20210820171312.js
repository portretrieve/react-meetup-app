const userFavorites = [2, 4, 6, 8];

const checkIfIsFavorite = (meetUpId) => {
  userFavorites.forEach((meetup) => {
    if (meetup.id === meetUpId) {
      return true;
    }
  });
  return false;
};
