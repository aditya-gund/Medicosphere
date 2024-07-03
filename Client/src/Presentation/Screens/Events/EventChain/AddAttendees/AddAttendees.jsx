import { UserCardWithDelete } from "../../../../Components/UserCardWithDelete/UserCardWithDelete";
import "./AddAttendees.css";
import { AddAttendeesViewHandler } from "./AddAttendeesViewHandler";

export function AddAttendees({
  onSubmit,
  onBackPress,
  addUser,
  removeUser,
  users,
  userSet,
}) {
  const {
    addingUser,
    toggleAddUserMenu,
    setSearchParam,
    matchedUsers,
    searching,
    setAddingUser
  } = AddAttendeesViewHandler();

  return (
    <div className="AttendeesSection">
      <div className="Attendees">
        <div className="AttendeesHeading">
          <h3>Add Attendees</h3>
          <div>
            <button onClick={() => toggleAddUserMenu()}>+ &nbsp;Add</button>
            <button onClick={() => onBackPress()}> &#60; Previous</button>
            <button onClick={() => onSubmit()}>Next &#62;</button>
          </div>
        </div>
        <div className="AddedAttendees">
          {users.map((user) => (
            <UserCardWithDelete
              key={user.email}
              firstName={user.firstName}
              lastName={user.lastName}
              profilePic={user.profilePic}
              email={user.email}
              role={user.role}
              onDelete={() => {
                removeUser(user.email);
              }}
            />
          ))}
        </div>
      </div>
      <div
        className="Search"
        style={addingUser ? { visibility: "visible", opacity: "1" } : {}}
      >
        <button
          onClick={() => {
            setAddingUser(false);
          }}
        >
          x
        </button>
        <div className="searchInputBar">
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
          />
          {searching ? (
            <div className="loader"></div>
          ) : (
            <img src="/search.svg" alt="search" />
          )}
        </div>
        <div className="searchUserList">
          {matchedUsers.map(
            ({ firstName, lastName, role, email, profilePic }, index) => (
              <UserListItem
                key={email}
                firstName={firstName}
                lastName={lastName}
                role={role}
                email={email}
                profilePic={profilePic}
                userSet={userSet}
                onAdd={() => {
                  addUser(matchedUsers[index]);
                }}
                onDelete={() => {
                  removeUser(email);
                }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

function UserListItem({
  firstName,
  lastName,
  email,
  profilePic,
  userSet,
  onAdd,
  onDelete,
}) {
  return (
    <div>
      <img src={profilePic ? profilePic : "/user.svg"} alt="profile" />
      <div>
        <span>{firstName + " " + lastName}</span>
        <span>{email}</span>
      </div>
      {userSet[email] ? (
        <button
          onClick={() => {
            onDelete();
          }}
        >
          -
        </button>
      ) : (
        <button
          onClick={() => {
            onAdd();
          }}
        >
          +
        </button>
      )}
    </div>
  );
}
