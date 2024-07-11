import Proptypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import "./DailyView.scss";
import { useEffect, useState } from "react";
import moment from "moment";

const DailyView = ({ tasks, events }) => {
  const params = useParams();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [currentArray, setCurrentArray] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setPlans([]);

    const newDate = params.date ? new Date(params.date) : new Date();

    const newTasks = tasks
      .filter(
        (task) =>
          new Date(task.startDate).toDateString() === newDate.toDateString()
      )
      .map((task) => ({ ...task, type: "task" }));

    const newEvents = events
      .filter(
        (event) =>
          new Date(event.startDate).toDateString() === newDate.toDateString()
      )
      .map((event) => ({ ...event, type: "event" }));

    const mergedArray = [...newTasks, ...newEvents].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );

    setFilteredTasks(newTasks);
    setFilteredEvents(newEvents);
    setPlans(mergedArray);
    setCurrentArray(mergedArray);

    console.log(plans);
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
              {currentArray.length === 0 ? (
                <div className="carousel-no-data">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <h1 className="banner_taital">Hiç bir şey yok!</h1>
                        <div className="read_bt">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/addplan");
                            }}
                          >
                            Şimdi Ekle
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="daily-body">
                  <ul>
                    {currentArray.map((plan) => (
                      <li
                        key={plan._id}
                        style={{
                          "--accent-color":
                            plan.type == "task" ? "#41516C" : "#E24A68",
                        }}
                      >
                        <div className="date">{plan.title}</div>
                        <div className="title">
                          {moment(plan.startDate).format("DD/MM/YYYY HH:mm")} -{" "}
                          {moment(plan.endDate).format("DD/MM/YYYY HH:mm")}
                        </div>
                        <div className="descr">{plan.description}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="read_bt">
                <div className="daily-buttons">
                  <div
                    className="daily-button-first"
                    onClick={() => setCurrentArray(plans)}
                  >
                    Hepsi
                  </div>
                  <div
                    className="daily-button-middle"
                    onClick={() => setCurrentArray(filteredEvents)}
                  >
                    Etkinlikler
                  </div>
                  <div
                    className="daily-button-end"
                    onClick={() => setCurrentArray(filteredTasks)}
                  >
                    Görevler
                  </div>
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
