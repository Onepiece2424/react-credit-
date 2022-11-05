import React from 'react'
import { useSelector } from "react-redux";

const ReduxLearn = (() => {

  // console.log(state.)
  const user = useSelector((state) => state.userReducer.user)
  const fruits = useSelector((state) => state.fruitReducer.fruits)

  return (
    <>
      <div>こんにちは。</div>
      <div>Storeから持ってきたデータ 「{user.family}」</div>
      <br></br>
      <br></br>
      <div>果物の配列をmapで回す。</div>
      <div>
        {fruits.map((fruit) => {
          return <p key={fruit.id}>{fruit.id}番目の果物は、{fruit.fruit_name}です。数量は、{fruit.quantity}個です。</p>
        })}
      </div>
    </>
  )
})

export default ReduxLearn;
