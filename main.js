/*
const firstName = 'r0ulito';
const lastName = 'formateur';
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