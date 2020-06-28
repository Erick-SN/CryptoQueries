import React, { useState } from 'react';

const useCoin = (label, initialState, options) => {
  const [state, setState] = useState(initialState);
  const Select = () => (
    <>
      <label>{label}</label>
      <select>
        <option value=''>-Select-</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
  return [state, Select, setState];
};

export default useCoin;
