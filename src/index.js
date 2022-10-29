import React from "react";
import  ReactDOM  from "react-dom";
import App from './App';

const page = (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>happy</li>
            <li>crasy</li>
            <li>easy</li>
        </ul>
    </div>
)
  
ReactDOM.render(
    page,
    document.getElementById("root")
)

