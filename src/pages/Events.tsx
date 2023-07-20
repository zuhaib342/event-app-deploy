import { useState } from "react";
import styles from "../styles/Home.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";

const Events = () => {
  const router = useRouter();
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");

  const eventSubmitHandler = async (e: any) => {
    e.preventDefault();
    console.log(Title, Date, Time, Location, Description);
    if (!Title || !Date || !Time || !Location || !Description) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "Events-Manager"), {
        Title: Title,
        Date: Date,
        Time: Time,
        Location: Location,
        Description: Description,
      });

      console.log("Document written with ID: ", docRef.id);
      toast.success("Event added successfully!");

      // router.push("/")
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to add event.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <ToastContainer />
        <form className={styles.card}>
          <h2>Add Event</h2>
          <label htmlFor="email" className={styles.label}>
            Title:
          </label>
          <input
            type="text"
            id="email"
            name="Title"
            placeholder="Enter your Title"
            required
            className={styles.input}
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="text" className={styles.label}>
            Date:
          </label>
          <input
            type="text"
            id="email"
            name="Description"
            placeholder="Enter Date"
            required
            className={styles.input}
            value={Date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <label htmlFor="text" className={styles.label}>
            Time:
          </label>
          <input
            type="text"
            id="email"
            name="Description"
            placeholder="Enter Time"
            required
            className={styles.input}
            value={Time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <label htmlFor="email" className={styles.label}>
            Location:
          </label>
          <input
            type="text"
            id="email"
            name="Location"
            placeholder="Enter your Location"
            required
            className={styles.input}
            value={Location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label htmlFor="text" className={styles.label}>
            Description:
          </label>
          <input
            type="text"
            id="email"
            name="Description"
            placeholder="Enter description here"
            required
            className={styles.input}
            value={Description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            type="submit"
            className={styles.button}
            onClick={eventSubmitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Events;
