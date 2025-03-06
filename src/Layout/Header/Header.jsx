import React from "react";
import "./Header.css";
import profile from '../../imgs/photo.jpg'

function Header({ handleSlide }) {
  return (
    <div className="header">
      <div className="hamburger">
        <svg
          onClick={() => handleSlide()}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <div className="d-flex">
        <div className="header-profile">
          <img
            width={"140px"}
            height="55px"
            src={profile}
            alt="profile"
            className="profile-pic"
          />
          <span className="fs-6 font-light">username007</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
