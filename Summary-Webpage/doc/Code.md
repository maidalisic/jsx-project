```javascript
import React from 'react';

function SimpleComponent() {
    // Erstellen eines einfachen JSX-Elements
    const greeting = <h1>Hello, JSX!</h1>;

    // Rückgabe des JSX-Elements aus der Komponente
    return (
        <div>
            {greeting}
        </div>
    );
}
```

```javascript
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
```

```javascript
import React, { useState } from 'react';

function Counter() {
    // Initialisierung des Zustands mit useState-Hook
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

export default Counter;
```