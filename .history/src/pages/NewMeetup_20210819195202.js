import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetUpHandler = (meetUpData) => {
    fetch(
      "https://react-getting-started-9b8db-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  };

  return (
    <div>
      <h1>Add New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetupPage;
