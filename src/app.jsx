require("../node_modules/foundation-sites/dist/foundation.min.js")
require("./app.scss")

import React from "react"
import ReactDOM from "react-dom"

//import Foundation from "../node_modules/foundation-sites/js/foundation.core.js"

const App = (props) => {
  return (
    <div>
      <h1>Foundation React Component</h1>
      <button className="button" onClick={() => { alert("sup"); }}>Do a new thing</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#app")
)

$(() => {
  $(document).foundation()
})
