import {useEffect, useState} from "react";
import Button from "../components/button";
import useCounter from "../hooks/use-counter";

function CounterPage({initialValue}){
    const {counter,increment}=useCounter(initialValue)
    return <div className='pl-10'>
        <h1>counter:{counter}</h1>
        <Button onClick={increment}>Add</Button>
    </div>
}
export default CounterPage;