import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import renderField from "./renderField";
import { Field, reduxForm } from 'redux-form';
import recapture from "./ReCAPTCHA";
// import ReCAPTCHA from "react-google-recaptcha";

// function
// import showResults from "./func/showResults";

// validation(importしてvalidationを適用できるかもしれない。以下の通りだとcomponentごとにvalidationを書かなければいけない。)
const required = value => value ? undefined : '必須項目です。'
const maxLength = max => value =>
  value && value.length > max ? `${max}文字以内でなければなりません。` : undefined
const maxLength16 = maxLength(16)

const CardoInfo = ((props) => {

  const { handleSubmit, pristine, reset, submitting, text } = props

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  // const capture = useRef(null);

  // const handleChange = () => {
  //   if (capture.current.getValue()) {
  //     console.log('成功')
  //     const aaa = capture.current.getValue()
  //     showResults(aaa);
  //   } else {
  //     console.log('失敗')
  //   }
  //   // return capture.current.getValue()
  // }

  return (
    <div className="App">
      <p>{text}</p>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
        component={renderField}
      />
      <form onSubmit={(handleSubmit)}>
        <div>
          <div>カード番号</div>
          <Field
            type="tel" name="number" placeholder="Card Number" value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            component={renderField}
            validate={[ required,maxLength16 ]}
          />
        </div>
        <div>
        <div>所有者</div>
          <Field
            type="text" name="name" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            component={renderField}
            validate={[ required ]}
          />
        </div>
        <div>
          <div>使用期限</div>
          <Field
            type="text" name="expiry" placeholder="MM/YY" value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            component={renderField}
            validate={[ required ]}
          />
        </div>
        <div>
          <div>セキュリティコード</div>
          <Field
            type="tel" name="cvc" placeholder="CVC" value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            component={renderField}
            validate={[ required ]}
          />
        </div>
        <div>
        <div>リキャプチャ</div>
          <Field
          name='captcharesponse'
          component={recapture}
          validate={[ required ]}
          />
          {/* <ReCAPTCHA
            name='captcharesponse'
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            ref={capture}
            onChange={handleChange}
          /> */}
        </div>
        <div>
          {/* <button type="submit" disabled={!number || !name || !expiry || !cvc }>登録</button> */}
          <button type="submit">登録</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>クリア</button>
        </div>
      </form>
    </div>
  );
})

export default reduxForm({
  form: 'CreditValidation'
})(CardoInfo)
