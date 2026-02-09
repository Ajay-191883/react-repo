import React from "react";
import headerStyles from "./header.module.css";

export default function Header() {
  return (
    <div>
      header
      <button className={headerStyles.headerBtn}> HEADER BTN </button>
    </div>
  );
}
