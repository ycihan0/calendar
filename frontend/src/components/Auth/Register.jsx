import PropTypes from "prop-types";
import { useFormik } from "formik"; 
import { registerSchema } from "../../schema/registerSchema";

const Register = ({ toggleForm }) => {

    const onSubmit=()=>{
        console.log("burda")
    }

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  return (
     <form >
          <h2 className="form-title" id="signup" onClick={toggleForm}>
            <span>veya</span>Üye ol
          </h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
          </div>
          <button className="submit-btn">Üye ol</button>
     </form>
  )
}

export default Register
Register.propTypes = {
    toggleForm: PropTypes.func,
  };
