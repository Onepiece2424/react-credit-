import './App.css';

// components
import Credit from "./components/modules/Credit"
// import Forming from './components/Forming';
// import AsyncAlert from './components/AsyncAlert';
import ReCAPTCHA from "./components/ReCAPTCHA"

import ReduxLearn from './components/ReduxLearn'
import store from "./stores/index";

function App() {
  return (
    <div className="App">
      <Credit />
      <br></br>
      <br></br>
        <div className='recapture_icon'>
          <ReCAPTCHA />
        </div>
        <ReduxLearn />
        <p>Count:{store.getState().count}</p>
      {/* <br></br>
      <br></br>
        <Forming />
      <br></br>
      <br></br>
        <AsyncAlert /> */}
    </div>
  );
}

export default App;
