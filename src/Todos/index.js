import React, { Component } from 'react';
// import InputText from './InputText';
// import Header from './Header';
import './main.css';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todos: [],
    };
  }

  clickMe = () => {};

  changeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = () => {
    const { todoText, todos } = this.state;

    this.setState({
      todos: [...todos, { id: new Date().getTime(), text: todoText, isDone: false }],
      todoText: '',
    });
  };

  changeStatus = todo => {
    const { todos } = this.state;
    // const i = todos.findIndex(x => x.id === todo.id);
    // if (i !== -1) {
    this.setState({
      todos: todos.map(x => {
        if (x.id === todo.id) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      }),
    });

    // [...todos.slice(0, i), { ...todo, isDone: !todo.isDone }, ...todos.slice(i + 1)],
    // }
  };

  render() {
    const { todoText, todos } = this.state;
    return (
      <div className="container">
        <div
          style={{
            height: 55,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Todos</h1>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }} id="body">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              style={{
                width: 200,
                height: 34,
                padding: '6px 12px',
                fontSize: 18,
                lineHeight: 1.5,
                color: '#555',
                backgroundColor: '#fff',
                backgroundImage: 'none',
                border: '1px solid #ccc',
                borderRadius: 4,
              }}
              name="todoText"
              value={todoText}
              onChange={this.changeText}
            />
            <button type="button" className="btn btn-primary" onClick={this.addTodo}>
              Add Todo
            </button>
          </div>

          <div>
            {todos.map(todo => (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => this.changeStatus(todo)}
                />
                <span
                  style={{
                    textDecoration: todo.isDone ? 'line-through' : 'none',
                  }}
                >
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="footer" style={{ height: 55 }} />
      </div>
    );
  }
}

export default index;
