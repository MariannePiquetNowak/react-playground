// const valNumber = {
//   d: "Decimal",
//   b: "Binary"
// }

// const App = () => {

//   const [decimal, setDecimal] = React.useState('');
//   const [binary, setBinary] = React.useState('');

//   const convertDecimalToBinary = (decimalNumber) => {
//     if(!isNaN(decimalNumber))
//       return (decimalNumber >>> 0).toString(2);
//     return false;
//   }

//   const handleChange = (e) => {
//     if(Number.isNaN(e.target.value)) return
//     setDecimal(parseInt(e.target.value));
//     setBinary(convertDecimalToBinary(decimal))
//   }
  
//   return(
//     <div>
//       <BaseNumberInput val={decimal} onChangeBase={handleChange}/>
//       <BaseNumberInput val={binary} onChangeBase={handleChange} />
//     </div>
//   )
// }

// const BaseNumberInput = (props) => {

//   return (
//     <React.Fragment>
//     <legend>Saisir un nombre</legend>
//       <input type="text" value={props.val} onChange={props.onChangeBase} />
//     </React.Fragment>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('app'))

/* quand décimal est modifié, on set notre binaire */

/*
React.useEffect(() => {
  setBinaire()
}, [decimal])
*/


const App = () => {
  const [ base, setBase ] = React.useState(false);
  const [decimal, setDecimal] = React.useState('');
  const [convertedNumber, setConvertedNumber] = React.useState('');

  React.useEffect(() => {
    if(base) {
      setConvertedNumber(parseInt(decimal, 10).toString(base))
    }
    
  }, [decimal, base])


  const handleChange = (value) => {
    if(isNaN(value)) return
    setDecimal(value);
    // setConvertedNumber(parseInt(decimal, 10).toString(2))
  }

  const changeBase = (e) => {
    console.log("change");
    setBase(e.target.value)
  }

  return(
    <React.Fragment>
      <BaseNumberInput number={decimal} onChangeBase={handleChange}>Décimal</BaseNumberInput>
      <SelectBaseInput selectedBase={base} changeBase={changeBase}/>
      {base && <BaseNumberInput number={convertedNumber} onChangeBase={handleChange}>Binaire</BaseNumberInput>}
    </React.Fragment>
  )
}

const BaseNumberInput = ({ onChangeBase, number, base, children}) => {


  return(
    <div>
      <label>{children}</label>
      <input value={number} type="text" onChange={(e) =>onChangeBase(e.target.value)} />
    </div>
  )

}

const SelectBaseInput = ({ selectedBase, changeBase}) => {

  return(

    <select value={selectedBase} onChange={changeBase}>
      <option value={false} disabled>Choississez une option</option>
      <option value="2">Binaire</option>
      <option value="3">Ternaire</option>
      <option value="7">Septénaire</option>
      <option value="16">Héxadécimal</option>
    </select>
  )
}


ReactDOM.render(<App />, document.querySelector('#app'));