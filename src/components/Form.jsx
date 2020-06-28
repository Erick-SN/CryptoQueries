import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCryptoCoin from '../hooks/useCryptoCoin';
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
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const COINS = [
    { code: 'USD', name: 'American Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];
  const [coin, CoinSelect] = useCoin('Choose your Coin', '', COINS);
  const [cryptoCoin, SelectCrypto] = useCryptoCoin(
    'Choose a CryptoCoin',
    '',
    list,
  );
  useEffect(() => {
    const getData = async () => {
      const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await axios.get(URL);
      setList(response.data.Data);
    };
    getData();
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    if (coin === '' || cryptoCoin === '') {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        {error ? 'error' : null}
        <CoinSelect />
        <SelectCrypto />
        <Button type='submit' value='Compute' />
      </form>
    </>
  );
};

export default Form;
