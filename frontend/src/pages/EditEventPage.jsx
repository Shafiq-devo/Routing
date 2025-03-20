import EventForm from '../components/EventForm';
import { useLoaderData } from 'react-router-dom';

function EditEventPage() {
    const data = useLoaderData(); // ✅ Call the function to get data

    return (
        <>
            <h1>Edit Event</h1>
            <EventForm event={data.event} /> {/* ✅ Pass the event data */}
        </>
    );
}

export default EditEventPage;
