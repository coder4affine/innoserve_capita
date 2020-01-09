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
      error: false,
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await fetch('http://localhost:3004/todos');
      const todos = await res.json();
      this.setState({ todos });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  clickMe = () => {};

  changeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = async e => {
    e.preventDefault();
    const { todoText, todos } = this.state;
    this.setState({ loading: true });
    try {
      const res = await fetch('http://localhost:3004/todos', {
        method: 'POST',
        body: JSON.stringify({ text: todoText, isDone: false }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      });
      const todo = await res.json();
      this.setState({ todos: [...todos, todo], todoText: '' });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }

    // this.setState({
    //   todos: [...todos, { id: new Date().getTime(), text: todoText, isDone: false }],
    //   todoText: '',
    // });
  };

  changeStatus = async todoData => {
    const { todos } = this.state;
    try {
      const res = await fetch(`http://localhost:3004/todos/${todoData.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...todoData, isDone: !todoData.isDone }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      });
      const todo = await res.json();
      this.setState({
        todos: todos.map(x => {
          if (x.id === todo.id) {
            return todo;
          }
          return x;
        }),
      });
    } catch (error) {
      console.warn('error', error);
    }
    // const i = todos.findIndex(x => x.id === todo.id);
    // if (i !== -1) {
    // this.setState({
    //   todos: todos.map(x => {
    //     if (x.id === todo.id) {
    //       return { ...x, isDone: !x.isDone };
    //     }
    //     return x;
    //   }),
    // });

    // [...todos.slice(0, i), { ...todo, isDone: !todo.isDone }, ...todos.slice(i + 1)],
    // }
  };

  deleteTodo = async todo => {
    const { todos } = this.state;
    try {
      await fetch(`http://localhost:3004/todos/${todo.id}`, {
        method: 'DELETE',
      });
      this.setState({
        todos: todos.filter(x => x.id !== todo.id),
      });
    } catch (error) {
      console.warn('error', error);
    }
  };

  render() {
    const { todoText, todos, error, loading } = this.state;
    if (error) {
      return <h1>{error}</h1>;
    }
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
          <form onSubmit={this.addTodo}>
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
              <button type="submit" disabled={loading} className="btn btn-primary">
                Add Todo
              </button>
            </div>
          </form>
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
                <button type="button" onClick={() => this.deleteTodo(todo)}>
                  Delete
                </button>
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
