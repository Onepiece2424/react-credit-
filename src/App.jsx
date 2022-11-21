import './App.css';
import ReactCredit from './components/ReactCredit';

// components
// import Credit from "./components/Credit"
// import Forming from './components/Forming';
// import AsyncAlert from './components/AsyncAlert';

// import ReduxLearn from './components/ReduxLearn'
// import SampleForm from './components/SampleForm'

// import ValidationForm from './components/ValidationForm';
// import {Container,Row,Col} from 'react-bootstrap';
import showResults from "./showResults";
// import HookForm from './components/HookForm';

function App() {

  return (
    <div className="App">
      <ReactCredit onSubmit={showResults} />
    </div>
  );
}

export default App;
