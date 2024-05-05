import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact(){
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [comment, setComment] = useState('');
  const [anyMessage, setAnyMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'emailAddress'){
        setEmailAddress(value)
    }else if (name === 'fullName'){
        setFullName(value)
    }else { 
        setComment(value)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(emailAddress) || !fullName){
        setAnyMessage('Invalid name or email');
        return;
    }
        console.log(fullName,emailAddress,comment)
        setComment('');
        setFullName('');
        setEmailAddress('');
        setAnyMessage('Thanks!');
        return;
  }

    return(
      <div className='container text-center'>
        <h1>Contact me via Email</h1>
        <form className='form' onSubmit={handleFormSubmit}>
          <input
            value={fullName}
            name='fullName'
            onChange={handleInputChange}
            type='text'
            placeholder='Your Name'
          />
          <input
            value={emailAddress}
            name='emailAddress'
            onChange={handleInputChange}
            type='email'
            placeholder='Email'
          />
          <input
            value={comment}
            name='comment'
            onChange={handleInputChange}
            type='text'
            placeholder='Your Text'
          />
          <button type='submit'>
            Submit
          </button>
        </form>
        {anyMessage && (
          <div>
            <p className='any-text'>{anyMessage}</p>
          </div>
        )}
      </div>
    );
}
export default Contact;