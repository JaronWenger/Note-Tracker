// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";



const name = "Jaron"
const number = 9


//  ReactDOM.render(<div><h1>Update {name}</h1><p>This is a {number} paragraph</p></div>, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
