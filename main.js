const valNumber = {
  d: "Decimal",
  b: "Binary"
}

const App = () => {

  const [decimal, setDecimal] = React.useState("");
  const [binary, setBinary] = React.useState("");

  const convertDecimalToBinary = (decimalNumber) => {
    if(!isNaN(decimalNumber))
      return (decimalNumber >>> 0).toString(2);
    return false;
  }

  const handleChange = (e) => {
    if(isNaN(e.target.value)) {
      alert("Veuillez rentre un nombre")
    }
    setDecimal(parseInt(e.target.value));
    setBinary(convertDecimalToBinary(decimal))
  }
  
  return(
    <div>
      <BaseNumberInput val={decimal} onChangeBase={handleChange}/>
      <BaseNumberInput val={binary} onChangeBase={handleChange} />
    </div>
  )
}

const BaseNumberInput = (props) => {

  

  return (
    <React.Fragment>
    <legend>Saisir un nombre</legend>
      <input type="text" value={props.val} onChange={props.onChangeBase} />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

