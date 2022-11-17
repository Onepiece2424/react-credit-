import React, { useState } from "react";

// クレカ
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

// redux-form
import { Field, reduxForm } from 'redux-form';
import renderField from "./renderField";

// recapture
import recapture from "./ReCAPTCHA";

// validation
const required = value => value ? undefined : '必須項目です。'
// const maxLength = max => value =>
//   value && value.length > max ? `${max}文字以内でなければなりません。` : undefined
// const maxLength15 = maxLength(15)
// const number = value => value && isNaN(Number(value)) ? '数字でなければなりません。' : undefined
// const minValue = min => value =>
//   value && value < min ? `${min}歳以上でなければなりません。` : undefined
// const minValue18 = minValue(18)
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'このアドレスは使用できません。' : undefined
// const tooOld = value =>
//   value && value > 65 ? '65歳以下でなければなりません。' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined


const Credit = ((props) => {

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [verify, IsVerify] = useState(false)

  const { handleSubmit, pristine, reset, submitting } = props

  const handleChange = () => {
    IsVerify(true)
  }

  return (
    <>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <p>クレカ登録</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>カード番号</div>
          <Field
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            component={renderField}
            validate={[ required ]}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div>
          <div>所有者</div>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            component={renderField}
            validate={[ required ]}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div>
          <div>使用期限</div>
          <Field
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={expiry}
            component={renderField}
            validate={[ required ]}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div>
          <div>セキュリティコード</div>
          <Field
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            component={renderField}
            validate={[ required ]}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div>
          <div>リキャプチャ</div>
          <Field
          name='captcharesponse'
          component={recapture}
          validate={[ required ]}
          onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={!verify}>登録</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>クリア</button>
        </div>
      </form>
    </>
  )
})

export default reduxForm({
  form: 'CreditValidation'
})(Credit)
