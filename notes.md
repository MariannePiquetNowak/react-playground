**componentDidMount()**

Le moment où le composant est monté dans le DOM

**componentWillUnmount()**

// Se déclence jusqte avant le moment où le composant est "détruit"

```
// Exemples de useEffect

  React.useEffect(() => {
    // do stuff
  }); // Déclenché a CHAQUE rendu => componentWillMount

  React.useEffect(() => {
    // do stuff
  }, []); // Déclenché UNIQUEMENT au premier rendu => componentDidMount

  React.useEffect(() => {
    // do stuff
  }, [dependance]); // Déclenché UNIQUEMENT lorsque "dependance" est mis à jour => ComponentDidUpdate

  React.useEffect(() => {
    // do stuff

    return () => {};
  }, [dependance]); // Déclenché au moment ou le composant est "nettoyé" => componentWillUnmount

```

Quand on veut mettre à jour un composant, il faut éviter de faire 

```
useEffect(() => {
    setCount(count + 1)
}, [])

```

Mais plutot utiliser une fonction anonyme 

```
useEffect(() => {
    setCount(prevState => {prevState + 1})
}, [])

```