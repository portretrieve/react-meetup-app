import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  console.log(props.meetupList[1]);
  return (
    <ul className={classes.list}>
      {props.meetupList.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          img={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
