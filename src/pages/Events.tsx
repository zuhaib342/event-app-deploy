import { useState } from "react";
import styles from "../styles/Events.module.css"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/firebase/Firebase";
import { title } from "process";

const Events = () => {
   
    const [Title, setTitle] = useState("");
    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [Location, setLocation] = useState("");
    const [Description, setDescription] = useState("");
    const eventSubmitHandler= (e:any)=>{
        e.preventDefault()
        console.log(Title,Date,Time,Location,Description)
        
        const docRef =  addDoc(collection(db, "Events-Manager"), {
            Title: Title,
            Date: Date,
            Time:Time,
            Location: Location,
            Description: Description,
          });
          console.log("Document written with ID: ", docRef.id);
          
        }
    return (
        <div className={styles.event}>
            <form className={styles.form} >
                <label htmlFor="email" className={styles.label}>Title:</label>
                <input type="text" id="email" name="Title" placeholder="Enter your Title" required className={styles.input}
               value={Title} onChange={(e) => {setTitle(e.target.value )}} />
                <label htmlFor="text" className={styles.label}>Date:</label>
                <input type="text" id="email" name="Description" placeholder="Enter Date" required className={styles.input} 
                 value={Date} onChange={(e) => {setDate(e.target.value )}} />
                <label htmlFor="text" className={styles.label}>Time:</label>
                <input type="text" id="email" name="Description" placeholder="Enter Time" required className={styles.input} 
                value={Time} onChange={(e) => {setTime(e.target.value )}}/>

                <label htmlFor="email" className={styles.label}>Location:</label>
                <input type="text" id="email" name="Location" placeholder="Enter your Location" required className={styles.input} 
                value={Location} onChange={(e) => {setLocation(e.target.value )}} />
                <label htmlFor="text" className={styles.label}>Description:</label>
                <input type="text" id="email" name="Description" placeholder="Enter description here" required className={styles.input} 
                value={Description} onChange={(e) => {setDescription(e.target.value )}}/>
                <button type="submit" className={styles.button} onClick={eventSubmitHandler}>Submit</button>
            </form>

        </div>
    )
};
export default Events;