import {useState} from "react";
import DropDown from "../components/DropDown";

function DropDownPage(){
    const [option,setOption]=useState('Select...')
    const list=[{option:'Red',value:'red'},{option:'Green',value:'green'},{option:'Blue',value: 'blue'}]
    const onSelect=(option)=>{
        setOption(option)
    }
    return(
        <div>
            <DropDown list={list} onChange={onSelect} value={option}/>
        </div>
    )
}
export default DropDownPage