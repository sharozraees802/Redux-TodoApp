import React from 'react';
import { connect } from 'react-redux'
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => <TaskItem key={index} task={task} />)}
        </tbody>
      </table>
    )
  }
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(TaskList)
