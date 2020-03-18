import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask } from "../../actions/";

class TaskBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="task" placeholder="Add your tasks here " />
        <button onClick={()=>this.props.addTask(this.refs.task.value)}>Add Task</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}
export default connect(() => {},mapDispatchToProps)(TaskBar);
