function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}

function formatComponent(user) {
  return (
    <div>
      <h1>{user.text}</h1>
      <span className="firstname">{strUcFirst(user.firstName)} </span>
      <span className="lastname">{user.lastName.toUpperCase()}</span>
    </div>
  )
}

const user = {
  firstName: "Emmanuel",
  lastName: "Macron",
  text: "Nous sommes en guerre"
}


const component = (
  <section>
    {formatComponent(user)}
  </section>
);


// const firstName = "Emmanuel";
// const lastName = "Macron";

// // const helloWorld = React.createElement("h1", {}, "Hello world!");
// function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}

// const hello = (
//     <div>
//     <h1>Hello</h1>
//     <span className="firstname">{strUcFirst(firstName)} </span>
//     <span className="lastname">{lastName.toUpperCase()}</span>
//   </div>
// )

console.log(component)

ReactDOM.render(component, document.querySelector("#app"));
