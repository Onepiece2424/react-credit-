import React from "react"
import { FormGroup,Col,FormLabel } from 'react-bootstrap';

const renderField = ({input,label,type,placeholder,meta: {touched, error, warning}}) => {

  const validationState = error ? 'error' : warning ? 'warning' : 'success';

  return (
    <FormGroup controlId={input.name} validationState={touched ? validationState : null}>
      <Col componentClass={FormLabel} xs={6}>{label}</Col>
      <Col xs={6}>
        <input {...input} id={input.name} placeholder={placeholder} type={type} className={'form-control'}/>
        {
          touched && error &&
          <div className="alert-message">
            <br></br>
            {error}
          </div>
        }
      </Col>
    </FormGroup>
  )
};

export default renderField;
