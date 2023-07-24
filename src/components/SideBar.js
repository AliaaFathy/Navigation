import Link from "./Link";

function SideBar(){
    const links=[{label:'Accordion',path:'/Accordion'},
        {label:'DropDown List',path:'/dropDown'},
        {label:'Button',path:'/button'},{label:'modal',path:'/modal'},{label:'Table',path:'/table'},{label: 'Counter',path: '/counter'}]
    const renderedLinks=links.map((link)=>{
        return <Link className='cursor-pointer' activeClass='font-bold border-l-2 pl-2  border-l-blue-500 items-start ' key={link.label} to={link.path} >{link.label}</Link>
    })
    return(<div className=' flex flex-col top-0 ml-10 items-start'>{renderedLinks}</div>)
}
export default SideBar;