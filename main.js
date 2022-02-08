/*
const firstName = 'r0ulito';
const lastName = 'formateur';
*/

/**
 * L'exercice est caduc car j'avais mal compris la consigne, j'ai récupéré le code de l'exo d'avant plutot que le code d'exemple
 */

function FirstName(props) {

    return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
}

function LastName(props) {

    return <span className="red-text">{props.text.toUpperCase()}</span>

}

// const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;

/**
 * CLASS COMPONENT
 */
class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Marianne",
            lastName: "Piquet"
        }
    }
    render() {

        return(

            <h1>Hello{" "}
                <FirstName text={this.state.firstName.concat(" ")}/>
                <LastName text={this.state.lastName} />
            </h1>
            
        )
    }
}

/**
 * FUNCTIONNAL COMPONENT
 */

const HelloWorldTwo = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    React.useEffect(() => {
        setFirstName("Marianne");
        setLastName('Piquet');
    }, []);

    return (
        <h1>
            Hello{" "}
            <FirstName text={firstName.concat(" ")}/>
            <LastName text={lastName}/>
        </h1>
    )
}

ReactDOM.render(<HelloWorldTwo />, document.querySelector('#app'));

/**
 * CORRECTION 
 */

/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/

/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */

// Étape 3

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 