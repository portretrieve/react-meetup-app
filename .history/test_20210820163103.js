const react = require("react");
const createContext = react.createContext;

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0
});

console.log(FavouritesContext);
