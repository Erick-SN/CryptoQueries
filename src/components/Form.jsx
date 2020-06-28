import React from 'react';
import styled from '@emotion/styled';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  return (
    <>
      <form>
        <Button type='submit' value='Compute' />
      </form>
    </>
  );
};

export default Form;
