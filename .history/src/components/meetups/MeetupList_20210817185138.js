import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.MeetupList.map((meetup) => (
        <MeetupItem />
      ))}
    </ul>
  );
}

export default MeetupList;
