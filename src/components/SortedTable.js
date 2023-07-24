
import Table from "./Table";
import {useState} from "react";
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import useSort from "../hooks/use-sort";


function SortedTable(props){
    const{config,data}=props
    const {sortBy,sortOrder,sortedData,setOrder}=useSort(data,config)
    const getIcons=(label)=>{
        if(sortBy!==label||sortOrder===null) {
            return <div>
                <GoArrowUp/>
                <GoArrowDown/>
            </div>
        }
        else if(sortOrder==='asc'){

            return <GoArrowUp></GoArrowUp>}

       else if( sortOrder==='desc'){
         return  <GoArrowDown></GoArrowDown>
       }

    }
    const updatedConfig=config.map((column)=>{
       if(column.sortedValue){
           return {
               ...column,
               header:()=>(<th className='cursor-pointer hover:bg-gray-200' onClick={()=>{setOrder(column.label)}}>
                   <div className='flex items-center'>
                       {getIcons(column.label)}
                       {column.label}
                       can be sorted</div>
               </th>)
           }
       }
       else{
           return column;
       }
   })

   return <div>

        <Table {...props} config={updatedConfig}  data={sortedData}>{sortBy}-{sortOrder}</Table>
    </div>
}
/*function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    } else if (sortOrder === 'asc') {
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        );
    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
    }
}*/

export default SortedTable;