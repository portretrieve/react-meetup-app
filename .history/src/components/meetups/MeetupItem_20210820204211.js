import { useContext } from "react";

import classes from "./Meetupitem.module.css";
import Card from "../userInterface/Card";

function MeetupItem(props) {
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