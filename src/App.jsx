import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Fonction coûteuse qui bloque le thread principal
function heavyComputation() {
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    return result;
}

function App() {
    const [count, setCount] = useState(0);

    // Exécute un calcul lourd à chaque rendu (dégradation performance)
    useEffect(() => {
        heavyComputation();
    });

    // Images non optimisées et lourdes pour dégrader les performances
    const largeImages = [
        "https://picsum.photos/800/600?random=1",
        "https://picsum.photos/800/600?random=2",
        "https://picsum.photos/800/600?random=3",
        "https://picsum.photos/800/600?random=4",
        "https://picsum.photos/800/600?random=5",
    ];

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img
                        src={viteLogo}
                        className="logo"
                        alt="Vite logo"
                        width="128"
                        height="128"
                    />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                        width="128"
                        height="128"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {/* Images lourdes non optimisées pour dégrader les performances */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >
                {largeImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Large image ${index + 1}`}
                        style={{ width: "300px", height: "auto" }}
                        loading="eager"
                    />
                ))}
            </div>
        </>
    );
}

export default App;
