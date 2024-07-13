import { useFormik } from "formik";
import "./TaskForm.scss";
import { taskSchema } from "../../schema/taskSchema";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TaskForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
   const user = JSON.parse(localStorage.getItem("user"));
   if (user && user.id) {
     setUserId(user.id);
   }
 }, []);

  const handleChangeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = async (values, actions) => {
   values.userId = userId;
    if (selectedOption === "task") {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/tasks`,
          values
        );
        if (res.status === 201) {
          actions.resetForm();
          toast.success("Görev Başarıyla Eklendi");
        }
      } catch (error) {
        console.log(error);
        toast.error("Birşeyler ters gitti.");
      }
    }else if (selectedOption === "event") {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/events`,
          values
        );
        if (res.status === 201) {
          actions.resetForm();
          toast.success("Etkinlik Başarıyla Eklendi");
        }
      } catch (error) {
        console.log(error);
        toast.error("Birşeyler ters gitti.");
      }
    } else {
      toast.error("Lütfen form verilerini kontrol ediniz");
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        title: "",
        startDate: "",
        endDate: "",
        description: "",
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
            PLAN EKLE
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
                    <label className="input-label" htmlFor="startTime">
                      Açıklama:
                    </label>
                    <input
                      className="mail_text"
                      placeholder="Bir açıklama giriniz."
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.description && (
                      <span className="error-messages">{errors.description}</span>
                    )}
                  </div>
                  <div className="input-group">
                    <label className="input-label" htmlFor="startTime">
                      Seçiniz:
                    </label>
                    <label className="mail_text">
                      <input
                        type="radio"
                        name="options"
                        value="task"
                        className="radio-input"
                        checked={selectedOption === "task"}
                        onChange={handleChangeOption}
                      />
                      Bu bir görev🗒️
                    </label>
                    <label className="mail_text">
                      <input
                        type="radio"
                        name="options"
                        value="event"
                        checked={selectedOption === "event"}
                        className="radio-input"
                        onChange={handleChangeOption}
                      />
                      Bu bir etkinlik🎉
                    </label>
                  </div>
                  
                  <button type="submit" className="button-submit">EKLE</button>
                </div>
              </div>
              <div className="col-md-6 padding_right_0">
                <div className="map_section">
                  <img src="src/assets/images/task12.png"  />
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
