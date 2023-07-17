import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({children,to,className,activeClass}){
    const{currentPath,navigate,handleSelection}=useNavigation()
    const handleClick=(event)=>{
        if(event.ctrlKey||event.metaKey){
            return;
        }
        handleSelection();
        event.preventDefault()
        navigate(to)
    }
    const classes=classNames('text-blue-500',className,
        currentPath===to&&activeClass)

    return (
        <a  className={classes} onClick={handleClick}>{children}</a>
    )
 }
 export default Link;