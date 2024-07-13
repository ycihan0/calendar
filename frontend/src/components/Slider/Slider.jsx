import { useNavigate } from "react-router-dom"


const Slider = () => {
   const navigate=useNavigate();
  return (
    <div className="banner_section layout_padding">
    <div id="main_slider" className="carousel slide" data-ride="carousel">
       <div className="carousel-inner">
          <div className="carousel-item active">
             <div className="container">
                <h1 className="banner_taital">Planlar</h1>
                <p className="banner_text">Hayatınızı düzenlemenin en pratik yolu! Takvim Entegrasyonu Sistemi ile planlı yaşayın ve zamanınızı verimli kullanın. </p>
                <div className="read_bt"><a href="#"  onClick={(e) => {e.preventDefault(); navigate("/addplan");}}>Şimdi Ekle</a></div>
             </div>
          </div>
          <div className="carousel-item">
             <div className="container">
                <h1 className="banner_taital">Etkinlikler</h1>
                <p className="banner_text">Özel günleriniz unutulmasın! Önemli etkinliklerinizi planlayın ve her anınızı özel kılın. Kolayca organize olun, anılarınızı zamanında yaşayın!</p>
                <div className="read_bt"><a href="#" onClick={(e) => {e.preventDefault(); navigate("/addplan");}}>Şimdi Ekle</a></div>
             </div>
          </div>
          <div className="carousel-item">
             <div className="container">
                <h1 className="banner_taital">Görevler</h1>
                <p className="banner_text">Görevlerinizi organize edin ve hedeflerinize adım adım ilerleyin.</p>
                <div className="read_bt"><a href="#" onClick={(e) => {e.preventDefault(); navigate("/addplan");}}>Şimdi Ekle</a></div>
             </div>
          </div>
       </div>
       <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
       <i className="fa fa-plus" style={{ fontSize:'24px', color:'#fff'}}></i>
       </a>
       <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
       <i className="fa fa-minus" style={{ fontSize:'24px', color:'#fff'}}></i>
       </a>
    </div>
 </div>
  )
}

export default Slider
