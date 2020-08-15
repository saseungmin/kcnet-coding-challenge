import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';
import { Link } from 'react-router-dom';

const LangsBlock = styled.div`
  margin-top: 1rem;
  .lang {
    margin-bottom: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.25rem;
    height: 2rem;
    display: inline-flex;
    color: ${palette.Teal[7]};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    background: rgb(241, 243, 245);
    border-radius: 1rem;
    text-decoration: none;
    align-items: center;
    margin-right:0.5rem;
    &:hover {
      color: ${palette.Teal[5]};
    }
  }
  .langTitle {
    margin-bottom: 1rem;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: 'Cute Font', cursive;
    font-weight: 800;
  }
`;

const Langs= ({langs}) => {
    return (
        <LangsBlock>
          <div className="langTitle">사용가능 언어</div>
          {langs.map(lang => (
          <Link className="lang" to={`/?lang=${lang}`} key={lang}>{lang}</Link>
          ))}
        </LangsBlock>
    );
};

export default Langs;