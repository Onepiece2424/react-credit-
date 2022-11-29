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
// import ApiFetch from './components/ApiFetch';
import ReactCredit from './components/ReactCredit';
import PlayButton from './components/PlayButton';

// function
import showResults from "./components/func/showResults";

function App() {

  return (
    <div className="App">
      <PlayButton onSubmit={showResults} />
      <ReactCredit />
    </div>
  );
}

export default App;
