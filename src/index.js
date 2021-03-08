import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if ("serviceWorker" in navigator) {
  console.log("servis worker");
  navigator.serviceWorker
    .register("/sw.js")
    .then(function () {
      console.log("serviceWorker registered!");
    })
    .catch((err) => console.log(err));
}

window.addEventListener("beforeinstallprompt", function (e) {
  console.log("before install prompt fired");
  e.preventDefault();

  return false;
});
