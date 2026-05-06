function CardProfile(props) {
  return (
    <>
      <h1>Name : {props.name}</h1>;<h2>Age : {props.age}</h2>;
    </>
  );
}

// Without Props:
// function CardProfile() {
//   const name = "Alice";
//   return (
//     <div>
//       <h3>Name: {name}</h3>
//     </div>
//   );
// }

export default CardProfile;
