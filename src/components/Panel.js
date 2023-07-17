import classNames from "classnames";

function Panel({children,className,...rest}){
    const finalClassName=classNames(className,'border rounded p-5 shadow bg-white w-full')
    return(
        <div {...rest} className={finalClassName}>
            {children}
        </div>
    )
}
export default Panel