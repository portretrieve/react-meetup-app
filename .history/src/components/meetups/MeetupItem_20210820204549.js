import { useContext } from "react";

import classes from "./Meetupitem.module.css";
import Card from "../userInterface/Card";

import FavouritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavouritesContext);
  const itemIsFav = favoriteCtx.checkFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFav) {
    }
  }

  return (
    <Card>
      <li className={classes.item} key={props.key}>
        <div className={classes.image}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.address}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
