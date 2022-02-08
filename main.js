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

/* class Clock extends React.Component {
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

ReactDOM.render(<Clock />, document.querySelector('#app'));  */
function Button(props) {
  return (
    <button className={props.class} onClick={props.click}>
      {props.text}
    </button>
  );
}

function Clock(props) {

  React.useEffect(() => {
    handleClickBlack();
    handleClickRandom();
  }, []);

  React.useEffect(() => {
    tick();
  }, []);

  const [date, setDate] = React.useState(new Date());

  const [black, setBlack] = React.useState("");
  const [random, setRandom] = React.useState(null);

  const handleClickBlack = () => {
    const title = document.querySelector("h2");
    setBlack("black");
    title.style.color = black;
  };

  const handleClickRandom = () => {
    const title = document.querySelector("h2");
    setRandom(getRandomColor())
    title.style.color = random;
    
  };

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const tick = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <h2>Il est {date.toLocaleTimeString()}.</h2>
      <Button
        class="btn random"
        click={handleClickRandom}
        text="Couleur aléatoire"
      />
      <Button
        class="btn black"
        click={handleClickBlack}
        text="Couleur initiale"
      />
    </div>
  );
}

/**
 * BONUS
 */


 function Button(props) {
  return (
    <button className={props.class} onClick={props.click}>
      {props.text}
    </button>
  );
}

function ClockBonus(props) {


  React.useEffect(() => {
    tick();
  }, [date])

  const [date, setDate] = React.useState(new Date());
  const ref = React.useRef();

  const handleClickStop = (value) => {
    clearInterval(ref.current);
  }


  const tick = () => {
    ref.current = setInterval(() => {
      setDate(new Date());
    }, 1000);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <h2>Il est {date.toLocaleTimeString()}.</h2>
      <Button
        class="btn random"
        click={handleClickStop}
        text="Arrêt"
      />
      <Button
        class="btn black"
        click={() => tick()}
        text="Reprise"
      />
    </div>
  );
}

ReactDOM.render(<ClockBonus />, document.querySelector("#app"));
