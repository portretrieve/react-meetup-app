import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";
function AllMeetupsPage() {
  const [loading, setLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);

  fetch(
    "https://react-getting-started-9b8db-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setLoadedMeetUps(data);
      setLoading(false);
    });

  if (loading) {
    return <section>Loading....</section>;
  } else {
    return (
      <section>
        <h1 style={{ textAlign: "center" }}>All Meetups Page</h1>
        <MeetupList meetupList={loadedData} />
      </section>
    );
  }
}

export default AllMeetupsPage;
