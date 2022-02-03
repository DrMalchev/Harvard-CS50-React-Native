//run in codesandbox.io
//

import ReactDOM from "react-dom";
import { Component } from "react";
import "./styles.css";
//import App from "./App";

const rootElement = document.getElementById("root");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 5 };
        // Binding this keyword
        this.increaseState = this.increaseState.bind(this)
    }


    increaseState() {
        this.setState({ count: this.state.count + 1 });
        //this.setState({ count: 55 });
    }
    render() {
        return (
            <div className="App">
                <h1>Static header</h1>
                <hr />
                <div>
                    <button onClick={this.increaseState}> Increase</button>
                </div>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

export default App

ReactDOM.render(<App />, rootElement)