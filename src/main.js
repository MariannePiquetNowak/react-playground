const firstName = "Emmanuel";
const lastName = "Macron";
// const helloWorld = React.createElement("h1", {}, "Hello world!");

const hello = (
    <div>
    <h1>Hello</h1>
    <span className="firstname">{firstName.toLowerCase()} </span>
    <span className="lastname">{lastName.toUpperCase()}</span>
  </div>
)


ReactDOM.render(hello, document.querySelector("#app"));
