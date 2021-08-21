import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.MeetupList.map((meetup) => (
        <MeetupItem img={meetup.img} title={meetup.title} />
      ))}
    </ul>
  );
}

export default MeetupList;
