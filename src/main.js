/*
  CORRECTION
*/

const lastName = "Piquet-Nowak";
const firstName = "Marianne";

const formatLastName = (value) => {
  return value[0];
  toUpperCase() + value.slice(1);
};

const formatFirstName = (value) => {
  return value.toUpperCase();
};

const helloWorld = (
  <h1>
    Hello <span>{formatFirstName(firstName)} </span>{" "}
    <span className="red-text">{formatLastName(lastName)}</span>
  </h1>
);


/*
    EXERCICE SOLO BONUS
*/
function strUcFirst(a) {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
}

function formatComponent(user) {
  return (
    <div>
      <h1>{user.text}</h1>
      <span className="firstname">{strUcFirst(user.firstName)} </span>
      <span className="lastname">{user.lastName}</span>
    </div>
  );
}

const user = {
  firstName: "Emmanuel",
  lastName: "Macron",
  text: "Nous sommes en guerre",
};

const component = <section>{formatComponent(user)}</section>;


/*
    EXERCICE SOLO

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

ReactDOM.render(helloWorld, document.querySelector("#app"));
