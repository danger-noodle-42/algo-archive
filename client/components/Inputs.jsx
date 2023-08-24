import React from 'react';
import styled from '@emotion/styled';

/*
Provide stylized inputs that can be resued throughout the site
*/

export const TextArea = styled.textarea``;

export const Input = styled.input`
  border: lightgrey 1px solid;
  border-radius: 5px;  
  font-size: 16px;
  height: 30px;
  margin: 6px 0;
  padding: 0 8px;
  width: 250px;
`;

export const Button = styled.button`
  background-color: ${props => props.variant === "primary" ? "#51FDEF" : "#FFFCDC"};
  border: #000030 ${props => props.variant === "primary" ? "0" : "1"}px solid;
  border-radius: 10px;
  color: #000030;
  cursor: pointer;
  font-size: 16px;  
  height: 45px;
  width: 90px;
  &:hover {
    background-color: ${props => props.variant === "primary" ? "#4BF0E3" : "#EEEABF"};
  }
  &:disabled {
    background-color: ${props => props.variant === "primary" ? "#AFEDE7" : "#CDCBB1"};
    cursor: not-allowed;
  }
`;