import Table from "../components/Table";
import SortedTable from "../components/SortedTable";

function TablePage(){
    const data=[
        {name:'Apple',color:'bg-red-600',score:1},
        {name:'Orange',color:'bg-orange-500',score:5},
        {name:'Banana',color:'bg-yellow-300',score:3},
        {name:'Lime',color:'bg-green-400',score:10},
        {name:'mango',color:'bg-orange-400',score:15}]
    const congig=[
        {label:'Name',render:(fruit)=>fruit.name,sortedValue:(fruit)=>fruit.name},
        {label:'Color',render:(fruit)=><div className={`p-3 ${fruit.color}`}></div>},
        {label:'Score',render:(fruit)=>fruit.score,sortedValue:(fruit)=>fruit.score},
        {label: 'Squared Score',render:(fruit)=>fruit.score**2,sortedValue:(fruit)=>fruit.score**2}]
    const keyFn=(data)=>{
        return data.name
    }
return(
    <div>
        <SortedTable data={data} config={congig} keyFn={keyFn}></SortedTable>
    </div>
)
}
export default TablePage;