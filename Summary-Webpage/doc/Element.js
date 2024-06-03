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