import "./TaskForm.scss";

const TaskForm = () => {
  return (
<div className="background_bg">
<div className="contact_section layout_padding">
    <div className="container">
       <h1 className="watchs_taital">01<br/>OLAY EKLE</h1>
    </div>
    <div className="contact_section_2">
       <div className="container-fluid">
          <div className="row">
             <div className="col-md-6">
                <div className="mail_section_1">
                <div className="input-group">
                    <input type="text" className="mail_text" placeholder="Başlık" name="title"/>
                </div>
                 <div className="input-group">
                    <label className="input-label" htmlFor="startTime">Başlangıç Tarihi: </label>
                    <input type="datetime-local" className="mail_text" placeholder="Başlangıç Tarihi" name="Phone Number"/>
                 </div>
                 <div className="input-group">
                    <label className="input-label" htmlFor="startTime">Bitiş Tarihi: </label>
                    <input type="datetime-local" className="mail_text" placeholder="Bitiş Tarihi" name="Email"/>
                 </div>
                   <div className="input-group">
                     <select className="mail_text"  name="options" defaultValue="">
                        <option value="" disabled>Lütfen bir seçenek belirleyin</option>
                        <option value="option1">Bu bir görev🗒️</option>
                        <option value="option2">Bu bir etkinlik🎉 </option>
                     </select>
                   </div>
                   <div className="send_bt"><a href="#">EKLE</a></div>
                </div>
             </div>
             <div className="col-md-6 padding_right_0">
                <div className="map_section"><img src="src/assets/images/map-img.png"/></div>
             </div>
          </div>
       </div>
    </div>
 </div>
 </div>
  )
}

export default TaskForm
