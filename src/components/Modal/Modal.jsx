import { Component } from "react"
import { ModalWindow, Overlay } from "./Modal.styled"
import { PropTypes } from 'prop-types';

export class Modal extends Component {
componentDidMount() {
    window.addEventListener('keydown', this.props.onEscPress);
};

componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onEscPress);
}
    render () {
    const {src, alt, onClick} = this.props;
        return (
            <Overlay onClick={onClick}>
                <ModalWindow>
                <img src={src} alt={alt} />
                </ModalWindow>
            </Overlay>
        )
    }
};

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onEscPress: PropTypes.func,
};

