import { GoogleReCaptchaProvider,GoogleReCaptcha } from 'react-google-recaptcha-v3';

const Myapp = (() => {

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY_V3}>
      <GoogleReCaptcha />
    </GoogleReCaptchaProvider>
  )
})

export default Myapp;
