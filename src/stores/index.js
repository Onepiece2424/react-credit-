import { createStore } from "redux";
// import { reducer as reduxFormReducer } from 'redux-form';

// initialStateの作成
const initialState = {
  count: 100,
  users: {
    name: "田中",
    job: "学生",
    age: 21,
    family: {
      father: "ひろし",
      mother: "かずえ",
      sister: "きょうこ"
    }
  },
  animal: {
    name: "ライオン",
    size: "2m",
    color: "yellow"
  }
};


// reducerの作成
// const reducer = combineReducers({
//   form: reduxFormReducer,
// });

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
