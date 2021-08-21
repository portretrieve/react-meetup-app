import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
function AllMeetupsPage() {
  const [loading, setLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-getting-started-9b8db-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const meetUpArray = [];
        for (const key in data) {
          const meetUpObject = {
            id: key,
            ...data[key]
          };
          meetUpArray.push(meetUpObject);
        }
        setLoading(false);
        setLoadedMeetUps(meetUpArray);
      });
  }, []);

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
