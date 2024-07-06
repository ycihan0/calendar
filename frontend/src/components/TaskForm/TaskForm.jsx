import "./TaskForm.scss";

const TaskForm = () => {
  return (
<div className="background_bg">
<div className="contact_section layout_padding">
    <div className="container">
       <h1 className="watchs_taital">01<br/>ETKİNLİK EKLE</h1>
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
                    <label className="input-label" htmlFor="startTime">Bitiş Tarihi: </label>
                    <input type="select-box" className="mail_text" placeholder="Bitiş Tarihi" name="Email"/>
                    <select className="mail_text"  name="options">
    <option value="option1">Seçenek 1</option>
    <option value="option2">Seçenek 2</option>
    <option value="option3">Seçenek 3</option>
  </select>
                 </div>
                   
                   
                   <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                   <div className="send_bt"><a href="#">SEND</a></div>
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
