const Footer = () => {
  return (
    <>
    <div className="footer_section layout_padding">
    <div className="container">
       <h3 className="follow_text">Şimdi takip et</h3>
       <div className="social_icon">
          <ul>
             <li><a href="https://www.github.com/ycihan0"><img src="src/assets/images/github.png"/></a></li>
             <li><a href="https://www.linkedin.com/in/cihan-yuksel"><img src="src/assets/images/twitter-icon.png"/></a></li>
             <li><a href="https://www.linkedin.com/in/cihan-yuksel"><img src="src/assets/images/linkedin-icon.png"/></a></li>
             <li><a href="https://www.linkedin.com/in/cihan-yuksel"><img src="src/assets/images/instagram-icon.png"/></a></li>
             <li><a href="https://www.linkedin.com/in/cihan-yuksel"><img src="src/assets/images/youtub-icon.png"/></a></li>
          </ul>
       </div>
       <div className="location_main">
          <div className="location_left">
             <div className="call_text"><a href="#"><img src="src/assets/images/map-icon.png"/><span className="call_padding">Location</span></a></div>
          </div>
          <div className="location_middle">
             <div className="call_text"><a href="#"><img src="src/assets/images/mail-icon.png"/><span className="call_padding">cihanyuksel26@gmail.com</span></a></div>
          </div>
          <div className="location_right">
             <div className="call_text"><a href="#"><img src="src/assets/images/call-icon.png"/><span className="call_padding">Call +01 1234567890</span></a></div>
          </div>
       </div>
    </div>
 </div>
    <div className="copyright_section">
    <div className="container">
       <p className="copyright_text">2024 Cihan Yüksel tarafından ❤️ ile yapıldı.</p>
    </div>
 </div>
 </>
  )
}

export default Footer
