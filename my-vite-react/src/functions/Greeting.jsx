const now = new Date();
const hours = now.getHours();
function Greeting() {
  if (hours < 12) {
    return <h1>Good morning!</h1>;
  } else if (hours < 18) {
    return <h1>Good Afternoon!</h1>;
  }
  return <h1>Good Evening!</h1>;
}

export default Greeting;
