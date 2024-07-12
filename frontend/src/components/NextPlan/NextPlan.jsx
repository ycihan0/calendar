import Proptypes from "prop-types";
import { useEffect, useState } from "react";

const NextPlan = ({ tasks, events }) => {
  
    const [nextTasks, setNextTasks] = useState([]);
    const [nextEvents, setNextEvents] = useState([]);

    useEffect(() => {
        const now = new Date();

        const upcomingTasks = tasks.filter(
            (task) => new Date(task.startDate) > now
        );

        const upcomingEvents = events.filter(
            (event) => new Date(event.startDate) > now
        );

        setNextTasks(upcomingTasks);
        setNextEvents(upcomingEvents);

        console.log('Next Tasks:', upcomingTasks);
        console.log('Next Events:', upcomingEvents);

    }, []);

  return (
    <div className="background_bg">
    <div className="watchs_section layout_padding">
    <div className="container">
       <h1 className="watchs_taital">01<br/>Yaklaşan Planlar</h1>
       <div className="watchs_section_2">
          <div className="row">
             <div className="col-md-6">
                <div className="image_1"><img src="src/assets/images/img-1.png"/></div>
             </div>
             <div className="col-md-6">
                <h4 className="uni_text">{nextTasks[0]?.title}</h4>
                <p className="watchs_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <h4 className="rate_text"><span style={{"color": "#b60213"}}>$</span>100</h4>
                <div className="read_bt1"><a href="#">Buy Now</a></div>
             </div>
          </div>
       </div>
       <div className="watchs_section_3">
          <div className="row">
             <div className="col-md-6">
                <h4 className="uni_text">Uni Watch</h4>
                <p className="watchs_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <h4 className="rate_text"><span style={{"color": "#b60213"}}>$</span>100</h4>
                <div className="read_bt1"><a href="#">Buy Now</a></div>
             </div>
             <div className="col-md-6">
                <div className="image_2"><img src="src/assets/images/img-2.png"/></div>
             </div>
          </div>
       </div>
       <div className="seemore_bt"><a href="#">See More</a></div>
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
