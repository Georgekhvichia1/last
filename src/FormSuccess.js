import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';

const FormSuccess = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    // <div className='form-content-right'>
    //   <h1 className='form-success'>We have received your request!</h1>
    //   <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
    // </div>
    <div>
      <div className='form-inputs'></div>
      <label className='form-label'>Name & LastName</label>
      <input
            className='form-input'
            type='text'
            name='username'
            placeholder=''
            value={values.date}
            onChange={handleChange}
          />

    </div>
  ); 
}
export default FormSuccess;
