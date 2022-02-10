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
	
		<div style={{display: "flex", flexWrap: "wrap"}}>
			{isLoading && <h1>Loading...</h1>}
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.name} {...pokemon} /> // revient <PokemonCard name={pokemon.name} url={pokemon.url} />
			))}
			
		</div>
		
	)
}

const PokemonCard = (props) => {
	const [pokemon, setPokemon] = React.useState({});
	const [type, setType] = React.useState("")
	const [artwork, setArtwork] = React.useState("");
	const [abilities, setAbilities] = React.useState([])
	const [color, setColor] = React.useState('gray');
	React.useEffect(() => {
		fetch(props.url)
		.then(res => res.json())
		.then(data => {
			setPokemon(data);
			setType(data.types[0].type.name);
			setAbilities(data.abilities);
			const artObj = Object.values(data.sprites.other)
			setArtwork(artObj[2].front_default);

		
		})
	}, [])

	const getColor = () => {

		switch(type) {
			case "grass": 
				setColor("green")
				break;
			case "fire":
				setColor('red');
				break;
			case "water":
				setColor('blue');
				break;
		}
	
	}
	
	React.useEffect(() => {
		getColor();
	},[type])

	return (
		<div className="container">
		{console.log(color)}
			<div style={{backgroundColor:color, width: "230px", height: "300px"}}>
				<div style={{display: "flex", justifyContent: "space-between", margin: "0 .5em"}}>
					<h5 style={{textTransform: "uppercase", backgroundColor: "gray", padding: ".1em 2em .1em .1em"}}>{pokemon.name}</h5>
					<h5>{type}</h5>
				</div>
				<div style={{
					margin: "0 .5em", 
					display:"flex", 
					justifyContent:"center", 
					backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cefd646f-2f00-43d2-830b-981e49a86ca1/d4offh0-fa005219-120c-44d7-9aa7-35540c1df44d.png/v1/fill/w_1600,h_907,q_80,strp/fond_pokemon_gimp_by_naruttebayo67_d4offh0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA3IiwicGF0aCI6IlwvZlwvY2VmZDY0NmYtMmYwMC00M2QyLTgzMGItOTgxZTQ5YTg2Y2ExXC9kNG9mZmgwLWZhMDA1MjE5LTEyMGMtNDRkNy05YWE3LTM1NTQwYzFkZjQ0ZC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OyggYCVKcXjOMdVflLBgSQPJ1YLckEzLlxNRqa3CNY0')",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%",
					borderRadius: "10px"
				}}>
					<img style={{width: "60%"}} src={artwork} />
				</div>

				<div style={{margin: "0 .5em"}}>
					<h6>Abilities</h6>
					{abilities.map((a, index) => (
						<p key={index}>{a.ability.name}</p>
					))}
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector("#app"));
