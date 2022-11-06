import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';

// initialStateの作成
const initialState = {
  count: 100,
  user: {
    name: "さとる",
    job: "学生",
    age: 21,
    familys: [
      { id: 1, attribute: "父", name: "のぼる", favorite_food: "ラーメン", favorite_number: 7 },
      { id: 2, attribute: "母", name: "かずえ", favorite_food: "カレー", favorite_number: 11 },
      { id: 3, attribute: "妹", name: "かりん", favorite_food: "すし", favorite_number: 9 },
    ],
    greeting: function() {
      console.log("おはよ")
    }
  },
  animal: [
    {
      name: "ライオン",
      size: 2,
      color: "yellow"
    },
    {
      name: "チーター",
      size: 1.5,
      color: "yellow"
    }
  ],
  fruits: [
    { id: 1, fruit_name: "りんご", fruit_color: "red", quantity: 3 },
    { id: 2, fruit_name: "みかん", fruit_color: "orange", quantity: 1 },
    { id: 3, fruit_name: "パイナップル", fruit_color: "yellow", quantity: 5 },
  ]
};


// reducerの作成
// const reducer = combineReducers({
//   form: reduxFormReducer,
// });

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
      default:
        return state;
  }
};

const userReducer = (state = initialState) => {
  return state
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANIMAL":
      return {
        animal: [...state.animal, action.payload],
      };
    default:
      return state
  }
};

const fruitReducer = (state = initialState) => {
  return state;
}

// combineReducersの作成
const reducer = combineReducers({
  countReducer,
  userReducer,
  animalReducer,
  fruitReducer,
  form: reduxFormReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// console.log(store.getState());

export default store;
