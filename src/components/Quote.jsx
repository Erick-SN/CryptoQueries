import React from 'react';
import styled from '@emotion/styled';

const Result = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <>
      <Result>
        <Price>
          Price: <span>{result.PRICE}</span>
        </Price>
        <Info>
          Highest price of the day: <span>{result.HIGHDAY}</span>
        </Info>
        <Info>
          Lowest price of the day: <span>{result.LOWDAY}</span>
        </Info>
        <Info>
          Variation the last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
        </Info>
        <Info>
          Last update: <span>{result.LASTUPDATE}</span>
        </Info>
      </Result>
    </>
  );
};

export default Quote;
