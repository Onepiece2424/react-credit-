import React from 'react'
import { useSelector } from "react-redux";

const ReduxLearn = (() => {

  const user = useSelector((state) => state.user)
  const fruits = useSelector((state) => state.fruits)

  return (
    <>
      <div>こんにちは。</div>
      <div>Storeから持ってきたデータ 「{user.family}」</div>
      <br></br>
      <br></br>
      <div>果物の配列をmapで回す。</div>
      <div>
        {fruits.map((fruit, i) => {
          return <p key={i}>{i + 1}番目の果物は、{fruit.fruit_name}です。数量は、{fruit.quantity}個です。</p>
        })}
      </div>
    </>
  )
})

export default ReduxLearn;
