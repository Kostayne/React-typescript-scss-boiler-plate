import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";

const App = () => {
    return (
        <div className="app">
            <h2>Hello there!</h2>
            <p>You can use typescript, scss, jsx. Just edit the main.tsx</p>
        </div>
    );
}

const appRoot = document.getElementById("app-root");
ReactDOM.render(<App />, appRoot);

console.log("Here!");