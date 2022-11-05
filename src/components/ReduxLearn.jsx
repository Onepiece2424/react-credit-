import React from 'react'
import { useSelector } from "react-redux";

const ReduxLearn = (() => {

  const users = useSelector((state) => state.users)

  return (
    <>
      <div>こんにちは。</div>
      <div>Storeから持ってきたデータ 「{users.family.mother}」</div>
    </>
  )
})

export default ReduxLearn;
