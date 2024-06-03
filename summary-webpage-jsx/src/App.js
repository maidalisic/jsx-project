import React, { useState, useEffect } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";

window.addEventListener("scroll", () => {
    const offset = 300;

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const fromTop = window.scrollY + offset;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= fromTop && sectionTop + sectionHeight > fromTop) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (
                    section.getAttribute("id") ===
                    link.getAttribute("href").substring(1)
                ) {
                    link.classList.add("active");
                }
            });
        }
    });
});

function CodeSnippet({ filePath }) {
    const [code, setCode] = useState("");

    useEffect(() => {
        async function fetchCode() {
            try {
                const response = await fetch(filePath);
                const text = await response.text();
                setCode(text);
            } catch (error) {
                console.error("Error loading code snippet:", error);
                setCode("Fehler beim Laden des Code-Snippets.");
            }
        }

        fetchCode();
    }, [filePath]);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
        <pre>
            <code className="language-js">{code}</code>
        </pre>
    );
}

function ExampleNavigator({ examples }) {
    const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

    const currentExample = examples[currentExampleIndex];

    return (
        <div>
            <h3>{currentExample.title}</h3>
            <p>{currentExample.description}</p>
            {currentExample.component}
            <div className="navigation-buttons">
                <button
                    onClick={() =>
                        setCurrentExampleIndex(
                            (currentExampleIndex - 1 + examples.length) %
                                examples.length
                        )
                    }
                >
                    {" "}
                    &#10094;{" "}
                </button>
                <button
                    onClick={() =>
                        setCurrentExampleIndex(
                            (currentExampleIndex + 1) % examples.length
                        )
                    }
                >
                    {" "}
                    &#10095;{" "}
                </button>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <nav>
            <a href="#introduction" data-icon="📖">
                Einleitung
            </a>
            <a href="#details" data-icon="⚙️">
                Details
            </a>
            <a href="#lessons-learned" data-icon="📚">
                Erfahrungen
            </a>
            <a href="#resources" data-icon="📄">
                Ressourcen
            </a>
            <a href="#team" data-icon="👥">
                Team
            </a>
        </nav>
    );
}

function Header({ toggleTheme }) {
    return (
        <header>
            <h1>JSX in der Webentwicklung</h1>
            <button id="theme-toggle" onClick={toggleTheme}></button>
            <Menu />
        </header>
    );
}

function Introduction() {
    return (
        <section id="introduction">
            <h2>Einleitung</h2>
            <p>
                In der Welt der Webentwicklung hat sich in den letzten Jahren
                ein Trend klar abgezeichnet: die wachsende Beliebtheit und
                Bedeutung von JavaScript-Frameworks, insbesondere React. Dieses
                Interesse an React, gepaart mit dem Konzept von JSX, einer
                Syntaxerweiterung für JavaScript, hat uns dazu bewogen, dieses
                Thema näher zu erforschen.
            </p>
            <p>
                Trotz unserer begrenzten Erfahrung mit modernen Frameworks wie
                React, wurde uns schnell klar, dass die Fähigkeit, effiziente
                und dynamische Benutzeroberflächen zu erstellen, ein
                unverzichtbares Werkzeug für jeden Frontend-Entwickler ist.
                React's einzigartiger Ansatz, bei dem Komponenten und Zustände
                im Mittelpunkt stehen, sowie die nahtlose Integration von JSX,
                ermöglicht es Entwicklern, komplexe Anwendungen auf eine
                intuitive und wartbare Weise zu bauen.
            </p>
            <p>
                Unsere Motivation, uns mit diesem Thema auseinanderzusetzen,
                stammt aus unseren Wunsch, die aktuellen Trends und Best
                Practices in der Frontend-Entwicklung zu verstehen und
                anzuwenden. Durch dieses Projekt hoffen wir, ein tieferes
                Verständnis für React und JSX zu entwickeln und deren Rolle in
                der modernen Webentwicklung zu beleuchten.
            </p>
        </section>
    );
}

function Details({ examples }) {
    return (
        <section id="details">
            <h2>Implementierungsdetails</h2>
            <ExampleNavigator examples={examples} />
        </section>
    );
}

function Link({ href, title }) {
    return (
        <li>
            <a href={href} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </li>
    );
}

