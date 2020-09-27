import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

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

  ${(props) => props.fullWidth
    && css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 93.5%;
      font-size: 1.125rem;
    `}

    ${(props) => props.cyan
      && css`
        background: ${palette.cyan[5]};
        &:hover {
          background: ${palette.cyan[4]};
        }
      `}

    ${(props) => props.teal
      && css`
        background: ${palette.Teal[5]};
        &:hover {
          background: ${palette.Teal[4]};
        }
      `}

    ${(props) => props.lang
      && css`
        font-size: 12px;
        line-height: 1.5;
        display: inline-block;
        margin: 0 0.25rem 0.25rem 0;
        padding: 0.1875rem 0.5rem;
        vertical-align: top;
        border-radius: 0.25rem;
        background: #e9ecf3;
        color: #0ca678;
        cursor: pointer;
        &:hover {
          background-color: ${palette.gray[3]};
        }
      `}

    ${(props) => props.orange
      && css`
        background: ${palette.orange[5]};
        &:hover {
          background: ${palette.orange[4]};
        }
      `}

    &:disabled{
      background: ${palette.gray[3]};
      color: ${palette.gray[5]};
      cursor: not-allowed;
    }
`;

const StyledButton = styled.button`
  ${ButtonBlock}
`;
const StyledLink = styled(Link)`
  ${ButtonBlock}
`;

const Button = (props) => (props.to ? (
  <StyledLink
    {...props}
    cyan={props.cyan ? 1 : null}
    teal={props.teal ? 1 : null}
    orange={props.orange ? 1 : null}
    lang={props.lang ? 1 : null}
  />
) : (
  <StyledButton {...props} lang={props.lang ? 1 : null} />
));

export default Button;
