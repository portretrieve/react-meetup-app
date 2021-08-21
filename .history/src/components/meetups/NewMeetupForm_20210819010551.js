import classes from "./NewMeetupForm.module.css";
import Card from "../userInterface/Card";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}></form>
    </Card>
  );
}
export default NewMeetupForm;
