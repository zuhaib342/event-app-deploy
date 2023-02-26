import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase/Firebase";
import { useEffect, useState } from "react";
import { eventType } from "@/types/eventType";
import { background } from "@chakra-ui/react";
const Eventing = () => {

    const [loader, setLoader] = useState(false);
    const [event, setEvent] = useState<eventType[]>([])
    useEffect(()=>{
        getEventHandler()

    },[])
    const getEventHandler = async () => {
        console.log("get event method");


        try {
            // setLoader(true)
            // const querySnapshot = await getDocs(collection(db, "Event-manager"));
            // let eventList: eventType[] = []
            // querySnapshot.forEach((doc) => {
            //     eventList.push({
            //         // attachmentURL: doc.data()?.attachmentURL,
            //         Title : doc.data()?.Title ,
            //         Date  : doc.data().Date ,
            //         Time  : doc.data().Time ,
            //         Location  : doc.data().Location ,
            //         Description: doc.data()?.description,


            //     });
            // });

            // const docRef = doc(db, "Event-manager", );
            const querySnapshot = await getDocs(collection(db, "Events-Manager"));
            let eventList: eventType[] = []
            querySnapshot.forEach((doc) => {
                eventList.push({
                    // attachmentURL: doc.data()?.attachmentURL,
                    Title: doc.data()?.Title,
                    Date: doc.data().Date,
                    Time: doc.data().Time,
                    Location: doc.data().Location,
                    Description: doc.data()?.description,
                });
            });
            console.log('eventList', eventList);
            setEvent(eventList)
            return eventList


        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        }
        finally {
            // setLoader(false)
        }
    }


    useEffect(() => {
        getEventHandler()
    }, [])


    return (
        <div>
        
        {event.map((item, index) => (
    <div key={index} style={{ 
        border: '1px solid #007bff', 
        padding: '10px',
        marginBottom: '20px',
        boxShadow: '2 5 7px rgba(0, 0, 0, 0.3)'
        
    }}>
        <h2 style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '10px'
        }}>{item.Title}</h2>
        <p style={{ 
            fontSize: '16px',
            margin: '0'
        }}>{item.Date}</p>
        <p style={{ 
            fontSize: '16px',
            margin: '0'
        }}>{item.Time}</p>
        <p style={{ 
            fontSize: '16px',
            margin: '0'
        }}>{item.Location}</p>
        <p style={{ 
            fontSize: '16px',
            margin: '0'
        }}>{item.Description}</p>
    </div>
))}

            
        </div>
    )
}
export default Eventing;