import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import TaskForm from "./components/TaskForm/TaskForm";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import DailyView from "./components/DailyView/DailyView";
import axios from "axios";
import MonthlyView from "./components/MonthlyView/MonthlyView";
import WeeklyView from "./components/WeeklyView/WeeklyView";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // const user = localStorage.getItem("user");
    // if (user) {
    //   setIsAuthenticated(true);
    // } else {
    //   setIsAuthenticated(false);
    // }

    const getAllData = async () => {
      try {
        const [eventsRes, tasksRes] = await Promise.all([
          axios.get(`${apiUrl}/events`),
          axios.get(`${apiUrl}/tasks`),
        ]);
        setEvents(eventsRes.data);
        setTasks(tasksRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllData();
  }, [apiUrl]);

  return (
    <Routes>
      <Route path="/" element={<Home events={events} tasks={tasks}/> }>
        <Route path="addplan" element={<TaskForm />} />
        <Route
          path="monthly"
          element={<MonthlyView events={events} tasks={tasks} />}
        />
        <Route
          path="weekly"
          element={<WeeklyView events={events} tasks={tasks} />}
        />
        <Route
          path="daily/:date"
          element={<DailyView events={events} tasks={tasks} />}
        />
        <Route
          path="daily"
          element={<DailyView events={events} tasks={tasks} />}
        />
      </Route>
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home events={events} tasks={tasks}/>} />
    </Routes>
  );
}

export default App;
