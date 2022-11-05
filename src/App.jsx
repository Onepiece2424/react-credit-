import './App.css';

// components
import Credit from "./components/modules/Credit"
// import Forming from './components/Forming';
// import AsyncAlert from './components/AsyncAlert';
import ReCAPTCHA from "./components/ReCAPTCHA"

import ReduxLearn from './components/ReduxLearn'
import store from "./stores/index";
import { connect } from "react-redux";

function App({count}) {

  console.log(store)
  console.log(store.getState())
  console.log(store.getState().count)

  return (
    <div className="App">
      <Credit />
      <br></br>
      <br></br>
      <p>Count:{count}</p>
      <div className='recapture_icon'>
        <ReCAPTCHA />
      </div>
      <ReduxLearn />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
