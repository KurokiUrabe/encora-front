import React from "react";

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: InputProps) => {
  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default Input;
