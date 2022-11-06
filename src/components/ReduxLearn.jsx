import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";

const ReduxLearn = (() => {

  // useSelector
  const user = useSelector((state) => state.userReducer.user)
  const fruits = useSelector((state) => state.fruitReducer.fruits)
  const count = useSelector((state) => state.countReducer.count)
  const animal = useSelector((state) => state.animalReducer.animal)

  // dispatch
  const dispatch = useDispatch();
  const increase = () => {dispatch( {type: 'INCREASE_COUNT'}) }
  const decrease = () => {dispatch( {type: 'DECREASE_COUNT'})}

  // state
  const [name, setName] = useState("");

  // 新しいstate入力
  const inputText = (e) => {
    setName(e.target.value);
  };

  // stateの変更
  const addAnimal = () => {
    if (!name) return;

    dispatch({
      type: "ADD_ANIMAL",
      payload: {
        name
      },
    });
    setName("");
  };

  return (
    <>
      <div>Storeのuser情報の表示</div>
      <div>名前:{user.name}</div>
      <div>職業:{user.job}</div>
      <div>年齢:{user.age}</div>
      <div>家族構成:
        {user.familys.map((family) => {
          return (
            <>
              <p key={family.id}>{user.name}の{family.attribute}は、{family.name}です。</p>
              <p>好きな食べ物は、{family.favorite_food}で、好きな数字は、{family.favorite_number}です。</p>
            </>
          )
        })}
      </div>
      <div>あいさつ:{user.greeting()}</div>
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
      <br></br>
      <br></br>
      <p>Storeのanimal情報の追加</p>
      <input type="text" label="名前" value={name} onChange={inputText} />
      <button onClick={addAnimal}>追加</button>
      <p>{animal.map((animal) => {
        return (
          <>
            <p>{animal.name}</p>
          </>
        )
      })}</p>
    </>
  )
})

export default ReduxLearn;
