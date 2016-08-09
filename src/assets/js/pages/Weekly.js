const React = require('react');
export const Link = require('react-router').Link;

const Filters = require('../components/layout/Filters').Filters;
const Calendar = require('../components/layout/Calendar').Calendar;
const CalendarActions = require('../actions/CalendarActions');
const Header = require('../components/layout/Header').Header;

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
        <Header location={location} />
        <Calendar location={location} />
      </div>
    );
  }
}
