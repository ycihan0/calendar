import Proptypes from "prop-types";
import "./WeeklyView.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

const WeeklyView = ({ tasks, events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Haftanın başlangıç tarihini hesapla
    const startOfWeek = moment(currentDate).startOf('isoWeek');
    const week = [];
    console.log(startOfWeek.clone())
    for (let i = 0; i < 7; i++) {
      week.push(startOfWeek.clone().add(i, 'days').toDate());
    }
    setWeekDays(week);//haftanın günlerinin tarihlerini diziye at
  }, [currentDate]);

  const handleDayClick = (date) => {
    navigate(`/daily/${date.toISOString()}`);
  };

  const renderDays = () => {
    return weekDays.map((date) => {
      const dayEvents = events.filter(event => moment(event.startDate).isSame(date, 'day'));
      const dayTasks = tasks.filter(task => moment(task.startDate).isSame(date, 'day'));

      return (
        <div key={date} className="day" onClick={() => handleDayClick(date)}>
          <div className="date">
            <p className="date-num">{date.getDate()}</p>
            <p className="date-day">{moment(date).format('ddd')}</p>
          </div>
          <div className="events">
            {dayEvents.map((event, index) => (
              <div key={index} className="event">
                <p className="title">{event.title}</p>
                <p className="time">{moment(event.startDate).format('HH:mm')} - {moment(event.endDate).format('HH:mm')}</p>
              </div>
            ))}
            {dayTasks.map((task, index) => (
              <div key={index} className="task">
                <p className="title">{task.title}</p>
                <p className="time">{moment(task.startDate).format('HH:mm')} - {moment(task.endDate).format('HH:mm')}</p>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  const handlePrevWeek = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'weeks').toDate());
  };

  const handleNextWeek = () => {
    setCurrentDate(moment(currentDate).add(1, 'weeks').toDate());
  };

  return (

    <div className="background_bg">
    <div className="contact_section layout_padding">
      <div className="container">
        <h1 className="watchs_taital">
          04
          <br />
          HAFTALIK PLANLAR
        </h1>
      </div>
      <div className="contact_section_2">
        <div className="container-fluid">
          <div className="row">








               
              <div className="button-container">
  <div className="button-wrapper" onClick={handlePrevWeek}>
    <button className="button">-</button>
    <span className="button-label">Önceki Hafta</span>
  </div>
  <div className="button-wrapper" onClick={handleNextWeek}>
  <span className="button-label">Sonraki Hafta</span>
    <button className="button">+</button>
   






              </div>
          </div>

 

    <div className="weekly-view">
        <div className="calendar">
        <div className="days">{renderDays()}</div>
      </div>
    </div>













    </div>
          </div>
        </div>
      </div>
    </div>



  );
};

WeeklyView.propTypes = {
  events: Proptypes.array,
  tasks: Proptypes.array,
};

export default WeeklyView;
