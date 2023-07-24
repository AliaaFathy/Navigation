import {useEffect, useState} from "react";

function useCounter(initialValue){
    const[counter,setCounter]=useState(initialValue);
    const increment=()=>{
        setCounter(counter+1)
    }
    useEffect(()=>{
        console.log(counter)
    },[counter])
    return {
        counter,increment
    }
}
export default useCounter;