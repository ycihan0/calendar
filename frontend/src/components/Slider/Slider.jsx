

const Slider = () => {
  return (
    <div className="banner_section layout_padding">
    <div id="main_slider" className="carousel slide" data-ride="carousel">
       <div className="carousel-inner">
          <div className="carousel-item active">
             <div className="container">
                <h1 className="banner_taital">Watchs</h1>
                <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                <div className="read_bt"><a href="#">Buy Now</a></div>
             </div>
          </div>
          <div className="carousel-item">
             <div className="container">
                <h1 className="banner_taital">Watchs</h1>
                <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                <div className="read_bt"><a href="#">Buy Now</a></div>
             </div>
          </div>
          <div className="carousel-item">
             <div className="container">
                <h1 className="banner_taital">Watchs</h1>
                <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                <div className="read_bt"><a href="#">Buy Now</a></div>
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
