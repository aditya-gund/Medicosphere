import "./UserRow.css";

export function UserRow({ firstName, lastName, email, role, profilePic }) {
  return (
    <div className="UserRow">
      <img src={profilePic?profilePic:"/user.svg"} alt="profile" />
      <div>{firstName + " " + lastName}</div>
      <div>{email}</div>
      <div>{role}</div>
    </div>
  );
}
