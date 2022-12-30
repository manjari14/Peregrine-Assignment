import React from 'react';
import './App.css';
import Modal from "./Modal";
import useModal from './UseModal';
import First from './First'

const App6 = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className='App'>
      <button className="button-default" onClick={toggle}>Sign in</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      >
        <First/>
        </Modal>
    </div>
  );
};

export default App6;