import React from "react";
import "../styles/error.css";

export default function Error({ message }) {
  return (
    <div className="error-box">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/OOjs_UI_icon_alert-destructive.svg/1200px-OOjs_UI_icon_alert-destructive.svg.png"
        weight="30"
        height="30"
        alt="error"
        className="alert-icon"
      />
      <h4 className="error-message">{message}</h4>
    </div>
  );
}
