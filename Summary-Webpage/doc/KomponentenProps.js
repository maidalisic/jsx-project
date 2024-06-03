import React from 'react';

// Definition einer Komponente mit Props
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Verwendung der Komponente mit verschiedenen Props
function App() {
    return (
        <div>
            <Greeting name="David" />
            <Greeting name="Maid" />
            <Greeting name="Chuck Norris" />
        </div>
    );
}

export default App;