import { useContext } from "react";

import classes from "./Meetupitem.module.css";
import Card from "../userInterface/Card";

import FavouritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  console.log(props);
  const favoriteCtx = useContext(FavouritesContext);
  const itemIsFav = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFav) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.img,
        address: props.address
      });
    }
  }

  return (
    <li className={classes.item} key={props.key}>
      <Card>
        <div className={classes.image}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.address}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFav ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
