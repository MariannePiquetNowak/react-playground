# [État et cycle de vie](https://fr.reactjs.org/docs/state-and-lifecycle.html)

### [Mettre à jour un élément affiché](https://fr.reactjs.org/docs/rendering-elements.html#updating-the-rendered-element)

Avec nos connaissances actuelles, la seule façon de mettre à jour l’interface utilisateur est de créer un nouvel élément et de le passer à `ReactDOM.render()`.

Prenons l'exemple de la documentation:

```javascript
    function tick() {
        const element = (
            <div>
            <h1>Hello World !</h1>
            <h2>Il est {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
    }
    // Chaque seconde, nous appellons ReactDOM.render() depuis un callback passé à setInterval().
    setInterval(tick, 1000);    
```

En vous aidant de la documentation modifions ce code pour avoir un composant `Clock`.

```javascript
    function Clock(props) {
        return (
            <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {props.date.toLocaleTimeString()}.</h2>
            </div>
        );
        }

        function tick() {
        ReactDOM.render(
            <Clock date={new Date()} />,
            document.getElementById('root')
        );
    }
    setInterval(tick, 1000);    

```

## Énoncé

En nous appuyant sur la documentation, modifions le code d'exemple précédent pour en faire un `Class component`.

Puis avec nos connaissances, modifions à nouveau ce code pour en faire un `Functional component`



---

Pour passer à la suite vous devez commit vos changements puis checkout sur la branche exo6








