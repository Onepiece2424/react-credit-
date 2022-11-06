import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";

const ReduxLearn = (() => {

  // useSelector
  const user = useSelector((state) => state.userReducer.user)
  const animal = useSelector((state) => state.animalReducer.animal)

  // dispatch
  const dispatch = useDispatch();

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
        {user.families.map((family) => {
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
