import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import "./MonthlyView.scss";
import { useNavigate } from "react-router-dom";

const MonthlyView = ({ tasks, events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);

  const daysOfWeek = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

  const navigate = useNavigate();

  //Ayın ilk gününü bulma fonksiyonu
  const getFirstDayOfMonth = (month, year) => {
    const day = new Date(year, month, 1).getDay();
    //buradaki 1 ayın ilk gününü temsil eder ayın 1'i bu tarihtir.
    return day === 0 ? 6 : day - 1;
  };

  //Bir ayda kaç gün olduğunu bulma fonksiyonu
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDayClick = (day) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    navigate(`/daily/${date.toISOString()}`);
  };

  const renderDays = () => {
    const days = [];
    const firstDay = getFirstDayOfMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );
    const totalDays = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear()
    );

    // Boş hücreler ekleme
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Ayın günlerini ekleme
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      //Takvimdeki gün ile etkinlikteki eşit olan günleri filtrele
      const currentDayEvents = displayedEvents.filter(
        (event) =>
          new Date(event.startDate).toDateString() === date.toDateString()
      );

      const currentDayTasks = displayedTasks.filter(
        (task) =>
          new Date(task.startDate).toDateString() === date.toDateString()
      );

      days.push(
        <div
          key={i}
          className={
            new Date().toDateString() === date.toDateString()
              ? "calendar-day-active"
              : "calendar-day"
          }
          onClick={() => handleDayClick(i)}
        >
          {i}
          <br />
          <div className="calendar-plans">
            {currentDayEvents.map((event, index) => (
              <span key={index} className="calendar-events">
                {event.title}
                <br />
              </span>
            ))}
            {currentDayTasks.map((task, index) => (
              <span key={index} className="calendar-tasks">
                {task.title}
                <br />
              </span>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = (e) => {
    e.preventDefault();
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = (e) => {
    e.preventDefault();
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  useEffect(() => {
    setDisplayedTasks(tasks);
    setDisplayedEvents(events);
  }, [tasks, events]);

  return (
    <div className="background_bg">
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="watchs_taital">
            03
            <br />
            AYLIK PLANLAR
          </h1>
        </div>
        <div className="contact_section_2">
          <div className="container-fluid">
            <div className="row">
              <div className="banner_section layout_padding">
                <div
                  id="main_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="button-container">
                    <div className="button-wrapper" onClick={handlePrevMonth}>
                      <button className="button">-</button>
                    </div>
                    <h1 className="banner_taital">
                      {currentDate.toLocaleString("default", { month: "long" })}{" "}
                      {currentDate.getFullYear()}
                    </h1>
                    <div className="button-wrapper" onClick={handleNextMonth}>
                      <button className="button">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calendar">
                <div className="calendar-body">
                  <div className="calendar-days-of-week">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="calendar-day-of-week">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="calendar-grid">{renderDays()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyView;

MonthlyView.propTypes = {
  events: Proptypes.array,
  tasks: Proptypes.array,
};

//Bazı unutulan  Methodlar;
// 1- new Date();
// mevcut yerel saat dilimindeki tarihi ve saati içeren bir Date nesnesi oluşturulur.
// Tarih ve saat bilgisi ile kullanım: new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// 2- getDay();
//Bu metod, haftanın gününü (Pazartesi, Salı, Çarşamba vb.) temsil eden bir sayı döndürür. Günlerin indeksleri 0'dan başlar
// 3- getDate();
// Bu metod, ayın gününü (ayın kaçıncı günü olduğunu) döndürür. 1 ile 31 arasında bir değer döner.
// 4- getMonth()
// Bu metod, ayı (0'dan başlayarak) döndürür. Ocak=0, Şubat=1, ... Aralık=11 olarak indekslenir.
// 5- getFullYear()
// Bu metod, yılı döndürür.
