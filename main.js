function strUcFirst(a) {
  return (a + '').charAt(0).toUpperCase() + a.substr(1);
}

function formatComponent(user) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      user.text
    ),
    React.createElement(
      "span",
      { className: "firstname" },
      strUcFirst(user.firstName),
      " "
    ),
    React.createElement(
      "span",
      { className: "lastname" },
      user.lastName
    )
  );
}

var user = {
  firstName: "Emmanuel",
  lastName: "Macron",
  text: "Nous sommes en guerre"
};

var component = React.createElement(
  "section",
  null,
  formatComponent(user)
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


ReactDOM.render(component, document.querySelector("#app"));