import '../styles/components/modal.css';

const Modal = ({ component, ishidden, onClick }) => {

    const cssClass = ishidden ? 'none' : 'block';

    return (
        <div id='modal' className={`${cssClass}`} onClick={onClick}>
            {component}
        </div>
    )
};

export default Modal;