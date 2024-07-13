import moment from "moment";
import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NextPlan = ({ tasks, events }) => {
   const [nextTask, setNextTask] = useState(null);
   const [nextEvent, setNextEvent] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
       const now = new Date();

       // Görevleri sıralayıp ilk gelecek olanı al
       const sortedTasks = tasks
           .filter(task => new Date(task.startDate) > now)
           .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
       const upcomingTask = sortedTasks.length > 0 ? sortedTasks[0] : null;

       // Etkinlikleri sıralayıp ilk gelecek olanı al
       const sortedEvents = events
           .filter(event => new Date(event.startDate) > now)
           .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
       const upcomingEvent = sortedEvents.length > 0 ? sortedEvents[0] : null;

       setNextTask(upcomingTask);
       setNextEvent(upcomingEvent);

   }, [tasks, events]);

  return (
    <div className="background_bg">
    <div className="watchs_section layout_padding">
    <div className="container">
       <h1 className="watchs_taital">01<br/>Yaklaşan Planlar</h1>
       <div className="watchs_section_2">
          <div className="row">
             <div className="col-md-6">
                <div className="image_1"><img src="https://res.cloudinary.com/dlg7azrx0/image/upload/v1720887746/calendar/emi0efcp4mcig8wboupn.png"/></div>
             </div>
             <div className="col-md-6">
                <h4 className="uni_text">{nextEvent===null ?"Yaklaşan bir etkinlik yok!":nextEvent.title}</h4>
                <p className="watchs_text">{nextEvent===null ?"":nextEvent.description}</p>
                <h4 className="rate_text"><span style={{"color": "#b60213"}}>{nextEvent===null ?"":moment(nextEvent.startDate).format("DD/MM/YYYY HH:mm")}</span> - {nextEvent===null ?"":moment(nextEvent.endDate).format("DD/MM/YYYY HH:mm")}</h4>
                <div className="read_bt1"><a href="#" onClick={(e) => {e.preventDefault(); navigate("/addplan");}}>Şimdi Ekle</a></div>
             </div>
          </div>
       </div>
       <div className="watchs_section_3">
          <div className="row">
             <div className="col-md-6">
                <h4 className="uni_text">{nextTask===null ?"Yaklaşan bir görev yok!":nextTask.title}</h4>
                <p className="watchs_text">{nextTask===null ?"":nextTask.description}</p>
                <h4 className="rate_text"><span style={{"color": "#b60213"}}>{nextTask===null ?"":moment(nextTask.startDate).format("DD/MM/YYYY HH:mm")}</span> - {nextTask===null ?"":moment(nextTask.endDate).format("DD/MM/YYYY HH:mm")}</h4>
                <div className="read_bt1"><a href="#" onClick={(e) => {e.preventDefault(); navigate("/addplan");}}>Şimdi Ekle</a></div>
             </div>
             <div className="col-md-6">
                <div className="image_2"><img src="https://res.cloudinary.com/dlg7azrx0/image/upload/v1720887745/calendar/qwrolytt8xyu2deofbl5.png"/></div>
             </div>
          </div>
       </div>
       <div className="seemore_bt"><a href="#" onClick={(e) => {e.preventDefault(); navigate("/monthly");}}>Hepsini Gör</a></div>
    </div>
 </div>
 </div>
  )
}

export default NextPlan;
NextPlan.propTypes = {
    events: Proptypes.array,
    tasks: Proptypes.array,
  };
