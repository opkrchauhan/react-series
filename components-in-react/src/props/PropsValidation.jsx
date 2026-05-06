import PropType from "prop-types";
function PropsValidation({ name, age, isMember }) {
  return (
    <>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Status: {isMember ? "Active Member" : "Guest Member"}</h3>
    </>
  );
}

PropsValidation.propTypes = {
  name: PropType.string.isRequired,
  age: PropType.number.isRequired,
  isMember: PropType.bool.isRequired,
};

export default PropsValidation;
