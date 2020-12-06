import React from "react";

const FormInput = ({ register, error, label, id, type, ...inputProps }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} type={type} {...inputProps} />
      {error && <div>{label} required</div>}
    </>
  );
};

export default FormInput;
