import axios from 'axios';
import { TextInput } from '../TextInput/TextInput';
import './ContactForm.scss'
import attachLogo from '../../images/teenyicons_attach-solid.svg';
import rightArrow from '../../images/bi_arrow-right-short.svg';
import { ChangeEvent, useState } from 'react';
import { port } from '../../config.js';
import { Loader } from '../Loader/Loader';

interface formData {
  name: string;
  email: string;
  text: string;
}
export const ContactForm = () => {
  const defaultFormValue: formData = {
    name: '',
    email: '',
    text: '',
  }
  const [formData, setFormData] = useState<formData>(defaultFormValue);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDataClear = () => {
    setFormData(defaultFormValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`http://localhost:${port}/send-email`, formData);
      alert('Email sent successfully');
      handleDataClear();
    } catch (error) {
      console.error(error);
      alert('Email could not be sent');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <form action="" onSubmit={handleSubmit}>
        <TextInput
          type='text'
          required
          label='What’s your name?'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          type='email'
          required
          label='Your email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type='text'
          required
          label='Tell me about your project'
          name='text'
          value={formData.text}
          onChange={handleChange}
        />
        <div className='contactForm__buttonsContainer'>
          <button className='contactForm__button' type='submit'>Get a Quote</button>
          <div className='buttons'>
            <div className='attach__container'>
              <label htmlFor="fileInput">
                <img className='buttons__extra' src={attachLogo} alt="attach file" />
              </label>
              <input style={{display: 'none'}} type="file" id='fileInput'/>
            </div>
            <a href="#/">
              <img src={rightArrow} alt="next" />
            </a>
          </div>
        </div>
      </form>
    </>
  );
}