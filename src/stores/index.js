import { createStore } from "redux";
// import { reducer as reduxFormReducer } from 'redux-form';

// initialStateの作成
const initialState = {
  count: 1,
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
