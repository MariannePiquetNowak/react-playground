const scalesNames = {
  n: "nombre",
  b: "binaire"
}

const App = () => {
  
  return(
    <div>
      <BaseNumberInput scale="n" />
      <BaseNumberInput scale="b" />
    </div>
  )
}

const BaseNumberInput = (props) => {

  const [number, setNumber] = React.useState({nombre: ""});

  const handleChange = (e) => {
    setNumber({temperature: e.target.value});
  }

  const nombre = number.nombre;
  const scale = props.scale

  function convertToBinary(nombre) {
    if (number > 0) {
      return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
  }

  return (
    <React.Fragment>
    <legend>Saisir un nombre {scalesNames[scale]}</legend>
      <input value={nombre} onChange={handleChange} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

