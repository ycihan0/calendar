import Proptypes from "prop-types";
import "./WeeklyView.scss"

const WeeklyView = ({tasks, events}) => {
  return (
    <div>
      
    </div>
  )
}

export default WeeklyView
WeeklyView.propTypes = {
    events: Proptypes.array,
    tasks: Proptypes.array,
  };