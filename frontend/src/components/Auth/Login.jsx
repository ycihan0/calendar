import { useFormik } from "formik";
import { userSchema } from "../../schema/userSchema";
import PropTypes from 'prop-types';

const Login = ({toggleForm}) => {

    const onSubmit = async (values, actions) => {
        // try {
        //   const res = await axios.post(
        //     `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        //     values
        //   );
        //   console.log(res.json());
        //   if (res.status === 200) {
        //     actions.resetForm();
        //     toast.success("Admin Login Success!");
        //     push("/admin/profile");
        //   }
        // } catch (err) {
        //   console.log(err);
        // }
      };
    
      const { values, errors, touched, handleSubmit, handleChange,  handleBlur } =
      useFormik({
        initialValues: {
            email: "",
        },
        onSubmit,
        validationSchema: userSchema,
      });
    
     
  return (
    <form onSubmit={handleSubmit} className="center">
    <h2 className="form-title" id="login" onClick={toggleForm}>
      <span>veya</span>Giriş yap
    </h2>
    <div className="form-holder">
      <input type="email" className="input" placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
      
    </div>
    {touched.email &&  (
        <span className="error-message">{errors.email}</span>
    )  }
    
    <button type="submit" className="submit-btn">Giriş yap</button>
  </form>
  )
}


export default Login
Login.propTypes = {
    toggleForm: PropTypes.func,
  };
