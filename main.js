'use strict';

console.log('coucou main')

// je simplifie la fonction createElement
const el = React.createElement;

class Title extends React.Component {
    render() {
        return el(
            'img',
            { src: "https://www.safersociety.com/wp-content/uploads/2018/04/Gif-animation-hello.gif"},
            null, 
        )
    }
}

// Je stocke la div#app
const DomContainer = document.getElementById('app');
// Je render ma class dans div#app
ReactDOM.render( el(Title), DomContainer );