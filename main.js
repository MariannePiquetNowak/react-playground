const App = () => {

	const number = 25;
	const [pokemons, setPokemon] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
		.then(response => response.json())
		.then(data => setPokemon(data.results))
	},[])

	React.useEffect(() => {
		setIsLoading(!isLoading);
	  }, [pokemons]);


	return(
	
		<React.Fragment>
			{isLoading && <h1>Loading...</h1>}
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.name} {...pokemon} /> // revient <PokemonCard name={pokemon.name} url={pokemon.url} />
			))}
			
		</React.Fragment>
		
	)
}

const PokemonCard = (props) => {
	const [pokemon, setPokemon] = React.useState({});
	const [type, setType] = React.useState("")
	const [artwork, setArtwork] = React.useState("");
	const [abilities, setAbilities] = React.useState([])
	const [color, setColor] = React.useState('yellow');
	React.useEffect(() => {
		fetch(props.url)
		.then(res => res.json())
		.then(data => {
			setPokemon(data);
			setType(data.types[0].type.name);
			setAbilities(data.abilities);
			const test = data.sprites.other;
			for(let x in test) {
				console.log(x[2].front_default)
			}
		})
	}, [])



	return (
		<div className="container">
			<div style={{backgroundColor: "green", width: "200px"}}>
				<h5>{pokemon.name}</h5>
				<div>
					<img src="" />
				</div>
				<div>
					{abilities.map((a, index) => (
						<p key={index}>{a.ability.name}</p>
					))}
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector("#app"));
