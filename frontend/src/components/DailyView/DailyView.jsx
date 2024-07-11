import Proptypes from "prop-types";
import { useParams } from "react-router-dom";
import "./DailyView.scss";
import { useEffect, useState } from "react";


const DailyView = ({tasks, events}) => {
  const params = useParams();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
   const [plans, setPlans] = useState([]);
  const [currentArray, setcurrentArray] = useState([]);

  const [date, setDate]=useState(new Date())
 


  useEffect(() => {
    const newDate = params.date ? new Date(params.date) : new Date();
    setDate(newDate);


    const  newTasks= tasks.filter((task=> new Date(task.startDate).toDateString() === date.toDateString())).map(task => ({ ...task, type: 'task' }));

    const newEvents = events.filter(event => new Date(event.startDate).toDateString() === date.toDateString()).map(task => ({ ...task, type: 'event' }));

    const mergedArray = [...newTasks, ...newEvents].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  
    setFilteredTasks(newTasks);
    setFilteredEvents(newEvents);
    setPlans(mergedArray);
    setcurrentArray(mergedArray)

 console.log(plans)

  }, [params.date, tasks, events]);


  return (
    <div className="background_bg">
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="watchs_taital">
            02
            <br />
            GÜNLÜK PLANLAR
          </h1>
        </div>
        <div className="contact_section_2">
          <div className="container-fluid">
            <div className="row">








              <div className="daily-body">

                <ul>
                  {currentArray.map((plan)=>(
                    <li key={plan._id} style={{ "--accent-color": "#41516C" }}>
                    <div className="date">{plan.startDate}</div>
                    <div className="title">{plan.title}</div>
                    <div className="descr">
                   {plan.description}
                    </div>
                  </li>
                  ))}
                  

                  <li style={{ "--accent-color": "#FBCA3E" }}>
                    <div className="date">2007</div>
                    <div className="title">Title 2</div>
                    <div className="descr">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quos adipisci nobis nostrum vero nihil veniam.
                    </div>
                  </li>

                  <li style={{ "--accent-color": "#E24A68" }}>
                    <div className="date">2012</div>
                    <div className="title">Title 3</div>
                    <div className="descr">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga minima consequuntur soluta placeat iure totam commodi
                      repellendus ea delectus, libero fugit quod reprehenderit,
                      sequi quo, et dolorum saepe nulla hic.
                    </div>
                  </li>

                  <li style={{ "--accent-color": "#1B5F8C" }}>
                    <div className="date">2017</div>
                    <div className="title">Title 4</div>
                    <div className="descr">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Impedit, cumque.
                    </div>
                  </li>
                  <li style={{ "--accent-color": "#4CADAD" }}>
                    <div className="date">2022</div>
                    <div className="title">Title 5</div>
                    <div className="descr">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, non.
                    </div>
                  </li>
                </ul>
                
              </div>



 
             

       <div className="read_bt">
        <div className="daily-buttons">
        <div className="daily-button-first" onClick={()=>setcurrentArray(plans)}>Hepsi</div>
                <div className="daily-button-middle" onClick={()=>setcurrentArray(filteredEvents)}>Etkinlikler</div>
                <div className="daily-button-end" onClick={()=>setcurrentArray(filteredTasks)}>Görevler</div>
        </div>
               
             </div>
             
          
      

     
   














            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyView;

DailyView.propTypes = {
  events: Proptypes.array,
  tasks: Proptypes.array,
};
