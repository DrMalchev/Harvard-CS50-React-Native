import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let id = 0;
const Todo = (props) => {
    return (
        <li>
            <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
            <button onClick={props.onDelete}>Delete</button>
            <span>{props.todo.text}</span>
        </li>
    );
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    addTodo() {
        const text = prompt("TODO text please!");
        this.setState({
            todos: [...this.state.todos, { id: id++, text: text, checked: false }]
        });
    }

    removeTodo(id) {
        this.setState({ todos: this.state.todos.filter((x) => x.id != id) });
    }

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked
                }
            })
        });
    }

    render() {
        return (
            <div>
                <div>TodoCount: {this.state.todos.length} </div>
                <div> Unchecked: {this.state.todos.filter(x => x.checked === false).length} </div>
                <button
                    onClick={() => {
                        this.addTodo();
                    }}
                >
                    {" "}
                    Add TODO{" "}
                </button>
                <ul>
                    {this.state.todos.map((todo) => (
                        <Todo
                            onToggle={() => { this.toggleTodo(todo.id) }}
                            onDelete={() => {
                                this.removeTodo(todo.id);
                            }}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
