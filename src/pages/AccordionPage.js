import Accordion from "../components/Accordion";

function AccordionPage(){
    const itemList=[{id:"cddddmk",header:"React Course",
        content:"this course is awesome and help you to understand all basics of Javascript  it is your first step to start work"},
        {id:"njsds",header:"Javascript Course",content: "this course is awesome and help you to understand all basics of Javascript  it is your first step to start work" },
        {header: "Angular Course",content: "this course is awesome and help you to understand all basics of Angular  it is your first step to start work"}]
    return(
        <div>
            <Accordion items={itemList}></Accordion>

        </div>
    )
}
export default AccordionPage;