const helloWorld = React.createElement('h1', {}, 'Hello world!');

// const firstName = 'r0ulito';
// const lastName = 'formateur';


// Solution sans bonus
// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;

function FirstName(props) {
    return <span>{props.name[0].toUpperCase() + props.name.slice(1)} </span>
}

function LastName(props) {
    return <span className={props.className}>{props.name}</span>
}

class Hello extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const firstName = 'r0ulito';
        const lastName = 'formateur';

        return (
            <div>
                <h1>Hello</h1>
                <FirstName name={firstName}/>
                <LastName name={lastName} className="red-text"/>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.querySelector('#app'));