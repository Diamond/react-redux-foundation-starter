import React from "react"
import ReactDOM from "react-dom"

require("./app.scss");

const App = (props) => {
  return (
    <div>
      <h1>Foundation React Component</h1>
      <button className="button">Do a thing</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#app")
)
