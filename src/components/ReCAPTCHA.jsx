import ReCAPTCHA from "react-google-recaptcha";

const recapture = ((field) => {

  const { meta: { touched, error } } = field;
  console.log(field)

  return (
    <>
       <ReCAPTCHA
         sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
         onChange={field.input.onChange}
       />
       <div><p className="text-danger">{ touched ? error : '' }</p></div>
    </>
  )
})

export default recapture;
