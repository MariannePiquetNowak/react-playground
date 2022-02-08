function Clock(props) {
  React.useEffect(() => {
    tick();
  }, []);

  const [date, setDate] = React.useState(new Date());
  const [textColor, setTextColor] = React.useState("black");
  const intervalRef = React.useRef();
  const tick = () => {
    intervalRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);
  };

  const changeColor = () => {
    var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setTextColor(randomColor);
  };

  const resetColor = () => {
    setTextColor("black");
  };

  const stopClock = (e) => {
    e.preventDefault();
    clearInterval(intervalRef.current);
  };

  const restartClock = (e) => {
    e.preventDefault();
    tick();
  };


  /*     return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={changeColor}>Changer couleur</button>
            <button onClick={resetColor}>Réinitialiser couleur</button>
        </div>
        ); */

  // Solution Bonus

  return (
    <div>
      <h1>Hello world</h1>
      <h2 style={{ color: textColor }}>Il est {date.toLocaleTimeString()}.</h2>
      <button onClick={stopClock}>Stop</button>
      <button onClick={restartClock}>Reprendre</button>
    </div>
  );
}

/* EXERCICE 7 */

function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
  }


  function Greeting(props) {
   // const isLoggedIn = props.isLoggedIn;
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleClick = () => {
        isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true) 
    }

    return (
        <div>
            { isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
            <button onClick={() => handleClick()}>Changer statut</button>
        </div>
    )
  }

ReactDOM.render(<Greeting isLoggedIn={false} />, document.querySelector("#app"));

/**
 * CORRECTION EXO 7 
 */

 function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous connecter</h1>;
}
function Greeting(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
    }

  return(
      <React.Fragment>
          {isLoggedIn ? 
          <React.Fragment>
              <UserGreeting />
              <button onClick={handleLogOut}>Se déconnecter</button>
          </React.Fragment> : 
          <React.Fragment>
              <GuestGreeting />
              <button onClick={handleLogIn}>Se connecter</button>
          </React.Fragment> }
      </React.Fragment>
  )
}

ReactDOM.render(
  <Greeting />,
  document.querySelector('#app')
);