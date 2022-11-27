// css
import './App.css';

// components
// import Credit from "./components/Credit"
// import Forming from './components/Forming';
// import AsyncAlert from './components/AsyncAlert';
// import ReduxLearn from './components/ReduxLearn'
// import SampleForm from './components/SampleForm'
// import ValidationForm from './components/ValidationForm';
// import {Container,Row,Col} from 'react-bootstrap';
// import HookForm from './components/HookForm';
import ReactCredit from './components/ReactCredit';
import ApiFetch from './components/ApiFetch';

function App() {

  return (
    <div className="App">
      <ReactCredit />
      <ApiFetch />
    </div>
  );
}

export default App;
