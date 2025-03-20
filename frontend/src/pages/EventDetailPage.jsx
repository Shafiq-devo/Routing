import {useLoaderData} from 'react-router-dom'
import EventItem from '../components/EventItem'
function EventDetail(){
    // const params = useParams()
    // console.log("Params:", params); 
    // const id = params.id
    // return 
    // <>
    //  <h1>EventDetail </h1>
    // <ul>
    //     <li>Event id :{id}</li>
    //     <li>Event id :{id}</li>
    // </ul>
    // </>
const data=useLoaderData()

    return <EventItem event={data.event} ></EventItem>
}
export default EventDetail

export async function loader({requests,params}){
    const id = params.id;

  const response= await  fetch(`http://192.168.1.25:8080/events/${id}` )
  return response
    
}




