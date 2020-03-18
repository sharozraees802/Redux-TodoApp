import React from "react";

export default class TaskList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}
