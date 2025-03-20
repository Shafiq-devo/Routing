import MainNavigation from '../components/MainNavigation.js'
import {Outlet,useNavigation} from 'react-router-dom'
function Rootlayout (){

return <>
{/* {navigation.state==='loading' && <p>Loading</p> } */}
<MainNavigation/>
<main>
    <Outlet/>
</main>
</>
}
export default Rootlayout