function Resources() {
    return (
        <section id="resources">
            <h2>Weiterführende Ressourcen</h2>
            <div className="resource-category">
                <h3>
                    <i className="fas fa-blog"></i> Blog-Artikel
                </h3>
                <ul>
                    <Link
                        href="https://reactjs.org/docs/introducing-jsx.html"
                        title="Offizielle React-Dokumentation zu JSX"
                    />
                    <Link
                        href="https://legacy.reactjs.org/docs/jsx-in-depth.html"
                        title="JSX In Depth"
                    />
                </ul>
            </div>
            <div className="resource-category">
                <h3>
                    <i className="fas fa-video"></i> Videos
                </h3>
                <ul>
                    <Link
                        href="https://www.youtube.com/watch?v=l23Nlar1-nc"
                        title="Einführung in JSX | React Grundlagen"
                    />
                    <Link
                        href="https://www.youtube.com/watch?v=9GtB5G2xGTY"
                        title="What is JSX?"
                    />
                    <Link
                        href="https://www.youtube.com/watch?v=K5NZUv-pOrg"
                        title="JSX in React verwenden"
                    />
                    <Link
                        href="https://www.youtube.com/watch?v=FO4couzuJIk"
                        title="What is JSX?"
                    />
                    <Link
                        href="https://www.youtube.com/watch?v=BS9g6Z3lbBU&t=4s"
                        title="The Power Of JSX"
                    />
                </ul>
            </div>
            <div className="resource-category">
                <h3>
                    <i className="fas fa-book"></i> Bücher
                </h3>
                <ul>
                    <Link
                        href="https://dl.ebooksworld.ir/books/React.Up.and.Running.2nd.Edition.Stoyan.Stefanov.OReilly.9781492051466.EBooksWorld.ir.pdf"
                        title="React Up & Running von Stoyan Stefanov"
                    />
                    <Link
                        href="https://www.google.at/books/edition/Learning_React/7KVYDwAAQBAJ?hl=de&gbpv=1&dq=inauthor:%22Kirupa+Chinnathambi%22&printsec=frontcover"
                        title="Learning React von Kirupa Chinnathambi"
                    />
                </ul>
            </div>
        </section>
    );
}

function Lessons() {
    return (
        <section id="lessons-learned">
            <h2>Lessons Learned</h2>
            <p>
                Während unserer Auseinandersetzung mit JSX und React haben wir
                zahlreiche Einsichten gewonnen, die unser Verständnis für
                moderne Webentwicklung erweitert haben. Einer der größten
                "Aha-Momente" war die Erkenntnis, wie JSX die Integration von
                HTML in JavaScript nicht nur ermöglicht, sondern auch intuitiv
                und leistungsstark gestaltet. Diese Fähigkeit, UI-Komponenten
                direkt in JavaScript zu deklarieren, hat den Entwicklungsprozess
                für uns deutlich vereinfacht und beschleunigt.
            </p>
            <p>
                Die in den Codebeispielen demonstrierte Komponentenlogik und das
                Zustandsmanagement zeigen, wie effektiv React und JSX dabei
                helfen, komplexe Benutzeroberflächen aufzubauen und zu
                verwalten. Insbesondere das Zustandsmanagement in React hat uns
                gezeigt, wie dynamische Benutzerinteraktionen effizient
                gehandhabt werden können.
            </p>
            <p>
                Trotz anfänglicher Herausforderungen, vor allem beim Verstehen
                der Komponentenarchitektur und des Zustandsmanagements, konnten
                wir durch praktische Anwendung und stetiges Experimentieren ein
                solides Verständnis entwickeln. Diese Erfahrungen bestärken uns
                in der Empfehlung von React und JSX für moderne Webanwendungen.
                Ihre Fähigkeit, die Entwicklung zu vereinfachen und gleichzeitig
                leistungsfähige, wartbare und wiederverwendbare UI-Komponenten
                zu erstellen, macht sie zu einem wertvollen Werkzeug für jeden
                Frontend-Entwickler.
            </p>
        </section>
    );
}

function PersonCard({ name, imageSrc, description }) {
    return (
        <li>
            <h3>{name}</h3>
            <img
                src={imageSrc}
                alt={`Foto von ${name}`}
                style={{ width: "200px", height: "auto" }}
            />
            <p>{description}</p>
        </li>
    );
}

function Team() {
    return (
        <section id="team">
            <h2>Projektteam</h2>
            <ul>
                <PersonCard
                    name="David"
                    imageSrc="/dave.jpg"
                    description="Softwareentwickler bei Fronius."
                />
                <PersonCard
                    name="Maid"
                    imageSrc="/maid.jpg"
                    description="Softwareentwickler bei TeamViewer."
                />
            </ul>
        </section>
    );
}

function MainContent({ examples }) {
    return (
        <main>
            <Introduction />
            <Details examples={examples} />
            <Lessons />
            <Resources />
            <Team />
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <p>Developed with love in Hagenberg, Austria.</p>
        </footer>
    );
}

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme);
        document.body.classList.toggle("light-theme", !isDarkTheme);
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const examples = [
        {
            title: "Einfaches JSX-Element",
            description:
                "Ein grundlegendes Beispiel für JSX ist das Erstellen eines einfachen Elements, wie in diesem Code-Snippet gezeigt.",
            component: <CodeSnippet key="element" filePath="/Element.js" />,
        },
        {
            title: "Komponenten und Props",
            description:
                "Eines der Kernelemente von React sind Komponenten, die mit Props (Eigenschaften) umgehen. Diese ermöglichen es, wiederverwendbare und anpassbare Elemente zu erstellen.",
            component: (
                <CodeSnippet
                    key="komponentenProps"
                    filePath="/KomponentenProps.js"
                />
            ),
        },
        {
            title: "Zustandsmanagement in JSX",
            description:
                "Ein weiteres wichtiges Konzept ist das Zustandsmanagement. React ermöglicht es, den Zustand innerhalb von Komponenten zu verwalten und auf Benutzerinteraktionen zu reagieren.",
            component: (
                <CodeSnippet
                    key="zustandsmanagement"
                    filePath="/Zustandsmanagement.js"
                />
            ),
        },
    ];

    return (
        <div className="App">
            <Header toggleTheme={toggleTheme} />
            <MainContent examples={examples} />
            <Footer />
        </div>
    );
}

export default App;
