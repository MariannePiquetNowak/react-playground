const firstName = "Emmanuel";
const lastName = "Macron";

// const helloWorld = React.createElement("h1", {}, "Hello world!");
function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}

const hello = (
    <div>
    <h1>Hello</h1>
    <span className="firstname">{strUcFirst(firstName)} </span>
    <span className="lastname">{lastName.toUpperCase()}</span>
  </div>
)

console.log(hello)


ReactDOM.render(hello, document.querySelector("#app"));
