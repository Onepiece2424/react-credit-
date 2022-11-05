import { createStore, combineReducers } from "redux";
// import { reducer as reduxFormReducer } from 'redux-form';

// initialStateの作成
// const initialState = {
//   count: 100,
//   user: {
//     name: "田中",
//     job: "学生",
//     age: 21,
//     family: ["ひろし", "かずえ", "きょうこ"]
//   },
//   animal: {
//     name: "ライオン",
//     size: "2m",
//     color: "yellow"
//   },
//   fruits: [
//     { id: 1, fruit_name: "りんご", fruit_color: "red", quantity: 3 },
//     { id: 2, fruit_name: "みかん", fruit_color: "orange", quantity: 1 },
//     { id: 3, fruit_name: "パイナップル", fruit_color: "yellow", quantity: 5 },
//   ]
// };


// reducerの作成
// const reducer = combineReducers({
//   form: reduxFormReducer,
// });

const countReducer = (
  state = {
    count: 100
  }
) => {
  return state
};

const userReducer = (
  state = {
    user: {
      name: "田中",
      job: "学生",
      age: 21,
      family: ["ひろし", "かずえ", "きょうこ"]
    }
  }
) => {
  return state
};

const animalReducer = (
  state = {
    animal: {
      name: "ライオン",
      size: "2m",
      color: "yellow"
    }
  }
) => {
  return state
};

const fruitReducer = (
  state = {
    fruits: [
      { id: 1, fruit_name: "りんご", fruit_color: "red", quantity: 3 },
      { id: 2, fruit_name: "みかん", fruit_color: "orange", quantity: 1 },
      { id: 3, fruit_name: "パイナップル", fruit_color: "yellow", quantity: 5 },
    ]
  }
) => {
  return state;
}

// combineReducersの作成
const reducer = combineReducers({
  countReducer,
  userReducer,
  animalReducer,
  fruitReducer
})

const store = createStore(reducer);
console.log(store.getState());

export default store;
