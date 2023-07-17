import {createContext, useEffect, useState} from "react";

const NavigationContext=createContext()
function NavigationProvider({children}){
    const [currentPath,setCurrentPath]=useState(window.location.pathname)
    const [menuShow,setMenuShow]=useState(false)
    const handleSelection=()=>{
        setMenuShow(!menuShow)

    }
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);
    const navigate=(to)=>{
        window.history.pushState({},'',to)
        setCurrentPath(to)
    }
    return(
        <NavigationContext.Provider value={{currentPath,navigate,handleSelection,menuShow}}>
            {children}
        </NavigationContext.Provider>
    )

}
export {NavigationProvider}
export default NavigationContext