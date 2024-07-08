import { useFormik } from "formik";
import "./TaskForm.scss";
import { taskSchema } from "../../schema/taskSchema";
import { useState } from "react";

const TaskForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChangeOption = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };

  const onSubmit = async (values, actions) => {
   console.log("here")
    // try {
    //   const res = await axios.post(
    //     `${import.meta.env.VITE_API_BASE_URL}/users`,
    //     values
    //   );
    //   if (res.status === 201) {
    //     actions.resetForm();
    //     toast.success("Kayıt Başarılı");
    //     toggleForm();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Kullanıcı zaten kayıtlı");
    // }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        title: "",
        startDate: "",
        endDate: "",
      },
      onSubmit,
      validationSchema: taskSchema,
    });

  return (
    <div className="background_bg">
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="watchs_taital">
            01
            <br />
            OLAY EKLE
          </h1>
        </div>
        <div className="contact_section_2">
          <div className="container-fluid">
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <div className="mail_section_1">
                  <div className="input-group">
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Başlık"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.title && (
                    <span className="error-messages">{errors.title}</span>
                  )}
                  <div className="input-group">
                    <label className="input-label" htmlFor="startTime">
                      Başlangıç Tarihi:
                    </label>
                    <input
                      type="datetime-local"
                      className="mail_text"
                      placeholder="Başlangıç Tarihi"
                      name="startDate"
                      value={values.startDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.startDate && (
                      <span className="error-messages">{errors.startDate}</span>
                    )}
                  </div>
                  <div className="input-group">
                    <label className="input-label" htmlFor="startTime">
                      Bitiş Tarihi:
                    </label>
                    <input
                      type="datetime-local"
                      className="mail_text"
                      placeholder="Bitiş Tarihi"
                      name="endDate"
                      value={values.endDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.endDate && (
                      <span className="error-messages">{errors.endDate}</span>
                    )}
                  </div>
                  <div className="input-group">
                    <select
                      className="mail_text"
                      name="options"
                      value={selectedOption}
                      onChange={handleChangeOption}
                    >
                      <option value="" disabled>
                        Lütfen bir seçenek belirleyin
                      </option>
                      <option value="task">Bu bir görev🗒️</option>
                      <option value="event">Bu bir etkinlik🎉 </option>
                    </select>
                  </div>
                  <div type="submit" className="send_bt">
                    <a href="#">EKLE</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 padding_right_0">
                <div className="map_section">
                  <img src="src/assets/images/map-img.png" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
