import Button from "./components/button";
import { GoAlert ,GoCodespaces} from "react-icons/go";
import Accordion from "./components/Accordion";


function App(){
    const itemList=[{id:"cddddmk",header:"React Course",
        content:"this course is awesome and help you to understand all basics of Javascript  it is your first step to start work"},
        {id:"njsds",header:"Javascript Course",content: "this course is awesome and help you to understand all basics of Javascript  it is your first step to start work" },
        {header: "Angular Course",content: "this course is awesome and help you to understand all basics of Angular  it is your first step to start work"}]
   return(
       <div>
           <Accordion items={itemList}></Accordion>

       </div>
   )
}
export default App
