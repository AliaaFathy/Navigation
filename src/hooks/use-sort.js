import {useState} from "react";

function useSort(data,config){
    const[sortBy,setSortBy]=useState(null)
    const[sortOrder,setSortOrder]=useState(null)
    const setOrder=(label)=>{
        if(label!=sortBy){
            setSortOrder('asc')
            setSortBy(label)
            return;
        }
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }
    let sortedData=data
    if(sortOrder&&sortBy){
        const {sortedValue}=config.find((column)=> column.label===sortBy)
        sortedData=[...data].sort((a,b)=>{
            const valueA=sortedValue(a)
            const valueB=sortedValue(b)
            const reversedOrder=sortOrder==='asc'?1:-1
            if(typeof valueA==='string'){
                return valueA.localeCompare(valueB)*reversedOrder
            }
            else{
                return (valueA-valueB)*reversedOrder;
            }
        })
    }
    return{
        sortBy,
        sortOrder,
        sortedData,
        setOrder
    }
}
export default useSort;