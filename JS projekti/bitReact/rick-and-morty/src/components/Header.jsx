import React from "react";

function Header({ setSelectedChar }) {
  return <header>
    <span onClick={()=>{
      setSelectedChar(null)
    }}
    >
      Rick and Morty
    </span>
  </header>;
}

export default Header;
