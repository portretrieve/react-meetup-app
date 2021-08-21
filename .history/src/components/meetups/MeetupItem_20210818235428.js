import classes from "./Meetupitem.module.css";
import Card from "../userInterface/Card";

function MeetupItem(props) {
  return (
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
  );
}

export default MeetupItem;
