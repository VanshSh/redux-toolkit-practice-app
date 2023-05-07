import { useState } from 'react';
const CustomInput = ({ reference }) => {
  const [value, setValue] = useState(0);
  const onValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input
        ref={reference}
        className="w-100"
        type="number"
        inputMode="numeric"
        value={value}
        onChange={onValueChange}
      />
    </>
  );
};
export default CustomInput;
