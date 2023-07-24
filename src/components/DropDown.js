import {useState,useEffect, useRef} from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


function DropDown({list,onChange,value}){
    const [isOpen,setIsOpen]=useState();
    const divEl = useRef();
    console.log(divEl)

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return
            }
                if (!divEl.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
    const handleClickSelection=(option)=>{
        onChange(option)
        setIsOpen(false)
    }
    const renderedList=list.map((item)=>{
        return <div   className='font-2xl p-5 hover:bg-sky-100 cursor-pointer'
                      onClick={()=>handleClickSelection(item.option)}>{item.option}</div>
    })

    return (
        <div ref={divEl} className='w-48 relative ml-10'>
            <Panel className='flex justify-between items-center font-2xl' onClick={handleClick}>{value}<GoChevronDown
                className='text-2xl'/></Panel>

            {isOpen && <Panel className='absolute top-full '>{renderedList}</Panel>}
        </div>
    );
}
export default DropDown;