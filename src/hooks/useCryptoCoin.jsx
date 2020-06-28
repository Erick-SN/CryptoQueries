import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Arial';
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 2rem;
  display: block;
`;
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCryptoCoin = (label, initialState, options) => {
  const [state, setState] = useState(initialState);
  const SelectionCrypto = () => (
    <>
      <Label>{label}</Label>

      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value=''>-Select-</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectionCrypto, setState];
};

export default useCryptoCoin;
