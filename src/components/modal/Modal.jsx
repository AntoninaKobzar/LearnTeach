import style from './modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className={style.modal}>
        <div className={style['modal-overlay']} onClick={onClose}></div>
        <div className={style['modal-content']}>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;