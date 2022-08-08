import React from "react";
import avatar from "./guy.jpeg";

import "./styles.css";

function ProfileCard(props) {
  const {
    student: { firstName, lastName, email, gpa, id, state, city },
  } = props;
  return (
    <div className="card-container">
      <header>
        <img className="card-image" src={avatar} alt={firstName} />
      </header>
      <h1 className="bold-text">{`${firstName} ${lastName}`}</h1>
      <h2 className="normal-text">{email}</h2>
      <h2 className="normal-text">{`${state} , ${city}`}</h2>
      <div className="social-container">
        <div className="photos">
          <h1 className="bold-text">{id}</h1>
          <h2 className="smaller-text">ID</h2>
        </div>
        <div className="likes">
          <h1 className="bold-text">{gpa}</h1>
          <h2 className="smaller-text">GPA</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
