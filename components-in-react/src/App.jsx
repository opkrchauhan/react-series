import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Project from "./component/Project";
import CardProfile from "./props/CardProfile";
import ProfileCard from "./props/ProfileCard";
import PropsValidation from "./props/PropsValidation";

function App() {
  //API Call -> Fetching user name from database and passing it to CardProfile

  const person = { name: "Alice", age: 10 };

  // Without Destructing
  // const name = person.name;
  // const age = person.age;

  // With Destructing
  const { name, age } = person;

  return (
    <div>
      {/* <Header />
      <About />
      <Project />
      <Contact />
      <Footer /> */}

      <h1>Hello</h1>
      {/* <CardProfile name="Alice" age={10} />
      <CardProfile name="Bob" age={20} /> */}

      {/* <ProfileCard name="Alice" age={10} isMember={true} />
      <ProfileCard name="Bob" age={20} isMember={false} /> */}
      {/* <ProfileCard name={name} age={age} isMember={true} /> */}

      <PropsValidation name={name} age={age} isMember={true} />
    </div>
  );
}

export default App;
