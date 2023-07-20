import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { eventType } from "@/types/eventType";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";

const MyEvents = ({ }) => {
  // const [joinedEvents, setJoinedEvents] = useState<eventType[]>([]);

  // useEffect(() => {
  //   const fetchJoinedEvents = async () => {
  //     try {
  //       const userDocRef = doc(db, "users", );
  //       const userDoc = await getDoc(userDocRef);
  //       const userJoinedEvents = userDoc.data()?.joinedEvents;

  //       if (userJoinedEvents && userJoinedEvents.length > 0) {
  //         const eventsRef = db.collection("Events-Manager");
  //         const joinedEventsData = await Promise.all(
  //           userJoinedEvents.map(async (eventId) => {
  //             const eventDocRef = doc(eventsRef, eventId);
  //             const eventDoc = await getDoc(eventDocRef);

  //             return eventDoc.data();
  //           })
  //         );
  //         setJoinedEvents(joinedEventsData as eventType[]);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchJoinedEvents();
  // }, [userId]);

  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
      <div className={styles.card}>
      <h1>My Joined Events</h1>
      {/* {joinedEvents.length === 0 ? ( */}
        <p>You have not joined any events yet.</p>
       {/* : (
        <div>
          {joinedEvents.map((event, index) => (
            <div key={index}>
              <h2>{event.Title}</h2>
              <p>Date: {event.Date}</p>
              <p>Time: {event.Time}</p>
              <p>Location: {event.Location}</p>
              <p>Description: {event.Description}</p>
            </div>
          ))}
        </div>
      )} */}
      </div>
    </div>
    </div>
  );
};

export default MyEvents;