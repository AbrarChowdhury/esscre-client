import React,{useState} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
function ModalImage(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <img onClick={() => setIsOpen( true )} src={props.imageUrl} alt={props.name}/>
            {isOpen && (
            <Lightbox
              mainSrc={props.imageUrl}
              onCloseRequest={() => setIsOpen( false )}
            />
          )}
        </div>
    )
}

export default ModalImage
