import {useState} from "react";
import { GoTriangleLeft,GoTriangleDown } from "react-icons/go";

function Accordion({items}){
    const [ExtendedIndex,setExtendedIndex]=useState(-1)
    const handleClick=(index)=>{
        if(ExtendedIndex===index){
            setExtendedIndex(-1)
        }
        else {
            setExtendedIndex(index)
        }
    }
           const renderedItem=items.map((item,index)=>{
               const isExtended =ExtendedIndex===index
               return(
                   <div key={index}>
                       <div >
                           <div className="flex items-center justify-between bg-gray-200 border border-gray-400 p-4 cursor-pointer ml-10" onClick={()=>handleClick(index)}>{item.header}
                              <span className='text-2xl'> {isExtended?<GoTriangleDown/>:<GoTriangleLeft/>}</span>
                           </div>
                           {isExtended&&<div className='p-6 border'>{item.content}</div>}
                       </div>
                   </div>
               )
           })
    return(
        <div>
            <div>{renderedItem}</div>
        </div>
    )
}
export default Accordion;