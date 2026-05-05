function Conditional() {
  const isLoggedIn = false;
  // if (isLoggedIn) {
  //   return <h1>Welcome back!</h1>;
  // }
  // return <h1>Please sign up.</h1>;

  const element = isLoggedIn ? (
    <h1>Welcome back!</h1>
  ) : (
    <h1>Please sign up.</h1>
  );

  // return <div>{element}</div>;

  const message = ["Amar", "Akbar", "Anthony"];

  return (
    <div>
      {element}
      {message.length > 0 && (
        <h2>You have {message.length} unread messages.</h2>
      )}
    </div>
  );
}

export default Conditional;
