import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetUpHandler = (meetUpData) => {};

  return (
    <div>
      <h1>Add New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetupPage;
