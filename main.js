var firstName = "Emmanuel";
var lastName = "Macron";

// const helloWorld = React.createElement("h1", {}, "Hello world!");
function strUcFirst(a) {
    return (a + '').charAt(0).toUpperCase() + a.substr(1);
}

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
        strUcFirst(firstName),
        " "
    ),
    React.createElement(
        "span",
        { className: "lastname" },
        lastName.toUpperCase()
    )
);

console.log(hello);

ReactDOM.render(hello, document.querySelector("#app"));