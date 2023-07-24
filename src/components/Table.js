import {Fragment} from "react";

function Table({data,config,keyFn}){
    const renderedHeaders=config.map((column)=>{
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th className='p-3' key={column.label}>{column.label}</th>
    })
    const renderedRow=data.map((rowData)=>{
        const reneredCell=config.map((cell)=>{
            return <td  key={cell.label} className='p-3'> {cell.render(rowData)}</td>
        })
        return <tr key={keyFn(rowData)} className='border-b-2 p-3'>{reneredCell}</tr>
    })
    return(
        <table className='table-auto  border-spacing-2 ml-10'>
            <thead  >
            <tr className='border-b-2'>{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRow}</tbody>
        </table>
    )
}
export default Table;