import React, { useContext } from 'react'
import avatar from "../assets/blank-profile.png";
import name from "../assets/profile/name.png";
import email from "../assets/profile/email.png";
import status from "../assets/profile/status.png";
import gender from "../assets/profile/gender.png";
import phone from "../assets/profile/phone.png";
import address from "../assets/profile/address.png";
import { UserContext } from '../context/userContext';


function Profile() {

  const [state] = useContext(UserContext);

  console.log("ini state", state);


  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-desc">
          <div className="profile-data">
            <h2>Personal Info</h2>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={name} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.fullname}
              </span>
              <span>Fullname</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={email} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.email}
              </span>
              <span>Email</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={status} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {/* {subscribe ? "Active" : "Not Active Please Subscribe"} */}
                Active
              </span>
              <span>Status</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={gender} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>  {state.user.gender}</span>
              <span>Gender</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={phone} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.phone}
              </span>
              <span>Mobile Phone</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={address} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.address}
              </span>
              <span>Address</span>
            </div>
          </div>
        </div>
        <div className="profile-img">
          <img src={avatar} alt="avatar" className="profile-avatar" />
          <button className="profile-button">Change Photo Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
