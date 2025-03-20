import classes from './EventItem.module.css';
import { Link, useNavigate } from 'react-router-dom';

function EventItem({ event }) {
  const navigate = useNavigate(); 

  async function startDeleteHandler() {
    const proceed = window.confirm('Do you really want to delete this event?');

    if (proceed) {
      try {
        const response = await fetch(`http://localhost:8080/events/${event.id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete event.');
        }

        alert('Event deleted successfully!');
        navigate('/events'); // ✅ Redirect user after deletion

      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`/events/${event.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
