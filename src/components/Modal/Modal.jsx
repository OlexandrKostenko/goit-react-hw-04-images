import { useEffect } from "react"
import { ModalWindow, Overlay } from "./Modal.styled"
import { PropTypes } from 'prop-types';

export const Modal = ({src, alt, onClick, onEscPress}) => {

    useEffect(() => {
        window.addEventListener('keydown', onEscPress);
    
        return () => { window.removeEventListener('keydown', onEscPress) }
    });
    
        return (
            <Overlay onClick={onClick}>
                <ModalWindow>
                    <img src={src} alt={alt} width='1024px'/>
                </ModalWindow>
            </Overlay>
        )
    };

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onEscPress: PropTypes.func,
};

