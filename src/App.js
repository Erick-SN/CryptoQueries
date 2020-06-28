import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import axios from 'axios';
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Arial';
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
function App() {
  const [coin, setCoin] = useState('');
  const [cryptoCoin, setCryptoCoin] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      if (coin === '') return;
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
      setLoading(true);
      const response = await axios.get(URL);
      setLoading(false);
      setResult(response.data.DISPLAY[cryptoCoin][coin]);
    };
    getData();
  }, [coin, cryptoCoin]);
  return (
    <>
      <Container>
        <div>
          <Image src={image} alt='CryptoImage' />
        </div>
        <div>
          <Heading>CryptoQuerys</Heading>
          <Form setCoin={setCoin} setCryptoCoin={setCryptoCoin} />
          {loading ? <Spinner /> : <Quote result={result} />}{' '}
        </div>
      </Container>
    </>
  );
}

export default App;
