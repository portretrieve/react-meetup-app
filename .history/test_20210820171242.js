const checkIfIsFavorite = (meetUpId) => {
  userFavorites.forEach((meetup) => {
    if (meetup.id === meetUpId) {
      return true;
    }
  });
  return false;
};
