import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

const Calculator = () => {
  const { register, handleSubmit, errors } = useForm();
  const [resultList, setResultList] = useState([]);

  const onSubmit = ({ operator, number1, number2, username }) => {
    let calculate = 0;
    switch (operator) {
      case "+":
        calculate = Number(number1) + Number(number2);
        break;
      case "-":
        calculate = Number(number1) - Number(number2);
        break;
      case "*":
        calculate = Number(number1) * Number(number2);
        break;
      case "/":
        calculate = Number(number1) / Number(number2);
        break;
      default:
        calculate = null;
        break;
    }

    if (calculate !== null) {
      const obj = {
        time: Date.now(),
        username,
        number1,
        number2,
        calculate,
        operator,
      };
      setResultList([...resultList, obj]);
    } else {
      alert("Enter valid operation ( +, -, *, / )");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="username"
          id="username"
          label="Username"
          register={register({ required: true, maxLength: 20 })}
          error={errors.username}
        />
        <FormInput
          type="text"
          name="number1"
          id="number1"
          label="Number 1"
          register={register({ required: true, pattern: /^[0-9]\d*(\.\d+)?$/ })}
          error={errors.number1}
        />
        <FormInput
          type="text"
          name="operator"
          id="operator"
          label="Operation"
          register={register({ required: true })}
          error={errors.operator}
        />
        <FormInput
          type="text"
          name="number2"
          id="number2"
          label="Number 2"
          register={register({ required: true, pattern: /^[0-9]\d*(\.\d+)?$/ })}
          error={errors.number2}
        />

        <button type="submit">Calculate</button>
      </form>

      <ul>
        {resultList
          .sort((a, b) => b.time - a.time)
          .slice(0, 9)
          .map((item, idx) =>
            item.calculate === Infinity ? (
              <div>
                <li key={idx}>divide by zero error.</li>
              </div>
            ) : (
              <li key={idx}>
                {item.username} : {item.number1} {item.operator} {item.number2}{" "}
                = {item.calculate}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Calculator;

// regex for input were added later : Please check the github for timestamp
