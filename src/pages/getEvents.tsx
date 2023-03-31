import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase/Firebase";
import { useEffect, useState } from "react";
import { eventType } from "@/types/eventType";
// import { ClassNames } from "@emotion/react";
const Eventing = () => {

  const [loader, setLoader] = useState(false);
  const [event, setEvent] = useState<eventType[]>([])
  useEffect(() => {
    getEventHandler()

  }, [])
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
          Description: doc.data().Description,
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
      <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>All Events</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '10px',
          fontWeight: 'bold',
          borderBottom: '1px solid #007bff',
          paddingBottom: '10px'
        }}>
          <div style={{ flex: '1', textAlign: 'center' }}>Title</div>
          <div style={{ flex: '1', textAlign: 'center' }}>Date</div>
          <div style={{ flex: '1', textAlign: 'center' }}>Time</div>
          <div style={{ flex: '1', textAlign: 'center' }}>Location</div>
          <div style={{ flex: '2', textAlign: 'center' }}>Description</div>
          <div style={{ flex: '1', textAlign: 'center' }}>Join Event</div>
        </div>
        {event.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #007bff',
            padding: '10px',
            marginBottom: '20px',
            boxShadow: '2px 5px 7px rgba(0, 0, 0, 0.3)',
            minHeight: '80px'
          }}>
            <div style={{ flex: '1', textAlign: 'center' }}>{item.Title}</div>
            <div style={{ flex: '1', textAlign: 'center' }}>{item.Date}</div>
            <div style={{ flex: '1', textAlign: 'center' }}>{item.Time}</div>
            <div style={{ flex: '1', textAlign: 'center' }}>{item.Location}</div>
            <div style={{ flex: '2', textAlign: 'center' }}>{item.Description}</div>
            <div style={{ flex: '1', textAlign: 'center' }}>
              <button style={{
                marginTop: '16px',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#000',
                color: '#fff',
                cursor: 'pointer'
              }}>
                Join Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Eventing;