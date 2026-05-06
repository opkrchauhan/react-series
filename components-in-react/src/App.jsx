import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Project from "./component/Project";
import CardProfile from "./props/CardProfile";

function App() {
  //API Call -> Fetching user name from database and passing it to CardProfile
  return (
    <div>
      {/* <Header />
      <About />
      <Project />
      <Contact />
      <Footer /> */}

      <h1>Hello</h1>
      <CardProfile name="Alice" />
      <CardProfile name="Bob" />
    </div>
  );
}

export default App;
