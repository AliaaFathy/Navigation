import {useEffect, useReducer, useState} from "react";
import Button from "../components/button";
import Panel from "../components/Panel";
import {produce} from "immer";
const  INCREMENT ='increment'
const  DECREMENT ='decrement'
const  VALUE_TO_ADD ='value-to-add'
const  VALUE_TO_ADD_TO_COUNTER ='value-to-add-to-counter'
function CounterPage({initialValue}){
    const reducer=(state,action)=>{

        switch(action.type){
            case INCREMENT:
                state.count=state.count+1
                return
            case DECREMENT:
                state.count= state.count - 1
                return
            case VALUE_TO_ADD:
                state.valueToAdd=action.payload
                return
            case VALUE_TO_ADD_TO_COUNTER:
                state.count=state.count+state.valueToAdd
                state.valueToAdd=0
                return
            default:
                return

        }

    }
    const[state,dispatch]=useReducer(produce(reducer),{
        count:initialValue,
         valueToAdd:0})

    const increment=()=>{
        dispatch({type:INCREMENT})
    }
    const decrement=()=>{
       dispatch({type:DECREMENT})
    }
    const onChange=(event)=>{
        const value=parseInt(event.target.value)||0
        dispatch({type:VALUE_TO_ADD,payload:value})
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        dispatch({type:VALUE_TO_ADD_TO_COUNTER})

    }
    return <div className='pl-10'>
        <Panel className='pl-10 m-3'>
        <h1 className='text-lg'>Count:{state.count}</h1>
        <div className='flex'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={onSubmit}>
            <label>Add a lot</label>
            <input className='p-1 m-3 bg-gray-50 border border-gray-200'
                   onChange={onChange}
            type='number'
            value={state.valueToAdd||''}/>
            <Button >Add it</Button>
        </form>
        </Panel>


    </div>
}
export default CounterPage;