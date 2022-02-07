console.log('coucou');

// const helloWorld = React.createElement('h1', {}, 'Hello world!');

var user = {
    firstname: "Macron",
    img: "https://c.tenor.com/ErLfR9QlfVkAAAAd/macron-guerre.gif"
};

var el = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello World ",
        user.firstname
    ),
    React.createElement("img", { src: user.img })
);

// mauvaise pratique

//ReactDOM.render(helloWorld, document.body);

// Meilleure pratique mais pas encore LA meilleure

ReactDOM.render(el, document.querySelector('#app'));