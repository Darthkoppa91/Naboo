import React from "react";

export const Card = ({ character }) => {
  console.log(character);
  return (
    <div className="card">
      <img src={character.image} />

      <h2>{character.name}</h2>
      <button>Like</button>
    </div>
  );
};
