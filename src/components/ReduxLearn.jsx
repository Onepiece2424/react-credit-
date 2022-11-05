import React from 'react'
import { useSelector } from "react-redux";

const ReduxLearn = (() => {

  const count = useSelector((state) => state.count)

  return (
    <>
      <div>こんにちは。</div>
      <div>Appコンポーネントから持ってきた{count}</div>
    </>
  )
})

export default ReduxLearn;
