import React from "react";

function JSXVariables() {
  let myName = "Kelsie";
  let nameLength = myName.length;
  let reactThoughts = "is super cool!";
  
  function removeVowels(str) {
    return str.replace(/[aeiou]/ig, "");
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {myName}</h1>
          <h2>My name has {nameLength} letters</h2>
          <h2>I think React {reactThoughts}</h2>
          <h2>My name without any vowels is {removeVowels(myName)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
