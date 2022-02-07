var firstName = "Emmanuel";
var lastName = "Macron";
// const helloWorld = React.createElement("h1", {}, "Hello world!");

var hello = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello"
    ),
    React.createElement(
        "span",
        { className: "firstname" },
        firstName.toLowerCase(),
        " "
    ),
    React.createElement(
        "span",
        { className: "lastname" },
        lastName.toUpperCase()
    )
);

ReactDOM.render(hello, document.querySelector("#app"));