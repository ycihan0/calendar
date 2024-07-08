import PropTypes from "prop-types";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/registerSchema";
import axios from "axios";
import { toast } from "react-toastify";

const Register = ({ toggleForm }) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users`,
        values
      );
      if (res.status === 201) {
        actions.resetForm();
        toast.success("Kayıt Başarılı");
        toggleForm();
      }
    } catch (error) {
      console.log(error);
      toast.error("Kullanıcı zaten kayıtlı");
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title" id="signup" onClick={toggleForm}>
        <span>veya</span>Üye ol
      </h2>
      <div className="form-holder">
        <input
          type="text"
          className="input"
          placeholder="Adınız"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && (
          <span className="error-message">{errors.username}</span>
        )}
        <input
          type="email"
          className="input"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && (
          <span className="error-message">{errors.email}</span>
        ) }
      </div>
      <button type="submit" className="submit-btn">
        Üye ol
      </button>
    </form>
  );
};

export default Register;
Register.propTypes = {
  toggleForm: PropTypes.func,
};
