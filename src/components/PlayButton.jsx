import React from 'react'
// import { Button } from '@material-ui/core';
import { reduxForm, Field, FormSection, Form } from 'redux-form';
import renderField from "./renderField";

const required = value => value ? undefined : '必須項目です。'

const PlayButton = ((props) => {

  const { handleSubmit } = props

  function sampleResolve(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    })
  }

  async function sample() {
    const result = await sampleResolve(5);
    return result + 5;
  }

  sample().then(result => {
    console.log(result);
  });

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
          <Field label='友達1' name='friend1' component={renderField} validate={[ required ]} />
          <Field label='友達2' name='friend2' component={renderField} validate={[ required ]} />
          <Field label='友達3' name='friend3' component={renderField} validate={[ required ]} />
        </FormSection>
        <button type='submit'>送信</button>
      </Form>
    </>
  )
})

export default reduxForm({
  form: 'PlayForm'
})(PlayButton)
