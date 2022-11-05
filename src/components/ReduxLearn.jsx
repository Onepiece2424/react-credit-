import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const ReduxLearn = (() => {

  // useSelector
  const user = useSelector((state) => state.userReducer.user)
  const fruits = useSelector((state) => state.fruitReducer.fruits)
  const count = useSelector((state) => state.countReducer.count)

  // dispatch
  const dispatch = useDispatch();
  const increase = () => {dispatch( {type: 'INCREASE_COUNT'}) }
  const decrease = () => {dispatch( {type: 'DECREASE_COUNT'})}

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
      <br></br>
      <br></br>
      <p>Count:{count}</p>
      <button onClick={increase}>カウントアップ</button>
      <button onClick={decrease}>カウントダウン</button>
    </>
  )
})

export default ReduxLearn;
