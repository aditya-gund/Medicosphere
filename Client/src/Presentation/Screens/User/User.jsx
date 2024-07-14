import "./User.css";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { GetUserById, UpdateProfilePicture } from "../../../Data/Domain/User/User";
import { useUser } from "../../Redux/User/UserSlice";
import { useModal } from "../../Context/ModalContext";

export function User() {
  const { userId } = useParams();
  const {user: {email}} = useUser();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const {showPopup, hidePopup} = useModal();
  const [img, setImg] = useState(null);

  const getUserData = useCallback(async () => {
    const { data, error } = await GetUserById(userId);
    if (!error) {
      setUser(data);
    } else {
      alert(
        "Oops! looks like we ran into an issue while trying to find user. Please check console for more details."
      );
      console.error(error);
      navigate(-1);
    }
  }, [navigate, userId])

  const onUpdateImage = useCallback((e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  }, []);

  const onConfirmUpdate = useCallback(async () => {
    const {error} = await UpdateProfilePicture(userId, img);
    if(!error)
    {
        alert("Profile updated successfully");
        getUserData();
        hidePopup();
    }
    else
    {
        alert("Oops! looks like we ran into an issue while trying to update profile picture. Please check console for more details or try again later.");
        hidePopup();
    }
  }, [hidePopup, img, userId, getUserData])

  const displayModal = useCallback(() => {
    setImg(null);
    showPopup("UpdateImageModal", {onUpdate: onUpdateImage, img, onConfirm: onConfirmUpdate} )
  }, [showPopup, onUpdateImage, img, onConfirmUpdate])

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return user ? (
    <div className="user-details">
      <div className="UserRow">
        <img src={user.profilePic ? user.profilePic : "/user.svg"} alt="user profile" />
        <div>
          <div>Host:</div>
          <div>{user.firstName + " " + user.lastName}</div>
          <div>Email:</div>
          <div>{user.email}</div>
          <div>Role:</div>
          <div>{user.role}</div>
          {
            email === user.email?
            <button onClick={() => displayModal()} >
                Update Image
            </button>
            :""
          }
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="loader"></div>
    </div>
  );
}
