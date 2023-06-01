import React from "react";
import ReactDOM from "react-dom";

type ModalProps =  {isShowing: Boolean, onClose: () => void, children : React.ReactNode}

const Modal = ({ isShowing, onClose, children }:ModalProps) => {
    console.log("isShowing", isShowing)
  if (!isShowing) {
    return null;
  }
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay" onClick={onClose} />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header"></div>
          <div>{children}</div>
        </div>
      </div>
    </React.Fragment>,
    document.body
  );
};

export default Modal;
