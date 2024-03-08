import * as React from "react";
import { useState, ChangeEvent } from "react";
interface HomeProps {
  btnName: string;
  label: string;
  type: string;
  btnStyle?: string;
  inputStyle?: string;
}

export const AddInput: React.FC<HomeProps> = ({
  btnName,
  label,
  type,
  inputStyle,
  btnStyle,
}) => {
  const [inputFields, setInputFields] = useState<string[]>([""]);

  const addInputField = () => {
    setInputFields([...inputFields, ""]);
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...inputFields];
    values[index] = event.target.value;
    setInputFields(values);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col gap-1">
        {inputFields.map((inputField, index) => (
          <div key={index} className="flex flex-col gap-1">
            <label htmlFor={`${label}${index}`}>{label}</label>
            <div className="">
              <input
                className={`${inputStyle}`}
                id={`${label}${index}`}
                type={type}
                value={inputField}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <button onClick={addInputField} className={`${btnStyle}`}>
          {btnName}
        </button>
      </div>
    </div>
  );
};
