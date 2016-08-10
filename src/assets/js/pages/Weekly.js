import React from "react";
import { Link } from "react-router";

import Filters from "../components/layout/Filters";
import Calendar from "../components/layout/Calendar";
import * as CalendarActions from "../actions/CalendarActions";
import Header from "../components/layout/Header";


export default class Weekly extends React.Component {
/*  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }*/

  render() {
    const { location } = this.props;

    return (
      <div>
        <Filters location={location} />
        <div class="weeklySchedule section group">
          <Header location={location} />
          <Calendar location={location} />
        </div>
      </div>
    );
  }
}
