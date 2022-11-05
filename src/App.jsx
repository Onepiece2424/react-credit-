import './App.css';

// components
import Credit from "./components/modules/Credit"
// import Forming from './components/Forming';
// import AsyncAlert from './components/AsyncAlert';
import ReCAPTCHA from "./components/ReCAPTCHA"

import ReduxLearn from './components/ReduxLearn'

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
    </div>
  );
}

export default App;
