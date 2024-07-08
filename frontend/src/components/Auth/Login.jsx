import { useFormik } from "formik";
import { userSchema } from "../../schema/userSchema";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from 'react-toastify';

const Login = ({ toggleForm }) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/login`,
        values
      );
      if (res.status === 200) {
        actions.resetForm();
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success('Giriş Başarılı')
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
      toast.error('Tekrar deneyiniz');
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit,
      validationSchema: userSchema,
    });

  return (
    <div className="center">
     
      <form onSubmit={handleSubmit}>
        <h2 className="form-title" id="login" onClick={toggleForm}>
          <span>veya</span>Giriş yap
        </h2>
        <div className="form-holder">
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {touched.email && <span className="error-message">{errors.email}</span>}

        <button type="submit" className="submit-btn">
          Giriş yap
        </button>
        
      </form>
    </div>
  );
};

export default Login;
Login.propTypes = {
  toggleForm: PropTypes.func,
};
