import DailyView from "../DailyView/DailyView";
import Header from "../Header/Header";
import MonthlyView from "../MonthlyView/MonthlyView";
import Slider from "../Slider/Slider";
import TaskForm from "../TaskForm/TaskForm";

const Home = () => {
  return (
    <div>
      <div className="header_section">
        <Header />
        <Slider />
      </div>
      <MonthlyView/>
      <DailyView/>
      <TaskForm />
    </div>
  );
};

export default Home;
