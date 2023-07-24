import Modal from "../components/Modal";
import Button from "../components/button";
import {useState} from "react";

function ModalPAge(){
    const [openModal,setOpenModal]=useState(false)
    const handleClick=()=>{
        setOpenModal(true)
    }
   const handleClose=()=>{
        setOpenModal(false)
    }
    const actionBar=<Button onClick={handleClose} type='success' rounded > I Accept</Button>

    return(
        <div>
        <Button onClick={handleClick} type='primary' rounded>Open Modal</Button>
            {openModal && <Modal handleClose={handleClose} actionBar={actionBar}>
                <p> Here is an important agreement for you to accept</p>
            </Modal>}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
        </div>
    )
}
export default ModalPAge;