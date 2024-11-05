import classes from "./Modal.module.css"

function Modal({ children, isOpen, isClose }) {
  if (!isOpen) {
    return null;
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return <>
  <div className={classes.backdrop} onClick={isClose} >
    <dialog open className={classes.modal} onClick={stopPropagation}>{children}</dialog>
  </div>
 </>
}

export default Modal;
