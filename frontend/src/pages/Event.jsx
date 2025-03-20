import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  console.log(data); // Check if data is coming
  const events = data?.events || []; // Avoid errors if data is undefined
  

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://192.168.1.25:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events!' }), {
      status: 500,
    
    });
  }

  const data = await response.json(); // Parse the JSON
  return data; // Return the parsed data
}