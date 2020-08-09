import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const ButtonBlock = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 93.5%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
    ${(props) =>
    props.teal &&
    css`
      background: ${palette.Teal[5]};
      &:hover {
        background: ${palette.Teal[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonBlock}
`;
const StyledLink = styled(Link)`
  ${ButtonBlock}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} teal={props.Teal ? 1 : 0}/>
  ) : (
    <StyledButton {...props}/>
  );
};

export default Button;
