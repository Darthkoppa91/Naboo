import React from "react";

export const Card = ({ character, setSelectedChar }) => {
  console.log(character);
  return (
    <div className="card">
      <img src={character.image}alt=""/>
      <h2>{character.name}</h2>
      <button onClick={()=>{
        setSelectedChar(character)

      }}>Like</button>
    </div>
  );
};
