import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./EventPage.module.css"; // Import CSS module

function EventPage() {
  const data = useLoaderData();
  const events = data.events; 


  // using search method here
  const [searchItem, setSearchItem] = useState(''); 

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchItem.toLowerCase())
  );


  const filtered=events.filter(events=>{
    events.title.toLowerCase().includes(setSearchItem)
  })
  return (
    <>
      <div className={classes.events}></div>
      <h1>Event Page</h1>


      <input 
        type="text"
        placeholder="Search events..."
        value={searchItem} 
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <ul> 
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <li key={event.id} className={classes.item}>
              <Link to={event.id}>
                <div className={classes.content}>
                  {event.title}
                  <img 
                    style={{
                      width: "200px",
                      height: "200px"
                    }} 
                    src={event.image} 
                    alt={event.title} 
                  /> 
                </div>
              </Link> 
            </li>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </ul>
    </>
  );
}

export default EventPage;
