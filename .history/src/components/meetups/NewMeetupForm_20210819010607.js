import classes from "./NewMeetupForm.module.css";
import Card from "../userInterface/Card";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}></div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
