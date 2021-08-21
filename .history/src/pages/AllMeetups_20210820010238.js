import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
function AllMeetupsPage() {
  const [loading, setLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);

  useEffect(() => {
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
  }, [loading]);

  if (loading) {
    return <section>Loading....</section>;
  }
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>All Meetups Page</h1>
      <MeetupList meetupList={loadedMeetUps} />
    </section>
  );
}

export default AllMeetupsPage;
