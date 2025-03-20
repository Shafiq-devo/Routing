
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/Homepage';
import EventPage from './pages/EventsPage.jsx'
// import { eventsLoader } from './pages/Event.jsx';
import NewEventPage ,{action as eventaction} from './pages/NewEventPage.jsx'
import EventRoot from './pages/EventRoot.jsx';
import Rootlayout from './pages/Root.jsx'
import EventDetail , { loader as eventdetailloader} from './pages/EventDetailPage.jsx';
import Errorshowing from './pages/Error.jsx';
import { loader as eventsLoader } from './pages/Event'; // Import loader
import EditEventPage from './pages/EditEventPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    errorElement: <Errorshowing />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events/',
        element: <EventRoot />,
        children: [
          { index: true, element: <EventPage />, loader: eventsLoader }, // Use loader here
            { path: ':id', element: <EventDetail />, loader: eventdetailloader },
            { path: ':id/edit', element: <EditEventPage />, loader: eventdetailloader },
            { path: 'new', element: <NewEventPage />  , action:eventaction},
 
        ],
      },
    ],
  },
]);

    // ] },
   


function App() {
  return <RouterProvider router={router} />
}

export default App;
