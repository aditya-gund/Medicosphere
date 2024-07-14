import "./UserCard.css";

export function UserCard({ firstName, lastName, email, role, profilePic }) {
    return (
      <div className="UserCard">
        <img src={profilePic?profilePic:"/user.svg"} alt="profile" />
        <div>{firstName + " " + lastName}</div>
        <div>{email}</div>
        <div>{role}</div>
      </div>
    );
  }
  