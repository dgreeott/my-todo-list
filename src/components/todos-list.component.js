import React, { Component } from "react";

import axios from "axios";
import {Todo}  from "./todo.component"



export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidUpdate = () => {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

todoList = () => {
    return this.state.todos.map(function(currentTodo, i) {
        return <Todo todo={currentTodo} key={i} />;
    })
}

  render() {
    return (
      <div>
        <h3>To Do List</h3>
        <table className="table table-script" style={{marginTop: 20 }}>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Responsible</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { this.todoList() }
            </tbody>
        </table>
      </div>
    );
  }
}
