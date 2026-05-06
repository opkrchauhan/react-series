function PropsDestructing({ name, age, isMember }) {
  return (
    <>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Status: {isMember ? "Active Member" : "Guest Member"}</h3>
    </>
  );
}

export default PropsDestructing;
