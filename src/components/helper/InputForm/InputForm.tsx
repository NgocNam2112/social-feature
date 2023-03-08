import { IInputForm } from "@/types/types";
import Image from "next/image";
import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface IProps {
  inputForm: IInputForm;
  className: string;
  value: string | number;
  error: string;
  onChange: Function;
}

const InputForm: React.FC<IProps> = ({
  inputForm,
  className,
  value,
  error,
  onChange,
}) => {
  return (
    <div>
      <div className={className}>
        <Image
          src={inputForm.src}
          alt={inputForm.alt}
          width={inputForm.width}
          height={inputForm.height}
        />
        <input
          type={inputForm.type}
          placeholder={inputForm.placeholder}
          value={value}
          onChange={(e) => onChange(inputForm.name, e.target.value)}
        />
      </div>
      <ErrorMessage errorMessage={error} />
    </div>
  );
};

export default InputForm;
