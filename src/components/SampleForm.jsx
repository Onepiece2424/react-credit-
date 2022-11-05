import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SampleForm = ((props) => {

  const { handleSubmit } = props;

  console.log(props)
  console.log({handleSubmit})

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>お名前:<Field name="name" component="input" type="text" /></label>
        </div>
        <div>
          年齢:
          <label>
            <Field name="age" component="input" type="radio" value="10-19" />10~19歳
          </label>
          <label>
            <Field name="age" component="input" type="radio" value="20-39" />20〜39歳
          </label>
          <label>
            <Field name="age" component="input" type="radio" value="40-" />40歳以上
          </label>
        </div>
        <div>
          <label>希望プラン：
            <Field name="plan" component="select">
              <option value="A">プランA</option>
              <option value="B">プランB</option>
              <option value="C">プランC</option>
            </Field>
          </label>
        </div>
        <button type="submit">送信</button>
      </form>
    </>
  )
})

export default reduxForm({
  form: 'sample-form',
})(SampleForm);
