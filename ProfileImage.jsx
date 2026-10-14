
function ProfileImage({ image, name }) {
  return (
    <img
      className="profile-image"
      src={image}
      alt={name}
    />
  );
}

export default ProfileImage;
