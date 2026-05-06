function ProfileCard(props) {
  return (
    <>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Status: {props.isMember ? "Active Member" : "Guest Member"}</h3>
    </>
  );
}

export default ProfileCard;
