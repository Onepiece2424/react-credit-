import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SampleForm = ((props) => {

  const { handleSubmit } = props;

  console.log(props)
  console.log(handleSubmit)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>お名前:<Field name="name" component="input" type="text" /></label>
        </div>
        <button type="submit">送信</button>
      </form>
    </>
  )
})

export default reduxForm({
  form: 'sample-form',
})(SampleForm);
