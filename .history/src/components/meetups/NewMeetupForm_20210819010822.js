import classes from "./NewMeetupForm.module.css";
import Card from "../userInterface/Card";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Mettup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Mettup Title</label>
          <input type="url" id="image" required />
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
