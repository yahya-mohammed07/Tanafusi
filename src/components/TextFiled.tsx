import React, { ChangeEvent, FormEvent } from "react";

interface TextInputType {
  Id: string;
  Name: string;
  Value: string;
  Placeholder: string;
  Autofocus: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPaste: (e: FormEvent<HTMLInputElement>) => void;
}

const YTextField: React.FC<TextInputType> = ({
  Id,
  Name,
  Value,
  Autofocus,
  Placeholder,
  onChange,
  onPaste,
}) => {
  return (
    <>
      <input
        type="text"
        className="text-center border border-solid mb-4 w-full rounded-md p-3 text-blue-800"
        inputMode="numeric"
        required
        autoComplete="off" // Set autocomplete to "off"
        placeholder={Placeholder}
        id={Id}
        name={Name}
        value={Value}
        onChange={onChange}
        onPaste={onPaste}
        autoFocus={Autofocus}
      />
      <br />
      <br />
    </>
  );
};

export default YTextField;
