import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";
function NewEventPage() {
  
  return (
    <>
  

      <p>shafiq</p>
      <EventForm event={{}} /> 
    </>
  );
}

export default NewEventPage;
export  const action = async({request}) =>{
    const data = await request.formData();

    
    const eventdata = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description'),
    };

    console.log(eventdata)
  

    const response = await fetch("http://localhost:8080/events", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventdata),
    });
      
  //   if(!response.ok){
        
  //   }
  
   return redirect('/events')
  }
  