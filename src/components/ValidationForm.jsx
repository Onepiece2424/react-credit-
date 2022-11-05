import React from 'react';
import { Field, reduxForm } from 'redux-form';

// validation
const required = value => value ? undefined : '必須項目です。'
const maxLength = max => value =>
  value && value.length > max ? `${max}文字以内でなければなりません。` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? '数字でなければなりません。' : undefined
const minValue = min => value =>
  value && value < min ? `${min}歳以上でなければなりません。` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'このアドレスは使用できません。' : undefined
const tooOld = value =>
  value && value > 65 ? '65歳以下でなければなりません。' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div className='alert-message'>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const ValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text"
        component={renderField} label="ユーザー名"
        validate={[ required, maxLength15 ]}
      />
      <Field name="email" type="email"
        component={renderField} label="Eメール"
        validate={email}
        warn={aol}
      />
      <Field name="age" type="number"
        component={renderField} label="年齢"
        validate={[ required, number, minValue18 ]}
        warn={tooOld}
      />
      <div>
        <button type="submit" disabled={submitting}>登録</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>クリア</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(ValidationForm)
