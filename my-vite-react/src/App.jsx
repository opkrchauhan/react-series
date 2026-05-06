import "./App.css";
import Conditional from "./conditionalrendering/Conditional";
import Greeting from "./functions/Greeting";
import WelcomeMessage from "./functions/WelcomeMessage";

function AlertBox(message) {
  //This is a single code comment
  {
    /* This is a multi-line comment */
  }
  return <div className="alert">{message}</div>;
}

function showAlert(condition, message) {
  if (condition) {
    // return <div>{message}</div>;
    return AlertBox(message);
  }
  return null;
}

function App() {
  // const element = <h1>Hello, World!</h1>;
  const name = "John";
  const imageUrl = "https://placehold.co/100x100";

  const now = new Date();
  const isMorning = now.getHours() < 12;

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

      {/* <Conditional /> */}

      {/* <WelcomeMessage name="John" />
      <WelcomeMessage name="Jane" />
      <WelcomeMessage name="Doe" />
      <Greeting /> */}

      {showAlert(true, "This is an alert message!")}
    </div>
  );
}

export default App;
