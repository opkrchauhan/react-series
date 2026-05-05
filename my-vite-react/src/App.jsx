import "./App.css";
import Conditional from "./conditionalrendering/Conditional";

function App() {
  // const element = <h1>Hello, World!</h1>;
  const name = "John";
  const imageUrl = "https://placehold.co/100x100";

  return (
    <div>
      {/* <h1>Hello, World!</h1>
      <p>Hi, I am learning react.</p>
      {6 + 7} */}
      {/* <h1 className="greeting">Hello, {name}!</h1>
      <button style={{ backgroundColor: "green", color: "white" }}>
        Click Me!
      </button>
      <button onClick={() => alert(`Alert is triggered!`)}>Alert Me</button>

      <img src={imageUrl} alt="" /> */}

      <Conditional />
    </div>
  );
}

export default App;
