import React from "react";

import "./loader.css";

export default function Loader() {
  return (
    <div className="wrap">
      <div className="lds-double-ring">
        <div />
        <div />
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
      </div>
    </div>
  );
}
