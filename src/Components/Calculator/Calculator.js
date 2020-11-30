import React, { useState } from "react";

const Calculator = () => {
  const [userName, setUserName] = useState("");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let calculate = 0;
    switch (operator) {
      case "+":
        calculate = parseInt(number1) + parseInt(number2);
        console.log(calculate);
        break;
      case "-":
        calculate = parseInt(number1) - parseInt(number2);
        console.log(calculate);
        break;
      case "*":
        calculate = parseInt(number1) * parseInt(number2);
        console.log(calculate);
        break;
      case "/":
        calculate = parseInt(number1) / parseInt(number2);
        console.log(calculate);
        break;
      default:
        break;
    }
    setResult(calculate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          placeholder="Enter User Name"
        />
        <input
          type="text"
          onChange={(event) => setNumber1(event.target.value)}
          value={number1}
          placeholder="First Number"
        />
        <input
          type="text"
          onChange={(event) => setOperator(event.target.value)}
          value={operator}
          placeholder="Operand"
        />
        <input
          type="text"
          onChange={(event) => setNumber2(event.target.value)}
          value={number2}
          placeholder="Second Number"
        />

        <button type="submit">Calculate</button>
      </form>

      <h2>
        {userName} : {number1} {operator} {number2} = {result}
      </h2>
    </div>
  );
};

export default Calculator;
