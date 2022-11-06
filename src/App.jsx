import './App.css';

// components
// import Credit from "./components/Credit"
// import Forming from './components/Forming';
// import AsyncAlert from './components/AsyncAlert';
// import ReCAPTCHA from "./components/ReCAPTCHA"

import ReduxLearn from './components/ReduxLearn'
// import SampleForm from './components/SampleForm'

// import ValidationForm from './components/ValidationForm';
// import {Container,Row,Col} from 'react-bootstrap';
// import showResults from "./showResults";

function App() {

  return (
    <div className="App">
      <ReduxLearn />
      <br></br>
      {/* <Credit onSubmit={showResults} />
      <br></br>
      <br></br>
      <div className='recapture_icon'>
        <ReCAPTCHA />
      </div>

      <br></br>
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
      </div> */}
    </div>
  );
}

export default App;
