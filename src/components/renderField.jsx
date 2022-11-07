import React from "react"

const renderField = ((props) => {

  const { input, label, type, meta: { touched, error, warning } } = props

  return (
    <div>
      <label>{label}</label>
      <div className='alert-message'>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
});

export default renderField;
