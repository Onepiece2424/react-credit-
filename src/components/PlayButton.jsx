import React,{useState,useEffect} from 'react'
import { reduxForm, Field, FormSection, Form } from 'redux-form';
import renderField from "./renderField";

// recapture3
import MyApp from './Myapp';

const required = value => value ? undefined : '必須項目です。'

const PlayButton = ((props) => {

  // propsからhandleSubmitのみ取り出す
  const { handleSubmit } = props

  // ボタンクリックごとに変化するstateの設定
  const [count, setCount] = useState()

  useEffect(() => {
    function sampleResolve(value) {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(value);
          }, 2000);
      })
    }

    async function sample() {
      const array =[5, 10, 15];
      const promiseAll = await Promise.all(array.map(async (value) => {
          return await sampleResolve(value) * 2;
    }));

      return promiseAll;
    }

    sample().then(([a, b, c]) => {
        console.log(a, b, c);
    });

    // 非同期処理
    console.log('ログ1');
    (async() => {
        console.log('ログ2');
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('ログ3');
    })()
    console.log('ログ4');
  },[count])


  return (
    <>
      <div>個人情報送信フォーム</div>
      <Form onSubmit={handleSubmit}>
        <Field label='名前' name='username' component={renderField} validate={[ required ]} />
        <Field label='年齢' name='age' component={renderField} validate={[ required ]} />
        <Field label='仕事' name='job' component={renderField} validate={[ required ]} />
        <FormSection name='country'>
          <Field label='出身国' name='birth_country' component={renderField} validate={[ required ]} />
        </FormSection>
        <FormSection name='friends'>
          <FormSection name='real_friends'>
            <Field label='友達1' name='real_friend1' component={renderField} validate={[ required ]} />
            <Field label='友達2' name='real_friend2' component={renderField} validate={[ required ]} />
            <Field label='友達3' name='real_friend3' component={renderField} validate={[ required ]} />
          </FormSection>
          <FormSection name='student_friends'>
            <Field label='友達1' name='student_friend1' component={renderField} validate={[ required ]} />
            <Field label='友達2' name='student_friend2' component={renderField} validate={[ required ]} />
          </FormSection>
        </FormSection>
        <button type='submit' onClick={() => setCount(count + 1)}>送信</button>
        <MyApp />
      </Form>
    </>
  )
})

export default reduxForm({
  form: 'PlayForm'
})(PlayButton)
