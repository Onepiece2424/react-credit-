import React from "react"
import { FormGroup,Col,FormLabel } from 'react-bootstrap';

const renderField = ({input,label,type,placeholder,meta: {touched, error, warning}}) => {

  const validationState = error ? 'error' : warning ? 'warning' : 'success';

  return (
    <FormGroup controlId={input.name} validationState={touched ? validationState : null}>
      <Col componentClass={FormLabel} sm={2}>{label}</Col>
      <Col sm={5}>
        <input {...input} id={input.name} placeholder={placeholder} type={type} className={'form-control'}/>
        {
          touched && error &&
          <div>{error}</div>
        }
      </Col>
    </FormGroup>
  )
};

export default renderField;
