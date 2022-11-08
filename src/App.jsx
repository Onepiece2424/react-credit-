import './App.css';

// components
import Credit from "./components/Credit"
import Forming from './components/Forming';
import AsyncAlert from './components/AsyncAlert';

import ReduxLearn from './components/ReduxLearn'
import SampleForm from './components/SampleForm'

import ValidationForm from './components/ValidationForm';
import {Container,Row,Col} from 'react-bootstrap';
import showResults from "./showResults";
import HookForm from './components/HookForm';

function App() {

  return (
    <div className="App">
      <Credit onSubmit={showResults} />
      <br></br>
      <br></br>
      <HookForm />
      <br></br>
      <br></br>
      <ReduxLearn />
      <br></br>
      <SampleForm onSubmit={showResults} />
      <br></br>
      <br></br>
      <div>
        <header className="App App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container style={{padding: 15}}>
          <Row>
            <Col sm={10}>
              <h3>フォーム画面</h3>
              <ValidationForm onSubmit={showResults}/>
            </Col>
          </Row>
        </Container>
      </div>
      <AsyncAlert />
      <Forming />
    </div>
  );
}

export default App;
