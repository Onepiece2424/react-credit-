import { GoogleReCaptchaProvider,GoogleReCaptcha } from 'react-google-recaptcha-v3';
import {useRef} from 'react'

const Myapp = (() => {

  const capture = useRef(null)
  console.log(capture)

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY_V3}>
      <GoogleReCaptcha ref={capture} />
    </GoogleReCaptchaProvider>
  )
})

export default Myapp;
