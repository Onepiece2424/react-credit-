import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux
import { Provider } from "react-redux";
import store from "./stores/index";

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// recapture v3
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

ReactDOM.render(
  <Provider store={store}>
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY_V3}>
      <App />
    </GoogleReCaptchaProvider>
  </Provider>,
  document.getElementById("root")
);
