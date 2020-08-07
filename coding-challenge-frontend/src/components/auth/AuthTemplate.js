import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 2px;
    font-size: 30px;
    font-family: 'Baloo', cursive;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 400px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <AuthBox>
        <div className="logo-area">
          <Link to="/">Coding Challenge</Link>
        </div>
        {children}
      </AuthBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
