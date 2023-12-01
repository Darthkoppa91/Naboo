import React from "react";

function SingleCharacters({selectedChar}) {
  console.log(selectedChar)
  return <div className="single-character">
    <h2>{selectedChar.name}</h2>
    <img src= {selectedChar.image} alt="Character" />
    <h3>{`Location: ${selectedChar.location.name}`}</h3>
    <h3><span>{`Status: ${selectedChar.status}`}</span></h3>
    <h3>{`Species: ${selectedChar.species}`}</h3>
  </div>;
}

export default SingleCharacters;
