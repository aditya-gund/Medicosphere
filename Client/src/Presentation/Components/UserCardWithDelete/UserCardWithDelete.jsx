import "./UserCardWithDelete.css";

export function UserCardWithDelete({
  firstName,
  lastName,
  email,
  role,
  profilePic,
  onDelete,
}) {
  return (
    <div className="UserCard">
      <img src={profilePic ? profilePic : "/user.svg"} alt="profile" />
      <h2>{firstName + " " + lastName}</h2>
      <div className="email">{email}</div>
      <div className="footer">
        <div>
          <div style={{fontSize: "small"}}>Role</div>
          <div className="role">{role}</div>
        </div>
        <button onClick={() => onDelete()}>Remove</button>
      </div>
    </div>
  );
}
