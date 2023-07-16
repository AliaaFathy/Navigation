import Button from "../components/button";
import {GoAlert, GoCodespaces} from "react-icons/go";
function ButtonPage() {
    const handleClick = () => {
        console.log("yess")
    }
    const handleMouseLeave = () => {
        console.log("leave")
    }

    return (
        <div>
            <div>
                <Button type="primary" outlined rounded onClick={handleClick} className="m-3">
                    <GoCodespaces></GoCodespaces>
                    Primary</Button>
            </div>
            <div>
                <Button type="secondary" onMouseLeave={handleMouseLeave}>Secondary</Button>
            </div>
            <div>
                <Button type="success" rounded outlined>Success</Button>
            </div>
            <div>
                <Button type="warning">Warning</Button>
            </div>
            <div>
                <Button type="danger" rounded>
                    <GoAlert></GoAlert>
                    Danger
                </Button>

            </div>
        </div>
    )
}
export default ButtonPage