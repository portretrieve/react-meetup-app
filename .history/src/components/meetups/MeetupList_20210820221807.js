import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  console.log(props.MeetupList);
  return (
    <ul className={classes.list}>
      {props.meetupList.map((meetup) => (
        <MeetupItem
          key={meetup.id}
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
