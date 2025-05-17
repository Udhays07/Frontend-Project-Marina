import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/User.css";

const User = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const navigate = useNavigate();

  const handleShowChangePassword = () => {
    setShowChangePassword(true);
  };

  const handleCloseChangePassword = () => {
    setShowChangePassword(false);
  };

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens)
    navigate("/login");
  };

  const handleNavigateToMainpage = () => {
    navigate("/Mainpage");
  };

  return (
    <div className="user-dashboard">
      <div className="back-arrow" onClick={handleNavigateToMainpage}>&larr;</div>
      <div className="user-profile">
        <img src="../src/assets/user.svg" alt="User Profile" className="profile-image" />
        <h2>Udhay</h2>
        <p>Email: udhay@example.com</p>
      </div>
      <div className="user-content">
        <div className="user-section">
          <h3>Settings</h3>
          <form className="settings-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" defaultValue="Udhay" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" defaultValue="udhay@example.com" required />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
      <button className="change-password-button" onClick={handleShowChangePassword}>Change Password</button>

      {showChangePassword && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseChangePassword}>&times;</span>
            <h3>Change Password</h3>
            <form className="change-password-form">
              <div className="form-group">
                <label htmlFor="old-password">Old Password:</label>
                <input type="password" id="old-password" name="old-password" required />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password:</label>
                <input type="password" id="new-password" name="new-password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-new-password">Confirm New Password:</label>
                <input type="password" id="confirm-new-password" name="confirm-new-password" required />
              </div>
              <button type="submit">Update Password</button>
            </form>
          </div>
        </div>
      )}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;