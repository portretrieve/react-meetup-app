import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li>
      <div>
        <img src={props.img} alt={props.title} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.address}</p>
        <p>{props.description}</p>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
