import ReactDOM from 'react-dom';
import {useEffect} from "react";
function Modal({handleClose,children,actionBar}){
    const handleClick=()=>{
        handleClose();
    }
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        return()=>{
            document.body.classList.remove('overflow-hidden');
        }
    },[])
 return ReactDOM.createPortal(


    <div>
        <div onClick={handleClick} className='fixed inset-0 bg-gray-200 opacity-80'></div>
        <div className='fixed inset-60 p-10 bg-white'>
            <div className='flex flex-col h-full justify-between'>{children}
                <div className='flex justify-end'>{actionBar}</div>
            </div>
        </div>
    </div>, document.querySelector('.modal-container'))
}
export default Modal