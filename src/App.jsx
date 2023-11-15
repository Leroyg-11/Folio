import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Typed from "react-typed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
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
        <div className="about-mobile-container">
          <Typed
            className="typed-text-about"
            strings={[
              `Je m'appelle Guillaume Leroy. Développeur Web Junior à Lille, j'ai 28 ans. Suite à une
            reconversion de carrière, j'ai décidé de me lancer dans le
            développement web. J'ai suivi une formation et des cours en ligne pour maîtriser les
            langages de programmation, notamment HTML, CSS, JavaScript, ainsi
            que des frameworks populaires tels que React et NodeJS. <br />
            Mon ambition est de m'investir dans des projets stimulants,
            d'acquérir une expérience pratique significative, et de participer
            à la création de solutions créatives et innovantes. Je suis
            actuellement ouvert aux opportunités de stage ou d'emploi dans le
            domaine du développement web.`,
            ]}
            typeSpeed={1}
          />
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
