import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Mainpage.css";

const Mainpage = () => {
  const navigate = useNavigate();

  const people = [
    { id: 1, name: "Thiruvalluvar", imgSrc: "../src/assets/thiruvalluvar.png" },
    { id: 2, name: "Periyar", imgSrc: "../src/assets/periyar.jpg" },
    { id: 3, name: "Kamarajar", imgSrc: "../src/assets/kamarajar.jpg" },
  ];

const handleUserLogoClick = () => {
    navigate("/user");
  };

  return (
    <div className="page-container">
      <div className="navbar">
        <h2 className="navbar-title">SilAI</h2>
        <img src="../src/assets/user.svg" alt="User Logo" className="user-logo"  onClick={handleUserLogoClick}/>
      </div>
      <h1 className="greet">Hello, Udhay</h1>
      <div className="list">
        <h4 className="l-header">People</h4>
        <div className="scroll-container">
          {people.map(person => (
            <div key={person.id} className="person-box">
              <img src={person.imgSrc} alt={person.name} className="person-image" />
              <p className="person-name">{person.name}</p>
              <button className="chat-button">Chat</button>
            </div>
          ))}
        </div>
        <h4 className="l-header">Symbolism</h4>
        <div className="scroll-container">
          {people.map(person => (
            <div key={person.id} className="person-box">
              <img src={person.imgSrc} alt={person.name} className="person-image" />
              <p className="person-name">{person.name}</p>
              <button className="chat-button">Chat</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;