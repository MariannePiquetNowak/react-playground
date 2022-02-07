console.log('coucou'); 

// const helloWorld = React.createElement('h1', {}, 'Hello world!');

const user = {
    firstname: "Macron", 
    img : "https://c.tenor.com/ErLfR9QlfVkAAAAd/macron-guerre.gif"
}

const el = (
    <div>
        <h1>Hello World {user.firstname}</h1>
        <img src={user.img}></img>
    </div>
   
)

// mauvaise pratique

//ReactDOM.render(helloWorld, document.body);

// Meilleure pratique mais pas encore LA meilleure

ReactDOM.render(el, document.querySelector('#app'));