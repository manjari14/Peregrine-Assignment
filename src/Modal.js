import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Images/Image.png'

const Modal = ({ isShowing, hide, ...props }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className='modalContainer'>
            <div>
                <img src={Image}/>
            </div>
            <div className='modalChild'>
            {props.children}
            </div>
        </div>
          
    
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;