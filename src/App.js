import Button from "./components/button";
import { GoAlert ,GoCodespaces} from "react-icons/go";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import {useContext, useState} from "react";
import Route from "./components/Route";
import Link from "./components/Link";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/dropDownPage";
import ButtonPage from "./pages/buttonPage";
import SideBar from "./components/SideBar";
import { GrMenu } from "react-icons/gr";
import NavigationContext from "./context/navigation";
import useNavigation from "./hooks/useNavigation";


function App(){
    const{menuShow,handleSelection}=useNavigation();
   return(
       <div className='container mx-auto grid grid-cols-6 mt-4'>
           {menuShow&&<SideBar></SideBar>}
           <button className=' ml-3 absolute  text-blue-600'  onClick={handleSelection}><GrMenu className='text-xl'/>
           </button>
          <Route path='/Accordion'>
              <AccordionPage></AccordionPage>
          </Route>
           <Route path='/dropDown'>
               <DropDownPage></DropDownPage>
           </Route>
           <Route path='/button'>
               <ButtonPage></ButtonPage>
           </Route>
       </div>
   )
}
export default App
