import app from "./app.js"

let h1 = React.createElement("h1",null,"I am doing my best")

let root  = ReactDOM.createRoot(document.querySelector("#container"))
root.render(app())