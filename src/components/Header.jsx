import React from "react";

function Header() {
  return (
    <header>
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;

function birthdayCakeCandles(candles) {
  let max = Math.max(...candles); //findes max variable in Array.
  let countOfMax = candles.filter(item => {return max ===item}) //returns highest numbers of array
  return countOfMax.length; 
}

birthdayCakeCandles