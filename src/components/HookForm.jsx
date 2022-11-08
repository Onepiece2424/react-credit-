import React from 'react'
import { useForm } from 'react-hook-form';

const HookForm = (() => {

  const { register, handleSubmit, formState: {errors}, } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='App'>
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' {...register('email', {required: true})} />
            { errors.email && <div>入力が必須の項目です。</div>}
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input id='email' {...register('password', {required: true})} type='password' />
            { errors.email && <div>入力が必須の項目です。</div>}
          </div>
          <button type='submit'>ログイン</button>
        </form>
      </div>
    </>
  )
})

export default HookForm;
