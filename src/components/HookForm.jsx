import React from 'react'
import { useForm } from 'react-hook-form';

const HookForm = (() => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='App'>
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' {...register('email')} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input id='email' {...register('password')} type='password' />
          </div>
          <button type='submit'>ログイン</button>
        </form>
      </div>
    </>
  )
})

export default HookForm;
