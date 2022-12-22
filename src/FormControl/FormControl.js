import React from 'react';

const FormControl = ({labelTitle, inputId, inputType, name}) => {

  const handleFormChange = (event) =>{
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor={labelTitle}>{labelTitle}</label>
      <input onChange={handleFormChange} type={inputType} id={inputId} name={name} required/>
    </div>
  );
};

export default FormControl;