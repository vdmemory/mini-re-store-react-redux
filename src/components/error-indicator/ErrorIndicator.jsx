import React from "react";

import "./error-indicator.css";
import icon from "./error.png";

export default function ErrorIndicator() {
  return (
    <div className="error">
      <img src={icon} alt="error icon" />
      <span>...something has gone terribly wrong!</span>
    </div>
  );
}
