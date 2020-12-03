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
        calculate = parseInt(number1) + parseInt(number2);
        break;
      case "-":
        calculate = parseInt(number1) - parseInt(number2);
        break;
      case "*":
        calculate = parseInt(number1) * parseInt(number2);
        break;
      case "/":
        calculate = parseInt(number1) / parseInt(number2);
        break;
      default:
        break;
    }

    const obj = {
      time: Date.now(),
      username,
      number1,
      number2,
      calculate,
      operator,
    };
    setResultList([...resultList, obj]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="username"
          name="username"
          id="username"
          label="username"
          register={register}
          error={errors.username}
        />
        <FormInput
          type="number1"
          name="number1"
          id="number1"
          label="number1"
          register={register}
          error={errors.number1}
        />
        <FormInput
          type="operator"
          name="operator"
          id="operator"
          label="operator"
          register={register}
          error={errors.operator}
        />
        <FormInput
          type="number2"
          name="number2"
          id="number2"
          label="number2"
          register={register}
          error={errors.number2}
        />

        <button type="submit">Calculate</button>
      </form>

      <ul>
        {resultList
          .sort((a, b) => b.time - a.time)
          .slice(0, 9)
          .map((item, idx) => (
            <li key={idx}>
              {item.username} : {item.number1} {item.operator} {item.number2} ={" "}
              {item.calculate}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Calculator;
