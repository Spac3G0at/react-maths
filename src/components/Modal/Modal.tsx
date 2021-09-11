import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

const rootRef = document.querySelector("#root") as Element;

const Modal = (props: any) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  const nodeRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.show) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "inherit";
    };
  }, [props.show]);

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </CSSTransition>,
    rootRef
  );
};

export default Modal;
