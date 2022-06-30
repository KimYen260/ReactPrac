// JS
// const React = require('react');
// const ReactDOM = require('react-dom');

// ES6
import React from 'react';
import ReactDOM from 'react-dom';


// function App() {
// return React.createElement("div", null, [
//        React.createElement("h1", null, "My Profile"),
//        React.createElement("p", null, "My name is Kim Yen."),
//        React.createElement("button", null, "Check my profile")
// ]);
// }

// ReactDOM.render(React.createElement(App), document.querySelector("#root"));


//JSX
function App(){
  // App 頭字母一定要大寫
  return (
  <div>
    {/* 一定要有根節點，因為return只能一個值*/}
    <h1>My Profile</h1>
    <p>My name is Kim Yen.</p>
    <button>Check my profile</button>
  </div>
  );
}
ReactDOM.render(App(), document.querySelector("#root"))
// App() 頭字母一定要大寫

