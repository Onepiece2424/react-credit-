import React from 'react';
import { Field, reduxForm } from 'redux-form';

import renderField from './renderField';

const required = value => value ? undefined : '必須項目です。'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `${min}歳以上でなければなりません。` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const MyForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" label="ユーザー名" component={renderField} validate={[ required, maxLength15 ]} />
      <br></br>
      <Field name="email" type="email" label="Eメール" component={renderField} validate={email} warn={aol} />
      <br></br>
      <Field name="age" type="number" label="年齢" component={renderField} validate={[ required, number, minValue18 ]} warn={tooOld} />
      <br></br>
      <div>
        <button type="submit" disabled={submitting}>送信</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>クリア</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'myForm',
})(MyForm);
