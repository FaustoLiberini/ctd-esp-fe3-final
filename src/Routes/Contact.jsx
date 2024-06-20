import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../utils/global.context';

const Contact = () => {
  const {state} = useContext(ContextGlobal);

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <div className={themeClass}>
      <div className='contact'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      </div>
    </div>
  );
}

export default Contact;