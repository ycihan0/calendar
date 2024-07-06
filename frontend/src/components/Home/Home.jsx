import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import TaskForm from "../TaskForm/TaskForm";

const Home = () => {
  return (
    <div className="header_section">
      <Header />
      <Slider />
      <TaskForm />
    </div>
  );
};

export default Home;
