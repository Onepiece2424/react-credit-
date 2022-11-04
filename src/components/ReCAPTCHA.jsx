import ReCAPTCHA from "react-google-recaptcha";

const recapture = (() => {

  function greeting() {
    console.log("旅に出るぞ!!")
  }

  return (
    <>
       <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={greeting} />
    </>
  )
})

export default recapture;
