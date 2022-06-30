import React from "react";
import ReactDOM from "react-dom";
import "./styling/basic.css";
import Header from "./Nav";
import App from "./App";
// import MainContent from "./MainContent";
import Footer from "./Footer";

ReactDOM.render(
<React.StrictMode>
  <Header />
  {/* <MainContent /> */}
  <App />
  <Footer />
</React.StrictMode>, document.querySelector("#root")
);